using BankAccountDomainModel.Repositories;
using BankAccountLib;
using BankAccountLib.Data_Objects.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebBackend.Account_Domain_Model.Data_Objects;

namespace AggregateDatabase.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly DatabaseContext _dc;

        public UserRepository(DatabaseContext dc)
        {
            _dc = dc;
        }

        public async Task<bool> AddUserAsync(User user)
        {
            await _dc.AddAsync(user);
            return true;
        }

        public async Task<User> GetByIdAsync(Guid id)
        {
            return await _dc.Users.FindAsync(id);
        }

        public async Task<User> GetByNameAsync(string name)
        {
            return await _dc.Users.FirstOrDefaultAsync(u=>u.Name==name);
        }

        public async Task SaveAsync()
        {
            await _dc.SaveChangesAsync();
        }

    }
}
