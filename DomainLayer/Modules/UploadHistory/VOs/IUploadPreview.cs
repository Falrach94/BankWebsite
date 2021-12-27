using DomainLayer.Modules.Transactions;
using DomainLayer.Modules.UploadSupervisor.VOs;

namespace DomainLayer.Modules.UploadSupervisor
{
    public interface IUploadPreview : IUploadPreviewRead
    {
        /// <summary>
        /// Adds transaction data of this preview to given profile.
        /// </summary>
        /// <param name="transactions"></param>
        /// <returns></returns>
        /// <exception cref="FormatException">Thrown if necessary key was not present in CSV file.</exception>
        UploadSummary Apply(ITransactionsProfile transactions);
    }
}