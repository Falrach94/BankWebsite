using BankAccountLib.Classification.Data;
using BankAccountLib.Group_Classification_Module.Utilities;
using BankAccountLib.Transactions.Filter;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BankAccountLib.Classification.FeatureSelection
{
    public class FocusSelector : IFeatureSelector
    {
        private FocusSelector() { }

        public static FocusSelector Instance { get; } = new();

        /// <summary>
        /// Creates subset all possible feature subsets with a certain size.
        /// </summary>
        /// <param name="featureCount">total feature count</param>
        /// <param name="size">number of features per subset</param>
        /// <returns>set of feature indizes</returns>
        private static List<List<int>> IncrementSubsets(List<List<int>> sets, int featureCount)
        {
            List<List<int>> result = new();

            if(sets == null)
            {
                return new List<List<int>>();
            }
            else if (sets.Count == 0)
            {
                for (int i = 0; i < featureCount; i++)
                {
                    var newSet = new List<int>();
                    newSet.Add(i);
                    result.Add(newSet);
                }
            }
            else
            {
                foreach (var s in sets)
                {
                    for (int i = s.Last()+1; i < featureCount; i++)
                    {
                        var newSet = new List<int>(s);
                        newSet.Add(i);
                        result.Add(newSet);
                    }
                }
            }
            return result;
        }


        public List<int> SelectFeatures(IEnumerable<TrainingSample> trainingData)
        {
            var empty = new List<int>();

            List<List<int>> featureSubsets = null;

            if (trainingData.Count() == 0)
                return empty;

            int featureCount = trainingData.First().Features.Length;

            for(int i = 0; i < featureCount; i++)
            {
                //create all subsets with one more feature
                featureSubsets = IncrementSubsets(featureSubsets, featureCount);

                //test all subsets
                foreach(var subset in featureSubsets)
                {
                    bool success = true;
                    Dictionary<int, TransactionGroup> dic = new();
                    //classify every trainingsample
                    foreach (var sample in trainingData)
                    {
                        int code = ClassificationUtils.EncodeFeatureVec(subset, sample.Features);
                        if(code == 0)
                        {
                            success = false;
                            break;
                        }
                        if(!dic.ContainsKey(code))
                        {
                            dic.Add(code, sample.Class);
                        }
                        else
                        {
                            if(dic[code] != sample.Class)
                            {
                                success = false;
                                break;
                            }
                        }
                    }
                    if(success)
                    {
                        return subset;
                    }
                }
            }

            return empty;
        }
    }
}
