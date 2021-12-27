using BankAccountLib.Transactions.Filter;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DomainLayer.Modules.UploadSupervisor.VOs
{
    public class UploadSummary
    {
        private UploadSummary() { }
        public UploadSummary(IUploadPreviewRead preview,
                            IEnumerable<IClassifiedTransaction> transactions)
        {
            if(preview is null)
            {
                UploadStatus = UploadState.NoPreviewSet;
                return;
            }

            Name = preview.Name;
            
            if (preview.InvalidData)
            {
                UploadStatus = UploadState.InvalidFileFormat;
                return;
            }
            
            if(!transactions.Any())
            {
                UploadStatus = UploadState.NoNewEntries;
            }
            else
            {
                UploadStatus = UploadState.Successfull;
            }

            Size = preview.Size;
            First = preview.First;
            Last = preview.Last;
            UsefullCount = transactions.Count();
            FirstAdded = transactions.First().Data.BookingDate;
            LastAdded = transactions.Last().Data.BookingDate;
            Transactions = transactions;
        }

        public string Name { get; }
        public int Size { get; }
        public DateTime First { get; }
        public DateTime Last { get; }
        public IEnumerable<IClassifiedTransaction> Transactions { get; }
        public int UsefullCount { get; }
        public DateTime FirstAdded { get; }
        public DateTime LastAdded { get; }

        public UploadState UploadStatus { get; }
    }
}
