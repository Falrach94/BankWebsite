using BankAccountLib.Classification.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace BankAccountLib.Classification.Extractor
{
    public class WordExtractor : IFeatureExtractor
    {
        private ISet<string> _targetWords = new HashSet<string>();
        private ISet<string> _purposeWords = new HashSet<string>();
        private ISet<string> _accountWords = new HashSet<string>();

        public List<string> FeatureNames => _targetWords.Concat(_purposeWords).Concat(_accountWords).ToList();
        public int FeatureCount { get; private set; }

        public WordExtractor() { }
        public WordExtractor(string configuration) 
        {
            LoadSerializedConfiguration(configuration);
        }
        /* public WordExtractor(IEnumerable<string> targetWords, IEnumerable<string> purposeWords, IEnumerable<string> accountWords)
        {
            _targetWords = targetWords.ToHashSet();
            _purposeWords = purposeWords.ToHashSet();
            _accountWords = accountWords.ToHashSet();
            FeatureCount = _targetWords.Count + _purposeWords.Count + _accountWords.Count;
        }*/


        public string GetSerializedConfiguration()
        {
            var tS = string.Join(',', _targetWords);
            var pS = string.Join(',', _purposeWords);
            var aS = string.Join(',', _accountWords);
            var result = $"{tS};{pS};{aS}";
            Console.Write(result);
            return result;
        }
        public void LoadSerializedConfiguration(string config)
        {

            var ar = config.Split(';');
            var tC = ar[0].Split(',').Where(s => s.Length != 0);
            var pC = ar[1].Split(',').Where(s => s.Length != 0);
            var aC = ar[2].Split(',').Where(s => s.Length != 0);

            _targetWords = tC.ToHashSet();
            _purposeWords = pC.ToHashSet();
            _accountWords = aC.ToHashSet();
            FeatureCount = _targetWords.Count + _purposeWords.Count + _accountWords.Count;
        }


        private IEnumerable<string> SplitToWords(string txt)
        {
            txt = txt.Replace('+', ' ');
            txt = txt.Replace(',', '@');
            txt = txt.Replace(';', '@');
            txt = Regex.Replace(txt, @"\s+", " ");

            return txt.Split(' ');
        }

        private void BuildWordSet(ISet<string> set, string txt)
        {
            var words = SplitToWords(txt).Where(w=>w.Length>2);

            foreach(var w in words)
            {
                if (!set.Contains(w))
                {
                    set.Add(w);
                }
            }
        }

        public void Configure(IEnumerable<TransactionData> data)
        {
            _targetWords.Clear();
            _purposeWords.Clear();
            _accountWords.Clear();

            foreach (var t in data)
            {
                BuildWordSet(_targetWords, t.Target);
                BuildWordSet(_purposeWords, t.Purpose);
                BuildWordSet(_accountWords, t.AccountNumber);
            }
            FeatureCount = _targetWords.Count + _purposeWords.Count + _accountWords.Count;
        }

        public float[] Extract(TransactionData transaction)
        {
            List<float> result = new();

            string[] wordStrings = {  transaction.Target,
                                transaction.Purpose,
                                transaction.AccountNumber};

            ISet<string>[] alphabetSets = { _targetWords, _purposeWords, _accountWords };

            for (int i = 0; i < alphabetSets.Length; i++)
            {
                HashSet<string> words = new();
                BuildWordSet(words, wordStrings[i]);

                foreach(var w in alphabetSets[i])
                {
                    if(words.Contains(w))
                    {
                        result.Add(1);
                    }
                    else
                    {
                        result.Add(0);
                    }
                }
            }

            return result.ToArray();

        }

    }
}
