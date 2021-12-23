using AggregateDatabase;
using ApplicationLayer.DTOs;
using ApplicationLayer.Services;
using BankAccountDomainModel.Repositories;
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

namespace ApplicationLayer
{
    public class TransactionsService : ITransactionsService
    {
        private readonly ITransactionsProfileRepository _transactionsRepo;
        private readonly IGroupingProfileRepository _groupingRepo;
        private readonly DatabaseContext _dc;

        public TransactionsService(DatabaseContext dc,
                                    ITransactionsProfileRepository profileRepo,
                                    IGroupingProfileRepository groupingRepo)
        {
            _transactionsRepo = profileRepo;
            _groupingRepo = groupingRepo;
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

        public async Task<IEnumerable<TransactionDTO>> AddTransactionsAsync(Guid userId, IEnumerable<TransactionData> transactions)
        {
            var groupingProfile = await _groupingRepo.GetByUserIdAsync(userId);
            var profile = await _transactionsRepo.GetByUserIdAsync(userId, true);
            if (profile is null)
            {
                throw new UserNotFoundException();
            }

            var newTransactions = profile.AddTransactions(transactions);

            foreach (var t in newTransactions)
            {
                var e = _dc.Entry(t);
                e.State = EntityState.Added;
                e.Reference(t => t.Data).TargetEntry.State = EntityState.Added;
            }


            await _transactionsRepo.SaveAsync();

            return newTransactions.Select(t => new TransactionDTO(t));
            /*

            var res = user.AddTransactions(transactions).ToList();

            _dc.Update(user);

            foreach (var t in res)
            {
                var e = _dc.Entry(t);
                e.State = EntityState.Added;
                e.Reference(t => t.Data).TargetEntry.State = EntityState.Added;
            }

            await _userRepo.SaveAsync();*/

        }


    }
}
