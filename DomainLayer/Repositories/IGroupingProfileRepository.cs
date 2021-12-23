using BankAccountLib.Data_Objects.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebBackend.Account_Domain_Model.Data_Objects;

namespace BankAccountLib.Repositories
{
    public interface IGroupingProfileRepository
    {
        Task<GroupingProfile> GetByIdAsync(Guid id);
        Task<GroupingProfile> GetByUserIdAsync(Guid userId);

        Task AddProfileAsync(GroupingProfile profile, User user);

        //public Task UpdateProfileAsync(GroupingProfile profile);
        Task SaveAsync();
    }
}
