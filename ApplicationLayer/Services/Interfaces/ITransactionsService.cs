using ApplicationLayer.DTOs;
using BankAccountLib;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ApplicationLayer
{
    public interface ITransactionsService
    {
        Task<IEnumerable<TransactionGroupDTO>> GetTransactionsAsync(Guid userId, DateTime from, TimeSpan len);

        Task<UploadPreviewDTO> UploadPreviewAsync(Guid userId, RawCSVFile file);
        Task<UploadSummaryDTO> ApplyPreviewAsync(Guid userId);

        Task<IEnumerable<UploadSummaryDTO>> GetUploadSummariesAsync(Guid userId);
    }
}