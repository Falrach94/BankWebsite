using AggregateDatabase;
using ApplicationLayer.DTOs;
using BankAccountDomainModel.Modules.Grouping.Data_Objects.Entities;
using BankAccountDomainModel.Repositories;
using BankAccountDomainModel.Services;
using BankAccountLib;
using BankAccountLib.Data_Objects.Entities;
using BankAccountLib.Repositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApplicationLayer.Services
{
    public class GroupingService : IGroupingService
    {
        private readonly IGroupingProfileRepository _groupingRepo;
        private readonly ITransactionsProfileRepository _transactionsRepo;
        private readonly DatabaseContext _dc;

        public GroupingService(DatabaseContext dc, 
                               IGroupingProfileRepository profileRepo, 
                               ITransactionsProfileRepository transactionsRepo)
        {
            _groupingRepo = profileRepo;
            _dc = dc;
            _transactionsRepo = transactionsRepo;
        }


        public async Task<GroupDTO> CreateNewGroupAsync(Guid userId, string name)
        {

            var profile = await _groupingRepo.GetByUserIdAsync(userId);
            if (profile is null)
            {
                throw new UserNotFoundException();
            }

            var result = profile.CreateGroup(name);

            try
            {
                _dc.Entry(result).State = EntityState.Added;
                await _groupingRepo.SaveAsync();
            }
            catch
            {
                profile.RemoveGroup(result.Id);
                throw;
            }
            return new GroupDTO(result, true);
        }
        public async Task RemoveGroupAsync(Guid userId, Guid groupId)
        {

            var profile = await _groupingRepo.GetByUserIdAsync(userId);
            if (profile is null)
            {
                throw new UserNotFoundException();
            }

            profile.RemoveGroup(groupId);

            await _dc.SaveChangesAsync();

        }


        public async Task<IEnumerable<GroupDTO>> GetGroupsAsync(Guid userId)
        {
            var timestamp = DateTime.Now;

            var profile = await _groupingRepo.GetByUserIdAsync(userId);
            if (profile is null)
            {
                throw new UserNotFoundException();
            }

            var len = DateTime.Now - timestamp;
            Console.WriteLine($"time - GetGroups: {len.TotalMilliseconds} ms");


            return profile.Groups.Select(g => new GroupDTO(g, true));
        }


        public async Task<GroupDTO> RenameGroupAsync(Guid userId, Guid groupId, string name)
        {
            var profile = await _groupingRepo.GetByUserIdAsync(userId);
            if(profile is null)
            {
                throw new UserNotFoundException();
            }

            var group = profile.RenameGroup(groupId, name);
            await _groupingRepo.SaveAsync();
            return new GroupDTO(group, false);
        }
        public async Task<GroupDTO> AddTransactionToGroupAsync(Guid userId, Guid groupId, Guid transactionId)
        {
            var stamp = DateTime.Now;

            var groupingProfile = await _groupingRepo.GetByUserIdAsync(userId);
            if (groupingProfile is null)
            {
                throw new UserNotFoundException();
            }
            var transactionsProfile = await _transactionsRepo.GetByUserIdAsync(userId, true);
            if (transactionsProfile is null)
            {
                throw new UserNotFoundException();
            }

            Console.WriteLine("[ATTG] SQL-Query: " + (DateTime.Now-stamp).TotalMilliseconds + " ms");
            stamp = DateTime.Now;


            var group = BankAccountDomainModel.Services.TransactionsService.AddTransactionToGroup(groupingProfile, transactionsProfile, groupId, transactionId);

            Console.WriteLine("[ATTG] Domain-Query: " + (DateTime.Now - stamp).TotalMilliseconds + " ms");
            stamp = DateTime.Now;

            if (group is null)
            {
                throw new NothingToBeDoneException();
            }
            var ce = _dc.Entry((TransactionClassifier)groupingProfile.Classifier);

            ce.Property(tc => tc.Extractor).IsModified = true;

            await _groupingRepo.SaveAsync();

            Console.WriteLine("[ATTG] Transfer-Preperation: " + (DateTime.Now - stamp).TotalMilliseconds + " ms");

            return new GroupDTO(group, true);
        }
        
    }
}
