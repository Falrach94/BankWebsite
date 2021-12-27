using DomainLayer.Utility;
using BankAccountLib;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DomainLayer.Modules.Grouping.Data_Objects.Entities
{
    public interface ITransactionGroup : IEntity
    {
        string Name { get; }
        IEnumerable<TransactionData> ExampleTransactions { get; }
    }
}
