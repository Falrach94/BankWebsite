using BankAccountLib.Classification;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BankAccountLib.Transactions.Filter
{
    /// <summary>
    /// Services for filtering TransactionList objects into FilterGroups.
    /// </summary>
    public static class FilterUtils
    {
        public static List<TransactionHierarchyGroup> FilterForYear(TransactionList data)
        {
            List<TransactionHierarchyGroup> result = new();

            TransactionHierarchyGroup currentYear = null;
            int year = -1;

            foreach (var p in data)
            {
                if (year != p.Key.Year)
                {
                    year = p.Key.Year;
                    currentYear = new(year.ToString());
                    result.Add(currentYear);
                }
                currentYear.Transactions.Add(p.Key, p.Value);
            }

            return result;
        }
        public static List<TransactionHierarchyGroup> FilterForMonth(TransactionList data)
        {
            List<TransactionHierarchyGroup> result = new();

            TransactionHierarchyGroup currentMonth = null;
            int month = -1;

            foreach (var p in data)
            {
                if (month != p.Key.Month)
                {
                    month = p.Key.Month;
                    currentMonth = new(p.Key.ToString("MMMM"));
                    result.Add(currentMonth);
                }
                currentMonth.Transactions.Add(p.Key, p.Value);
            }

            return result;
        }
    
        /*
        public static List<TransactionHierarchyGroup> FilterForGroups(TransactionList data, 
                                                        IContextClassifier classifier)
        {
            List<TransactionHierarchyGroup> result = new();

            var resultGroups = classifier.Classify(data.Values);

            foreach(var rg in resultGroups)
            {
                string name = rg.Class is null ? "nicht zugeordnet" : rg.Class.Name;
                result.Add(new TransactionHierarchyGroup(name, new TransactionList(rg.Transactions)));
            }

            return result;
        }*/


        public static List<TransactionHierarchyGroup> FilterTransactions( TransactionList data, 
                                                            string filterFormat,
                                                            ClassificationContext context,
                                                            IClassifier classifier)
        {
            List<TransactionHierarchyGroup> result = null;

            switch (filterFormat[0])
            {
                case 'Y':
                    result = FilterForYear(data);
                    break;
                case 'M':
                    result = FilterForMonth(data);
                    break;
                case 'G':
                   // result = FilterForGroups(data, context, classifier);
                    break;
            }

            if (result == null)
            {
                throw new FormatException("Filter not recognized!");
            }

            if (filterFormat.Length > 1)
            {
                filterFormat = filterFormat.Substring(1);
                foreach (var g in result)
                {
                    g.Children.AddRange(FilterTransactions(g.Transactions, filterFormat, context, classifier));
                }
            }

            return result;
        }


    }
}
