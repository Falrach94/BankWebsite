using DomainLayer.Modules.Transactions;
using DomainLayer.Utility;
using BankAccountLib.Data_Objects.Entities;

namespace WebBackend.Account_Domain_Model.Data_Objects
{
    public interface IUserRead : IEntity
    {
        string Name { get; }
        string Password { get; }
        string Email { get; }
    }
}