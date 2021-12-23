using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BankAccountLib.Transactions.Filter
{
    public class TransactionHierarchyGroup
    {
        public TransactionHierarchyGroup(string name)
        {
            Name = name;
        }
        public TransactionHierarchyGroup(string name, TransactionList transactions)
            : this(name)
        {
            Transactions = transactions;
        }

        public List<TransactionHierarchyGroup> Children { get; } = new();

        public string Name { get; }

        public double Total => Transactions.Total;

        public TransactionList Transactions { get; } = new();
    }
}
