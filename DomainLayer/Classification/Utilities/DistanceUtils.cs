using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BankAccountLib.Classification_Module.Utilities
{
    /// <summary>
    /// Utility class with distance related methods.
    /// </summary>
    public static class DistanceUtils
    {
        /// <summary>
        /// Metric delegate using a feature selection. 
        /// Calculates distance of two feature vectors.
        /// </summary>
        /// <param name="selection">selection of features to be used for metric</param>
        /// <param name="a">first feature vector</param>
        /// <param name="b">second feature vector</param>
        /// <returns></returns>
        public delegate float Metric(IEnumerable<int> selection, float[] a, float[] b);

        /// <summary>
        /// Calculates absolute distance for each feature.
        /// </summary>
        /// <param name="a">first feature vector</param>
        /// <param name="b">second feature vector</param>
        /// <returns>feature distance array</returns>
        public static float[] BinaryFeatureDistance(float[] a, float[] b)
        {
            float[] res = new float[a.Length];
            for (int i = 0; i < res.Length; i++)
            {
                res[i] = Math.Abs(a[i] - b[i]);
            }
            return res;
        }

        /// <summary>
        /// Calculates absolute distance for a sinle feature
        /// </summary>
        /// <param name="a">first feature vector</param>
        /// <param name="b">second feature vector</param>
        /// <param name="f">index of selected feature</param>
        /// <returns></returns>
        public static float BinaryFeatureDistance(float[] a, float[] b, int f)
        {
            return Math.Abs(a[f] - b[f]);
        }

        /// <summary>
        /// Calculates hamming distance of two feature vectors
        /// </summary>
        /// <param name="selection"></param>
        /// <param name="a"></param>
        /// <param name="b"></param>
        /// <returns></returns>
        public static float HammingDistance(IEnumerable<int> selection, float[] a, float[] b)
        {
            int dist = 0;
            foreach (var s in selection)
            {
                if (Math.Abs(a[s] - b[s]) > 0.5)
                {
                    dist++;
                }
            }
            return dist;
        }

    }
}
