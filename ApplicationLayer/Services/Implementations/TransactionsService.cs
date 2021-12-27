using AggregateDatabase;
using ApplicationLayer.DTOs;
using ApplicationLayer.Services;
using DomainLayer.Repositories;
using BankAccountLib;
using BankAccountLib.Data_Objects.Entities;
using BankAccountLib.Repositories;
using BankAccountLib.Utility;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebBackend.Account_Domain_Model.Data_Objects;
using DomainLayer.Modules.UploadSupervisor.VOs;

namespace ApplicationLayer
{
    public class TransactionsService : ITransactionsService
    {
        private readonly ITransactionsProfileRepository _transactionsRepo;
        private readonly IGroupingProfileRepository _groupingRepo;
        private readonly IUploadHistoryRepository _uploadManagerRepo;
        private readonly DatabaseContext _dc;

        public TransactionsService(DatabaseContext dc,
                                    ITransactionsProfileRepository profileRepo,
                                    IGroupingProfileRepository groupingRepo,
                                    IUploadHistoryRepository historyRepo)
        {
            _transactionsRepo = profileRepo;
            _groupingRepo = groupingRepo;
            _uploadManagerRepo = historyRepo;
            _dc = dc;
        }


        public async Task<IEnumerable<TransactionGroupDTO>> GetTransactionsAsync(Guid userId, DateTime from, TimeSpan len)
        {
            var stamp = DateTime.Now;
            var groupingProfile = await _groupingRepo.GetByUserIdAsync(userId);
            Console.WriteLine("[GT] SQL-Query (GroupingProfile): " + (DateTime.Now - stamp).TotalMilliseconds + " ms");
            stamp = DateTime.Now;
            var profile = await _transactionsRepo.GetByUserIdAsync(userId, true);
            Console.WriteLine("[GT] SQL-Query (TransactionsProfile): " + (DateTime.Now - stamp).TotalMilliseconds + " ms");
            stamp = DateTime.Now;
            if (profile is null)
            {
                throw new UserNotFoundException();
            }

            //get classified transactions
            var transactions = profile.GetTransactions(from, len);

            Console.WriteLine("[GT] Domain-Query: " + (DateTime.Now - stamp).TotalMilliseconds + " ms");
            stamp = DateTime.Now;

            //create transaction groups
            var groupedTransactions = transactions.GroupBy(t => t.Group);

            //map model to DTOs
            return groupedTransactions.Select(g =>
            {
                GroupDTO group = null;

                if(g.Key != null)
                {
                    group = new(g.Key, false);
                }

                return new TransactionGroupDTO(g.Select(t=>new TransactionDTO(t)), group);
            });

        }

        public async Task<UploadPreviewDTO> UploadPreviewAsync(Guid userId, RawCSVFile file)
        {
            if (file is null)
            {
                throw new ArgumentNullException(nameof(file));
            }

            //get upload manager from persistance
            var uploadManager = await _uploadManagerRepo.GetByUserIdAsync(userId);
            if (uploadManager is null)
            {
                throw new UserNotFoundException();
            }

            //set new preview
            var result = uploadManager.SetPreview(file);

            //update persistance
            await _uploadManagerRepo.SaveAsync();

            return new UploadPreviewDTO(result);
        }

        public async Task<UploadSummaryDTO> ApplyPreviewAsync(Guid userId)
        {
            //get upload manager from persistance
            var uploadManager = await _uploadManagerRepo.GetByUserIdAsync(userId);
            if (uploadManager is null)
            {
                throw new UserNotFoundException();
            }

            //apply preview on model
            var summary = uploadManager.ApplyPreview();

            //update persistance
            if(summary.UploadStatus == UploadState.Successfull)
            {
                foreach(var t in summary.Transactions)
                {
                    _dc.Entry(t).State = EntityState.Added;
                    _dc.Entry(t).Reference(t => t.Data).TargetEntry.State = EntityState.Added;
                }
                await _dc.SaveChangesAsync();
            }
            return new UploadSummaryDTO(summary);
        }
        public async Task<IEnumerable<UploadSummaryDTO>> GetUploadSummariesAsync(Guid userId)
        {
            var history = await _uploadManagerRepo.GetByUserIdAsync(userId);
            return history.History.Select(s => new UploadSummaryDTO(s));
        }

    }
}
