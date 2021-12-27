using DomainLayer.Utility;
using BankAccountLib.Transactions.Filter;
using System;
using System.Collections.Generic;

namespace DomainLayer.Modules.Transactions
{
    public interface ITransactionsProfileRead : IEntity
    {
        IEnumerable<IClassifiedTransaction> GetTransactions(DateTime from, TimeSpan len);
        IEnumerable<IClassifiedTransaction> Transactions { get; }
    }
}