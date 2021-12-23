using BankAccountLib.Classification.Data;
using BankAccountLib.Group_Classification_Module.Utilities;
using BankAccountLib.Transactions.Filter;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BankAccountLib.Classification.Classificator
{
    public class SimpleClassificator : IClassifier
    {
        private SimpleClassificator() { }
        public static SimpleClassificator Instance { get; } = new();

        public TransactionGroup Classify(float[] featureVec, ClassificationContext context)
        {
            int v = ClassificationUtils.EncodeFeatureVec(context.FeatureSelection.ToList(), featureVec);
            foreach(var s in context.TrainingSamples)
            {
                if(v == ClassificationUtils.EncodeFeatureVec(context.FeatureSelection.ToList(), s.Features))
                {
                    return s.Class;
                }
            }
            return null;
        }
    }
}
