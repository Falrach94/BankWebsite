using BankAccountDomainModel.Modules.Grouping.Data_Objects.Entities;
using System;

namespace BankAccountLib.Data_Objects.Entities
{
    public interface IGroupingProfile : IGroupingProfileRead
    {
        ITransactionGroup AddTransactionToGroup(Guid groupId, TransactionData transaction);
        ITransactionGroup RemoveTransactionFromGroup(Guid groupId, TransactionData transaction);

        
        ITransactionGroup CreateGroup(string name);
        ITransactionGroup RemoveGroup(Guid groupId);
        ITransactionGroup RenameGroup(Guid groupId, string name);
    }
}