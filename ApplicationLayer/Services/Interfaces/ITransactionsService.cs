using ApplicationLayer.DTOs;
using BankAccountLib;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ApplicationLayer
{
    public interface ITransactionsService
    {
        Task<IEnumerable<TransactionDTO>> AddTransactionsAsync(Guid userId, IEnumerable<TransactionData> transactions);

        Task<IEnumerable<TransactionGroupDTO>> GetTransactionsAsync(Guid userId, DateTime from, TimeSpan len);
    }
}