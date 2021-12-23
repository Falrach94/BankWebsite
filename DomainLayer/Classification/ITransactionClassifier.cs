using BankAccountDomainModel.Modules.Grouping.Data_Objects.Entities;
using BankAccountLib;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BankAccountDomainModel.Modules.Grouping.Classification
{
    public interface ITransactionClassifier
    {
        DateTime UpdateTimestamp { get; }
        ITransactionGroup Classify(TransactionData data);
    }
}
