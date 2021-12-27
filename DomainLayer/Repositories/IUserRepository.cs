using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebBackend.Account_Domain_Model.Data_Objects;

namespace DomainLayer.Repositories
{
    public interface IUserRepository
    {
        Task<User> GetByIdAsync(Guid id);
        Task<User> GetByNameAsync(string name);

        Task<bool> AddUserAsync(User user);

        //public Task UpdateUserAsync(User user);
        Task SaveAsync();
    }
}
