using BankAccountLib.Classification.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static BankAccountLib.Classification_Module.Utilities.DistanceUtils;

namespace BankAccountLib.Group_Classification_Module.Utilities
{
    /// <summary>
    /// Utility class for classification specific methods.
    /// </summary>
    public static class ClassificationUtils
    {

        /// <summary>
        /// Determines the nearest neighbors of a sample.
        /// </summary>
        /// <param name="selection">feature selection to be used</param>
        /// <param name="target">feature vec of target sample</param>
        /// <param name="data"></param>
        /// <param name="count"></param>
        /// <param name="metric"></param>
        /// <returns></returns>
        public static List<(float, TrainingSample)> FindNearestNeighbors(IEnumerable<int> selection,
                                                                        float[] target, 
                                                                        IEnumerable<TrainingSample> data, 
                                                                        int count, 
                                                                        Metric metric)
        {
            return data.Select(s => (metric(selection, target, s.Features), s))
                        .OrderBy(s => s.Item1).Take(count).ToList();
        }


        /// <summary>
        /// Projects sample to an integer using a given feature selection interpreting feature vector as a binary number.
        /// </summary>
        /// <param name="selection">features to be used</param>
        /// <param name="featureVec">feature vector to be projected</param>
        /// <returns>integer representation</returns>
        public static int EncodeFeatureVec(IList<int> selection, float[] featureVec)
        {
            int v = 1;
            int result = 0;
            for (int i = 0; i < selection.Count; i++)
            {
                if (featureVec[selection[i]] > 0.5)
                {
                    result += v;
                }
                v *= 2;
            }
            return result;
        }

    }
}
