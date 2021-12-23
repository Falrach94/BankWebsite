using BankAccountDomainModel.Modules.Grouping.Classification;
using BankAccountDomainModel.Modules.Grouping.Data_Objects.Entities;
using BankAccountDomainModel.Utility;
using System;
using System.Collections.Generic;

namespace BankAccountLib.Data_Objects.Entities
{
    public interface IGroupingProfileRead : ITransactionClassifier, IEntity
    {
        ITransactionClassifier Classifier { get; }
        IEnumerable<ITransactionGroup> Groups { get; }

        bool IsUniqueGroupName(string name);
    }
}