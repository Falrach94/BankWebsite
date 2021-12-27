using DomainLayer.Modules.Grouping.Classification;
using DomainLayer.Modules.Grouping.Data_Objects.Entities;
using DomainLayer.Utility;
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