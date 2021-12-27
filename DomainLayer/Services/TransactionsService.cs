using DomainLayer.Modules.Grouping.Data_Objects.Entities;
using DomainLayer.Modules.Transactions;
using BankAccountLib.Data_Objects.Entities;
using DomainLayer.Modules.UploadSupervisor;
using DomainLayer.Modules.UploadSupervisor.VOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BankAccountLib;
using BankAccountLib.Utility;

namespace DomainLayer.Services
{
    public static class TransactionsService
    {
        public static ITransactionGroup AddTransactionToGroup(IGroupingProfile groupingProfile, 
                                          ITransactionsProfile transactionsProfile, 
                                          Guid groupId,
                                          Guid transactionId)
        {
            var transaction = transactionsProfile.Transactions.First(t => t.Id == transactionId);
            if(transaction is null)
            {
                throw new ElementNotFoundException();
            }
            return groupingProfile.AddTransactionToGroup(groupId, transaction.Data);
        }

    }
}
