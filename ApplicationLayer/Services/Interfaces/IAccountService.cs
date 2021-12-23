using ApplicationLayer.DTOs;
using System.Threading.Tasks;

namespace ApplicationLayer.Services.Implementations
{
    public interface IAccountService
    {
        Task<UserDTO> AuthenticateUserAsync(string name, string password);
        Task<UserDTO> CreateNewAccountAsync(string name, string password, string email);
    }
}