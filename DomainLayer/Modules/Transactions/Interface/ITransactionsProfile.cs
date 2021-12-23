using BankAccountLib;
using BankAccountLib.Transactions.Filter;
using System.Collections.Generic;

namespace BankAccountDomainModel.Modules.Transactions
{
    public interface ITransactionsProfile : ITransactionsProfileRead
    {
        /// <summary>
        /// Adds only unkown transactions.
        /// </summary>
        /// <param name="transactions"></param>
        /// <returns>list of transactions that were not already stored</returns>
        public IEnumerable<IClassifiedTransaction> AddTransactions(IEnumerable<TransactionData> transactions);

    }
}