using BankAccountDomainModel.Modules.Grouping.Data_Objects.Entities;
using BankAccountLib.Utility;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BankAccountLib
{
    /// <summary>
    /// Named group with example Transaction objects for automatic classification.
    /// </summary>
    public class TransactionGroup : Entity, ITransactionGroup
    {
        private TransactionGroup() { }
        public TransactionGroup(string name)
            : this()
        {
            Name = name;
        }

        /// <summary>
        /// group name
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// example transactions for this group
        /// </summary>
        public List<TransactionData> ExampleTransactions { get; set; } = new();

        IEnumerable<TransactionData> ITransactionGroup.ExampleTransactions => ExampleTransactions;
    }
}
