using BankAccountLib;
using BankAccountLib.Transactions.Filter;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ApplicationLayer.DTOs
{
    public class TransactionGroupDTO
    {
        public TransactionGroupDTO(IEnumerable<TransactionDTO> transactions, GroupDTO group)
        {
            Transactions = transactions.ToArray();
            Group = group;
            if(group is not null)
            {
                Id = (Guid)group.Id;
            }
            TotalPlus = (float)Transactions.Where(t => t.Amount > 0).Sum(d => d.Amount);
            TotalMinus = (float)Transactions.Where(t => t.Amount < 0).Sum(d => d.Amount);
        }

        public TransactionDTO[] Transactions { get; set; }
        public GroupDTO? Group { get; set; }
        public Guid Id { get; set; }
        public float TotalPlus { get; set; }
        public float TotalMinus { get; set; }
    }
}