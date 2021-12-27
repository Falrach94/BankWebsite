using DomainLayer.Modules.Grouping.Classification;
using DomainLayer.Modules.Grouping.Data_Objects.Entities;
using BankAccountLib.Classification.Data;
//using BankAccountLib.Modules.Group_Classification.Data_Objects.Entities;
using BankAccountLib.Transactions.Filter;
using BankAccountLib.Utility;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BankAccountLib.Classification
{
    /// <summary>
    /// State context for classification components.
    /// </summary>
    public class ClassificationContext : Entity, ITransactionClassifier
    {
        public ClassificationContext(IFeatureExtractor extractor, 
                                    IFeatureSelector featureSelector, 
                                    IClassifier classifier) 
        {
            _extractor = extractor;
            _featureSelector = featureSelector;
            _classifier = classifier;
        }

        /// <summary>
        /// Feature selection to be used.
        /// </summary>
        public IEnumerable<int> FeatureSelection { get; private set; }

        /// <summary>
        /// TrainingSample objects with examples used for classification.
        /// </summary>
        public IEnumerable<TrainingSample> TrainingSamples { get; private set; } = new List<TrainingSample>();

        public DateTime UpdateTimestamp { get; private set; }


        /// <summary>
        /// IFeatureExctractor to be used for creating feature vectors.
        /// </summary>
        protected IFeatureExtractor _extractor;
        /// <summary>
        /// IFeatureSelector to be used for feature selection (if null, no feature selection is performed)
        /// </summary>
        private readonly IFeatureSelector _featureSelector;
        /// <summary>
        /// IClassifier to be used for classifying TransactionGroups
        /// </summary>
        private readonly IClassifier _classifier;



        /// <summary>
        /// Updates training samples and performs feature selection.
        /// </summary>
        /// <param name="groups"></param>
        public void Update(IEnumerable<TransactionGroup> groups)
        {
            UpdateTimestamp = DateTime.Now;
            //build training tuples
            IEnumerable<Tuple<TransactionData, TransactionGroup>> trainingTuples
                = groups.Select(g =>
                    g.ExampleTransactions.Select(t =>
                        new Tuple<TransactionData, TransactionGroup>(t, g)
                    )).SelectMany(s => s);

            //gather all preclassified transactions
            var preclassifiedTransactions = trainingTuples.Select(p => p.Item1).ToHashSet();

            //configure Extractor
            _extractor.Configure(trainingTuples.Select(p => p.Item1));

            //build samples
            TrainingSamples = trainingTuples.Select(p => new TrainingSample(_extractor.Extract(p.Item1), p.Item2)).ToList();

            //feature selection
            if(_featureSelector is not null)
            {
                FeatureSelection = _featureSelector.SelectFeatures(TrainingSamples);
            }
            else
            {
                FeatureSelection = Enumerable.Range(0, _extractor.FeatureCount).ToList(); // all features
            }
        }

        /// <summary>
        /// Performs classification on given transactions.
        /// </summary>
        /// <param name="data"></param>
        /// <returns></returns>
       /* public IEnumerable<ClassificationResultGroupDepr> Classify(IEnumerable<TransactionData> data)
        {
            List<ClassificationResultGroupDepr> resultGroups = new();

            //group for unclassifyable transactions 
            ClassificationResultGroupDepr NullGroup = new();
            resultGroups.Add(NullGroup);

            Dictionary<TransactionGroup, ClassificationResultGroupDepr> dic = new();

            foreach (var t in data)
            {
                var group = _classifier.Classify(_extractor.Extract(t), this);

                if (group == null)
                {
                    NullGroup.Transactions.Add(t);
                }
                else
                {
                    if (!dic.ContainsKey(group))
                    {
                        var resultGroup = new ClassificationResultGroupDepr()
                        {
                            Class = group
                        };
                        dic.Add(group, resultGroup);
                        resultGroups.Add(resultGroup);
                    }

                    dic[group].Transactions.Add(t);
                }

            }

            return resultGroups;
        }*/

        /*public IEnumerable<ClassifiedTransaction> Classify(IEnumerable<TransactionData> data)
        {
            return data.Select(t => new ClassifiedTransaction(t, _classifier.Classify(_extractor.Extract(t), this)));
        }*/
        public ITransactionGroup Classify(TransactionData data)
        {
            if(FeatureSelection.Count() != _extractor.FeatureCount)
            {
                throw new StateInvalidException($"Classifier context is in an invalid state! Extractor feature count ({_extractor.FeatureCount}) does not match Feature Selection ({FeatureSelection.Count()})");
            }

            try
            {
                return _classifier.Classify(_extractor.Extract(data), this);
            }
            catch(Exception ex)
            {
                throw new AggregateException("Unhandled exception during classification!", ex);
            }
        }

    }
}
