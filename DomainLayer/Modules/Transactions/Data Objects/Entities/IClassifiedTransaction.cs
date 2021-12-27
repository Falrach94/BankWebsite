using DomainLayer.Modules.Grouping.Data_Objects.Entities;
using DomainLayer.Utility;
using System;

namespace BankAccountLib.Transactions.Filter
{
    public interface IClassifiedTransaction: IEntity
    {
        TransactionData Data { get; }
        ITransactionGroup Group { get; }
    }
}