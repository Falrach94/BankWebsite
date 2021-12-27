using DomainLayer.Modules.Grouping.Data_Objects.Entities;
using BankAccountLib;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApplicationLayer.DTOs
{
    public class GroupDTO
    {
        public GroupDTO()
        {
        }
        public GroupDTO(ITransactionGroup group, bool includeExamples)
        {
            Id = group.Id;
            Name = group.Name;

            if (includeExamples)
            {
                Examples = group.ExampleTransactions.ToArray();
            }
        }

        public TransactionData[] Examples { get; set; }
        public Guid? Id { get; set; }
        public string Name { get; set; }

    }
}
