using BankAccountLib.Classification.Data;
using BankAccountLib.Transactions.Filter;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BankAccountLib.Classification
{
    /// <summary>
    /// Classifies feature vectors.
    /// </summary>
    public interface IClassifier
    {
        /// <summary>
        /// Classifies a feature vector in a given context.
        /// </summary>
        /// <param name="featureVec">feature representation of a transaction (result of IFeatureExtractor)</param>
        /// <param name="context">classification context containing training state</param>
        /// <returns>recognized group or null if no good classification could be made</returns>
        public TransactionGroup Classify(float[] featureVec, ClassificationContext context);
    }
}
