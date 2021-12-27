using DomainLayer.Modules.Grouping.Classification;
using DomainLayer.Modules.Grouping.Data_Objects.Entities;
using BankAccountLib.Utility;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BankAccountLib.Transactions.Filter
{
    public class ClassifiedTransaction : Entity, IClassifiedTransaction
    {
        private ClassifiedTransaction() { }
        public ClassifiedTransaction(TransactionData data)
        {
            Data = data;
        }
        public ClassifiedTransaction(TransactionData data, ITransactionGroup group, DateTime timestamp)
            : this(data)
        {
            _group = group as TransactionGroup;
            _classificationTimestamp = timestamp;
        }


        private TransactionGroup _group;
        private DateTime _classificationTimestamp;

        public ITransactionGroup Group => _group;
        public TransactionData Data { get; }


        public void UpdateClassification(ITransactionClassifier classifier)
        {
            if (_classificationTimestamp < classifier.UpdateTimestamp)
            {
                _group = classifier.Classify(Data) as TransactionGroup;
                _classificationTimestamp = classifier.UpdateTimestamp;
            }
        }
    }
}
