using BankAccountLib;
using BankAccountLib.Data_Objects.Entities;
using BankAccountLib.Transactions.Filter;
using BankAccountLib.Utility;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DomainLayer.Modules.Transactions
{
    public class TransactionsProfile : Entity, ITransactionsProfile
    {
        /// <summary>
        /// transactions stored for this user
        /// </summary>
        private List<ClassifiedTransaction> _transactions = new();

        private readonly GroupingProfile _groupingProfile;


        public IEnumerable<IClassifiedTransaction> Transactions => _transactions;

        public TransactionsProfile(GroupingProfile groupingProfile)
        {
            _groupingProfile = groupingProfile;
        }
        private TransactionsProfile()
        {
        }


        public IEnumerable<IClassifiedTransaction> GetTransactions(DateTime from, TimeSpan len)

        {
            var latest = from.Add(len);

            var result = _transactions.Where(t => from <= t.Data.BookingDate && t.Data.BookingDate < latest).OrderBy(t => t.Data.BookingDate);

            foreach (var t in result)
            {
                t.UpdateClassification(_groupingProfile);
            }

            return result;
        }

        public IEnumerable<IClassifiedTransaction> AddTransactions(IEnumerable<TransactionData> transactions)
        {
            //get new transactions
            var dif = transactions.Except(_transactions.Select(t => t.Data));

            //classify new transactions
            var cts = dif.Select(t => new ClassifiedTransaction(t)).ToList();

            foreach (var t in cts)
            {
                t.UpdateClassification(_groupingProfile);
            }
            //store
            _transactions.AddRange(cts);

            return cts;
        }

    }
}
