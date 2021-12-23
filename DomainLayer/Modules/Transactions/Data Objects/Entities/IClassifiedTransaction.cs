using BankAccountDomainModel.Modules.Grouping.Data_Objects.Entities;
using BankAccountDomainModel.Utility;
using System;

namespace BankAccountLib.Transactions.Filter
{
    public interface IClassifiedTransaction: IEntity
    {
        TransactionData Data { get; }
        ITransactionGroup Group { get; }
    }
}