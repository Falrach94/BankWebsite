using BankAccountDomainModel.Modules.Grouping.Data_Objects.Entities;
using BankAccountDomainModel.Modules.Transactions;
using BankAccountDomainModel.Repositories;
using BankAccountLib;
using BankAccountLib.Data_Objects.Entities;
using BankAccountLib.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebBackend.Account_Domain_Model.Data_Objects;

namespace AggregateDatabase.Repositories
{
    public class TransactionsProfileRepository : ITransactionsProfileRepository
    {
        private readonly DatabaseContext _dc;

        public TransactionsProfileRepository(DatabaseContext dc)
        {
            _dc = dc;
        }

        public async Task AddProfileAsync(TransactionsProfile profile, User user)
        {
            var entity = await _dc.TransactionProfiles.AddAsync(profile);

            entity.Property("UserId").CurrentValue = user.Id;

        }
        public async Task<ITransactionsProfile> GetByIdAsync(Guid id)
        {
            return await _dc.TransactionProfiles.FindAsync(id);
        }

        public async Task<ITransactionsProfile> GetByUserIdAsync(Guid userId, bool loadReferences)
        {

            return await _dc.TransactionProfiles.FirstAsync(p => EF.Property<Guid>(p, "UserId") == userId);
        }

        public async Task SaveAsync()
        {
            await _dc.SaveChangesAsync();
        }

        /*
        public async Task<bool> AddProfileAsync(GroupingProfile profile, User user)
        {
            if (await _dc.Profiles.ContainsAsync(profile))
            {
                return false;
            }
            
            var profileEntry = await _dc.AddAsync(profile);
            profileEntry.Property("userId").CurrentValue = user.Id;


            return true;
        }

        public async Task<GroupingProfile> GetByIdAsync(Guid id)
        {
            return await _dc.Profiles.Include("_groups").Where(p => p.Id == id).FirstOrDefaultAsync();
        }

        public async Task<GroupingProfile> GetByUserIdAsync(Guid userId, bool includeGroups, bool includeClassifier)
        {
            var query = _dc.Users.Where(u => u.Id == userId);//.Include(u => u.ActiveProfile);

           // IQueryable<GroupingProfile> query = _dc.Profiles;
            if(includeGroups)
            {
                query = query.Include("ActiveProfile._groups");
            }
            if(includeClassifier)
            {
                //query = query.ThenInclude("_classifier");
            }
            return await query.Select(u => u.ActiveProfile).FirstOrDefaultAsync();
        }

        public async Task SaveAsync()
        {
            await _dc.SaveChangesAsync();
        }

        public async Task UpdateProfileAsync(GroupingProfile profile)
        {
            var entries = _dc.ChangeTracker.Entries();
            foreach (var item in entries)
            {
                if (item.State != EntityState.Unchanged)
                {
                    Console.WriteLine("State: {0}, Type: {1}", item.State.ToString(), item.Entity.GetType().FullName);
                }
            }
            _dc.Update(profile);

        }*/
    }
}
