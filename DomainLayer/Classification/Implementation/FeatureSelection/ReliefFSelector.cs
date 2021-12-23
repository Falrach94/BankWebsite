using BankAccountLib.Classification.Data;
using BankAccountLib.Classification_Module.Utilities;
using BankAccountLib.Group_Classification_Module.Utilities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BankAccountLib.Classification.FeatureSelection
{
    public class ReliefFSelector : IFeatureSelector
    {
        //number of considered neighbors
        private readonly int _k;
        const float THRESHOLD = 0.01f;


        public ReliefFSelector(int k)
        {
            _k = k;
        }

        public List<int> SelectFeatures(IEnumerable<TrainingSample> trainingData)
        {
            if(trainingData.Count() == 0)
            {
                return new();
            }

            //--- initialize -------------------

            //total number of training data
            int m = trainingData.Count();

            //split training data into classes
            Dictionary<TransactionGroup, List<TrainingSample>> groupDic = new();
            foreach (var s in trainingData)
            {
                if(!groupDic.ContainsKey(s.Class))
                {
                    groupDic.Add(s.Class, new());
                }

                groupDic[s.Class].Add(s);
            }

            //determine share of classes in training data
            Dictionary<TransactionGroup, float> classProbability = new();
            foreach(var p in groupDic)
            {
                classProbability.Add(p.Key, p.Value.Count / (float)m);
            }

            //number of features
            int featureCount = trainingData.First().Features.Length;

            //select all features
            List<int> selection = Enumerable.Range(0, featureCount).ToList();

            //initialize weights to 0
            float[] w = Enumerable.Repeat(0.0f, featureCount).ToArray();


            //--- hill climbing --------------------
            
            foreach(var sample in trainingData)
            {
                //find k nearest hits
                var nearestHits = ClassificationUtils.FindNearestNeighbors(selection,
                                                            sample.Features,
                                                            groupDic[sample.Class].Where(s => s != sample),
                                                            _k,
                                                            DistanceUtils.HammingDistance);
                //find k nearest misses for all other classes
                var nearestMisses = groupDic.Where(p => p.Key != sample.Class)
                                            .Select(p => ClassificationUtils.FindNearestNeighbors(selection,
                                                            sample.Features,
                                                            p.Value,
                                                            _k,
                                                            DistanceUtils.HammingDistance));

                //adjust weights
                for(int f = 0; f < featureCount; f++)
                {
                    //sum near hit contribution
                    float nhCon = 0;
                    foreach(var h in nearestHits)
                    {
                        nhCon += DistanceUtils.BinaryFeatureDistance(sample.Features, h.Item2.Features, f);
                    }
                    nhCon /= (m * nearestHits.Count);
                    w[f] -= nhCon;

                    //sum near miss contribution for each class
                    foreach(var nearMissesClass in nearestMisses)
                    {
                        float nmCon = 0;
                        foreach (var miss in nearMissesClass)
                        {
                            nmCon += DistanceUtils.BinaryFeatureDistance(sample.Features, miss.Item2.Features, f);
                        }
                        nmCon /= (m * nearMissesClass.Count);
                        nmCon *= (classProbability[sample.Class]/(1 - classProbability[nearMissesClass.First().Item2.Class]));

                        w[f] += nmCon;
                    }
                }
            }

            //--- thresholding -------------------

            List<int> result = new();
            for(int i = 0; i < w.Length; i++)
            {
                if(w[i] >= 0)
                {
                    result.Add(i);
                }
            }
            return result;
        }
    }
}
