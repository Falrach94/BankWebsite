using BankAccountLib;
using BankAccountLib.Utility;
using DomainLayer.Modules.Transactions;
using DomainLayer.Modules.UploadSupervisor.VOs;
using System;

namespace DomainLayer.Modules.UploadSupervisor
{
    public class UploadPreview : IUploadPreview
    {
        private RawCSVFile _file;

        public UploadPreview(RawCSVFile file)
        {
            _file = file ?? throw new ArgumentNullException(nameof(file));

        }

        public string Name => _file.Name;

        public int Size => _file.Data.Count;

        public DateTime First => _file.GetBookingDate(_file.EntryCount - 1);
        public DateTime Last => _file.GetBookingDate(0);

        public bool InvalidData => !_file.IsValid;

        public UploadSummary Apply(ITransactionsProfile transactionsProfile)
        {
            if (transactionsProfile is null)
            {
                throw new ArgumentNullException(nameof(transactionsProfile));
            }

            if (InvalidData)
            {
                return new UploadSummary(this, null);
            }

            var rawTransactions = _file.ToTransactionData(true);
            var classifiedTransactions = transactionsProfile.AddTransactions(rawTransactions);

            return new UploadSummary(this, classifiedTransactions);
            
        }
    }
}