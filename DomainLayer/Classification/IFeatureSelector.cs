using BankAccountLib.Classification.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BankAccountLib.Classification
{
    /// <summary>
    /// Creates a feature selection for a given training set.
    /// </summary>
    public interface IFeatureSelector
    {
        /// <summary>
        /// Creates feature selection for given collection of Sample objects.
        /// </summary>
        /// <param name="trainingData">Sample collection containing pre classified feature vectors.</param>
        /// <returns>list of selected feature indizes</returns>
        List<int> SelectFeatures(IEnumerable<TrainingSample> trainingData);
    }
}
