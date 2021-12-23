using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace BankAccountLib
{
    /// <summary>
    /// Data structure for storing transactions and sorting transactions by their BookingDate.
    /// </summary>
    public class TransactionList : SortedList<DateTime, TransactionData>
    {
        public class TransactionComparer : IComparer<DateTime>
        {
            private TransactionComparer() { }
            public static TransactionComparer Instance { get; } = new();
            public int Compare(DateTime x, DateTime y)
            {
                if (x > y)
                    return 1;
                if (x == y)
                    return 1;
                return -1;
            }

        }

        /// <summary>
        /// earliest BookingDate of all transactions
        /// </summary>        
        public DateTime Earliest => this.First().Key;
        /// <summary>
        /// latest BookingDate of all transactions
        /// </summary>
        public DateTime Latest => this.Last().Key;

        /// <summary>
        /// total sum of all transactions
        /// </summary>
        public double Total 
        {
            get
            {
                double res = 0;
                foreach(var t in this)
                {
                    res += t.Value.Amount;
                }
                return Math.Round(res, 2);
            }
        }

        public TransactionList()
            : base(TransactionComparer.Instance)
        {
        }
        public TransactionList(IEnumerable<TransactionData> list)
            :this()
        {
            foreach (var t in list)
            {
                AddTransaction(t);
            }
        }
        public TransactionList(IEnumerable<KeyValuePair<DateTime, TransactionData>> list)
            :this()
        {
            foreach(var p in list)
            {
                Add(p.Key, p.Value);
            }
        }


        /// <summary>
        /// Adds a single transaction to this list.
        /// </summary>
        /// <param name="t">Transaction object to be added</param>
        public void AddTransaction(TransactionData t)
        {
            Add(t.BookingDate, t);
        }

        /// <summary>
        /// Adds a collection of transactions.
        /// </summary>
        /// <param name="data">Transaction objects to be added</param>
        public void AddTransactions(IEnumerable<TransactionData> data)
        {
            foreach(var transaction in data)
            {
                if(!ContainsValue(transaction))
                {
                    AddTransaction(transaction);
                }
            }
        }

        /*
        public TransactionList WithTargetKeyword(string keyword)
        {
            return new TransactionList(this.Where(p => p.Value.Target.ToUpper().Contains(keyword.ToUpper())));
        }
        public TransactionList WithPurposeKeyword(string keyword)
        {
            return new TransactionList(this.Where(p => p.Value.Purpose.ToUpper().Contains(keyword.ToUpper())));
        }
        public TransactionList WithKeyword(string targetKeyword, string purposeKeyword)
        {
            return new TransactionList(WithTargetKeyword(targetKeyword).Union(WithPurposeKeyword(purposeKeyword)));
        }
        public TransactionList WithTargetKeywords(List<string> keywords)
        {
            return new TransactionList(this.Where(p => keywords.Where(kw => p.Value.Target.ToUpper().Contains(kw.ToUpper())).Any()));
        }
        public TransactionList WithPurposeKeywords(List<string> keywords)
        {
            return new TransactionList(this.Where(p => keywords.Where(kw => p.Value.Purpose.ToUpper().Contains(kw.ToUpper())).Any()));
        }
        public TransactionList WithKeywords(List<string> targetKeywords, List<string> purposeKeywords)
        {
            return new TransactionList(WithTargetKeywords(targetKeywords).Union(WithPurposeKeywords(purposeKeywords)));
        }
        */
    }
}
