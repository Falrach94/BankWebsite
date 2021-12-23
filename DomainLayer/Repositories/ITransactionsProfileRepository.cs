using BankAccountDomainModel.Modules.Transactions;
using BankAccountLib.Data_Objects.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebBackend.Account_Domain_Model.Data_Objects;

namespace BankAccountDomainModel.Repositories
{
    public interface ITransactionsProfileRepository
    {
        Task<ITransactionsProfile> GetByUserIdAsync(Guid userId, bool loadReferences);
        Task<ITransactionsProfile> GetByIdAsync(Guid userId);

        Task SaveAsync();
        Task AddProfileAsync(TransactionsProfile profile, User user);
    }
}
