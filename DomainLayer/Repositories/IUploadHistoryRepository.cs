using DomainLayer.Modules.UploadSupervisor;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebBackend.Account_Domain_Model.Data_Objects;

namespace DomainLayer.Repositories
{
    public interface IUploadHistoryRepository
    {
        Task<UploadManager> GetByUserIdAsync(Guid userId);
        Task AddUploadManager(UploadManager manager, User user);
        Task SaveAsync();
    }
}
