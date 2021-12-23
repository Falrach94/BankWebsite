using ApplicationLayer.DTOs;
using BankAccountLib;
using BankAccountLib.Classification.Data;
using BankAccountLib.Data_Objects.Entities;
using BankAccountLib.Transactions.Filter;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebBackend.Account_Domain_Model.Data_Objects;

namespace TestCLIApp
{
    public static class PrintUtils
    {
        /// <summary>
        /// Prints filter group with given indent to console.
        /// </summary>
        /// <param name="group"></param>
        /// <param name="tab"></param>
     /*   public static void PrintFilterGroup(FilterGroup group, int tab)
        {
            for (int i = 0; i < tab; i++)
            {
                Console.Write("\t");
            }
            Console.WriteLine($"{group.Name}({group.Transactions.Count}, {group.Total} EUR):");

            if (group.Children.Count == 0)
            {
                int j = 0;
                foreach (var t in SortingUtils.SortBySimilarity(group.Transactions.Values))
                {
                    for (int i = 0; i < tab + 1; i++)
                    {
                        Console.Write("\t");
                    }
                    Console.WriteLine("- (" + (j++) + ") " + t.Target + "(" + t.Amount + " EUR)");
                    for (int i = 0; i < tab + 1; i++)
                    {
                        Console.Write("\t");
                    }
                    Console.WriteLine(t.Purpose);
                }
            }
            else
            {
                foreach (var g in group.Children)
                {
                    PrintFilterGroup(g, tab + 1);
                }
            }
        }
     */
        /// <summary>
        /// Prints all registered groups with their example transactions.
        /// </summary>
        /// <param name="repo"></param>
        public static void PrintGroupInfos(IEnumerable<GroupDTO> groups)
        {
            int i = 0;

            foreach (var g in groups)
            {
                Console.WriteLine($"({i++}) {g.Name}:");
                int j = 0;
                foreach (var t in g.Examples)
                {
                    Console.WriteLine($"\t({j++}): {t.Target} - {t.Purpose})");
                }
            }
        }

        /// <summary>
        /// Prints a classification result group.
        /// </summary>
        /// <param name="group"></param>
        /// <param name="transactionsRepo">for indexing transactions</param>
        /// <param name="max"></param>
        public static void PrintClassificationGroup(string groupName, 
                                                            IEnumerable<TransactionDTO> groupTransactions,
                                                            IEnumerable<TransactionDTO> allTransactions,
                                                            int max = int.MaxValue)
        {
            Console.Write(groupName);

           // var sortedTransaction = SortingUtils.SortBySimilarity(groupTransactions.Select(t => t.Data));

            var all = allTransactions.ToList();


            Console.WriteLine($"({groupTransactions.Count()})");

            int j = 0;
            foreach (var t in groupTransactions)
            {
                Console.WriteLine($"\t- ({all.IndexOf(t)}) {t.Target}");
                Console.WriteLine($"\t Purpose: {t.Purpose}");

                if (++j > max)
                {
                    break;
                }
            }

        }

    }
}
