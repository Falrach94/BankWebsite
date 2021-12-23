using BankAccountLib.Transactions.Filter;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BankAccountLib.Classification.Data
{
    /// <summary>
    /// Training data representation of a Transaction as feature vector with assigned TransactionGroup.
    /// </summary>
    public class TrainingSample
    {
        private TrainingSample() { }
        public TrainingSample(float[] features, TransactionGroup @class)
        {
            Features = features;
            Class = @class;
        }

        /// <summary>
        /// feature vector (generate with IFeatureExtractor)
        /// </summary>
        public float[] Features { get; }
        /// <summary>
        /// TransactionGroup for this objects feature vector
        /// </summary>
        public TransactionGroup Class { get; }
    }
}
