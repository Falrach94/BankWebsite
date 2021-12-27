using DomainLayer.Modules.Transactions;
using BankAccountLib.Data_Objects.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebBackend.Account_Domain_Model.Data_Objects;
using DomainLayer.Modules.UploadSupervisor;

namespace DomainLayer.Services
{
    public static class AccountService
    {
        public static (GroupingProfile, TransactionsProfile, User, UploadManager) CreateNewAccount(string name,
                                                                                                   string email,
                                                                                                   string password)
        {
            var groupingProfile = new GroupingProfile();
            var transactionsProfile = new TransactionsProfile(groupingProfile);
            var uploadManager = new UploadManager(transactionsProfile);
            
            var user = new User(name, password, email);

            return (groupingProfile, transactionsProfile, user, uploadManager);
        }
    }
}
