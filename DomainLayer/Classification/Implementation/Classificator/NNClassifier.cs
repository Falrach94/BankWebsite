using BankAccountLib.Classification.Data;
using BankAccountLib.Classification_Module.Utilities;
using BankAccountLib.Group_Classification_Module.Utilities;
using BankAccountLib.Transactions.Filter;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BankAccountLib.Classification.Classificator
{
    public class NNClassifier : IClassifier
    {
        private NNClassifier() { }
        public static NNClassifier Instance { get; } = new();

        public TransactionGroup Classify(float[] featureVec, ClassificationContext context)
        {
            var result = ClassificationUtils.FindNearestNeighbors(context.FeatureSelection,
                                                            featureVec,
                                                            context.TrainingSamples,
                                                            1,
                                                            DistanceUtils.HammingDistance);

            if (result.Count == 0) // empty training set                
            {
                return null;
            }

            var nn = result[0].Item2;

            int featureCount = context.FeatureSelection.Count();



            float nullDist = DistanceUtils.HammingDistance(context.FeatureSelection,//distance to 'null'-object
                                                                        featureVec,
                                                                        Enumerable.Repeat(0.0f,nn.Features.Length).ToArray()); 


            if (result[0].Item1 > nullDist)
            {
                return null;
            }

            return result[0].Item2.Class;
        }
    }
}
