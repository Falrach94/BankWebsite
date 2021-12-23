using BankAccountLib;
using BankAccountLib.Transactions.Filter;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BankAccountLib
{
    /// <summary>
    /// Service class for sorting Transaction collections.
    /// </summary>
    public static class SortingUtils
    {
        /// <summary>
        /// Sort list of objects by the similarity in a given string representation.
        /// </summary>
        /// <typeparam name="T">object type</typeparam>
        /// <param name="list">list to be sorted</param>
        /// <param name="proj">projection from T to string</param>
        /// <returns></returns>
        public static List<T> SortBySimilarity<T>(List<T> list, Func<T, string> proj)
        {
            List<T> result = new();

            List<HashSet<string>> words = new();

            foreach(var l in list)
            {
                words.Add(proj(l).Split(' ').ToHashSet());
            }

            int next = 0;

            while (list.Count != 0)
            {
                var current = words[next];
                result.Add(list[next]);
                list.RemoveAt(next);
                words.RemoveAt(next);

                if(list.Count != 0)
                    next = words.IndexOf(words.OrderByDescending(wSet => current.Where(s => wSet.Contains(s)).Count()).First());

            }



            return result;
        }
        
        /// <summary>
        /// Sorts list of transactions according to similarity of target (primary) and purpose (secondary).
        /// </summary>
        /// <param name="list">list to be sorted</param>
        /// <returns></returns>
        public static List<TransactionData> SortBySimilarity(IEnumerable<TransactionData> list)
        {
            return SortBySimilarity(list.ToList(), t => t.Target +" " + t.Purpose);
        }

    }
}
