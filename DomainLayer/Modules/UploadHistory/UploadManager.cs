using BankAccountLib;
using BankAccountLib.Classification;
using BankAccountLib.Transactions.Filter;
using BankAccountLib.Utility;
using DomainLayer.Modules.Transactions;
using DomainLayer.Modules.UploadSupervisor.VOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DomainLayer.Modules.UploadSupervisor
{
    public class UploadManager : Entity, IUploadManager
    {
        private readonly TransactionsProfile _transactionsProfile;

        private List<UploadSummary> _history = new();
        private UploadPreview _preview;

        public IEnumerable<UploadSummary> History => _history;


        private UploadManager()
        { }
        public UploadManager(TransactionsProfile transactionsProfile)
        {
            _transactionsProfile = transactionsProfile ?? throw new ArgumentNullException(nameof(transactionsProfile));
       
        }

        

        public IUploadPreviewRead SetPreview(RawCSVFile file)
        {
            _preview = new UploadPreview(file);
            return _preview;
        }

        public UploadSummary ApplyPreview()
        {
            if(_preview == null)
            {
                throw new StateInvalidException("No preview set!");
            }

            var summary = _preview.Apply(_transactionsProfile);

            _preview = null;

            if (summary.UploadStatus == UploadState.Successfull)
            {
                _history.Add(summary);
            }
            return summary;
        }


    }
}
