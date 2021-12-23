using BankAccountDomainModel.Modules.Transactions;
using BankAccountLib.Data_Objects.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebBackend.Account_Domain_Model.Data_Objects;

namespace BankAccountDomainModel.Services
{
    public static class AccountService
    {
        public static (GroupingProfile, TransactionsProfile, User) CreateNewAccount(string name, string email, string password)
        {
            var groupingProfile = new GroupingProfile();
            var transactionsProfile = new TransactionsProfile(groupingProfile);
            var user = new User(name, password, email);
            return (groupingProfile, transactionsProfile, user);
        }
    }
}
