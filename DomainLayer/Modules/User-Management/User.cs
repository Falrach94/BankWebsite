using DomainLayer.Modules.Transactions;
using BankAccountLib;
using BankAccountLib.Data_Objects.Entities;
using BankAccountLib.Transactions.Filter;
using BankAccountLib.Utility;
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Threading.Tasks;

namespace WebBackend.Account_Domain_Model.Data_Objects
{
    public class User : Entity, IUser
    { 
        private User() { }
        public User(string name, 
                    string password, 
                    string email) : base()
        {
            Name = name;
            Password = password;
            Email = email;
        }

        /// <summary>
        /// user name
        /// </summary>
        public string Name { get; private set; }
        public string Password { get; private set; }
        public string Email { get; private set; }

        public bool Authenticate(string user, string pw)
        {
            return user == Name && pw == Password;
        }
    }
}
