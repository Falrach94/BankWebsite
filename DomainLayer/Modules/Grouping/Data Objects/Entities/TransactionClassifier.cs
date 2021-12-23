using BankAccountLib.Classification;
using BankAccountLib.Classification.Classificator;
using BankAccountLib.Classification.Extractor;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BankAccountDomainModel.Modules.Grouping.Data_Objects.Entities
{
    public class TransactionClassifier : ClassificationContext
    {
        public WordExtractor Extractor { get => _extractor as WordExtractor; set => _extractor = value; }

        public TransactionClassifier()
            : base(new WordExtractor(), null, NNClassifier.Instance)
        {
        }
    }
}
