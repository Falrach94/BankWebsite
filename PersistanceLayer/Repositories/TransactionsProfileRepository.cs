using DomainLayer.Modules.Grouping.Data_Objects.Entities;
using DomainLayer.Modules.Transactions;
using DomainLayer.Repositories;
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

    }
}
