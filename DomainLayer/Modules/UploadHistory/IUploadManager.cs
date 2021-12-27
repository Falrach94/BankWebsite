using BankAccountLib;
using DomainLayer.Modules.UploadSupervisor.VOs;

namespace DomainLayer.Modules.UploadSupervisor
{
    public interface IUploadManager : IUploadManagerRead
    {
        /// <summary>
        /// Sets the given RawCSVFile as preview data.
        /// </summary>
        /// <param name="file"></param>
        /// <returns></returns>
        IUploadPreviewRead SetPreview(RawCSVFile file);

        /// <summary>
        /// Adds data from preview to TransactionsProfile and updates upload history.
        /// </summary>
        /// <returns></returns>
        /// <exception cref="StateInvalidException">Thrown if no preview was set.</exception>
        UploadSummary ApplyPreview();
    }
}