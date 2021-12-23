using BankAccountLib.Classification.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BankAccountLib.Classification
{
    /// <summary>
    /// Extracts feature vector from Transaction object.
    /// </summary>
    public interface IFeatureExtractor
    {
        /// <summary>
        /// Configures extractor for given training data.
        /// </summary>
        /// <param name="data">training data</param>
        public void Configure(IEnumerable<TransactionData> data);


        public void LoadSerializedConfiguration(string config);
        public string GetSerializedConfiguration();

        /// <summary>
        /// Transforms transaction to feature float array.
        /// </summary>
        /// <param name="transaction">Transaction to be transformed</param>
        /// <returns>features as float array</returns>
        public float[] Extract(TransactionData transaction);

        /// <summary>
        /// number of features extracted for each transaction
        /// </summary>
        public int FeatureCount { get; }
        /// <summary>
        /// names of all configured features.
        /// </summary>
        public List<string> FeatureNames { get; }
    }
}
