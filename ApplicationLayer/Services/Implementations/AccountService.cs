using AggregateDatabase;
using ApplicationLayer.DTOs;
using DomainLayer.Repositories;
using BankAccountLib.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApplicationLayer.Services.Implementations
{
    public class AccountService: IAccountService
    {
        private readonly DatabaseContext _dc;
        private readonly IUserRepository _userRepo;
        private readonly ITransactionsProfileRepository _transactionsRepo;
        private readonly IGroupingProfileRepository _groupingRepo;
        private readonly IUploadHistoryRepository _uploadManagerRepo;

        public AccountService(DatabaseContext dc,
                              IUserRepository userRepo,
                              IGroupingProfileRepository profileRepo,
                              ITransactionsProfileRepository transactionsRepo,
                              IUploadHistoryRepository historyRepo)
        {
            _userRepo = userRepo;
            _transactionsRepo = transactionsRepo;
            _groupingRepo = profileRepo;
            _uploadManagerRepo = historyRepo;
            _dc = dc;
        }

        public async Task<UserDTO> AuthenticateUserAsync(string name, string password)
        {
            var user = await _userRepo.GetByNameAsync(name);
            if (user is null)
            {
                throw new UserNotFoundException();
            }
            if (!user.Authenticate(name, password))
            {
                throw new AuthentificationFailedException();
            }
            return new UserDTO(user);
        }

        public async Task<UserDTO> CreateNewAccountAsync(string name, string password, string email)
        {
            //check whether name is already in use
            if (await _userRepo.GetByNameAsync(name) is not null)
            {
                throw new NameAlreadyUsedException();
            }

            var result = DomainLayer.Services.AccountService.CreateNewAccount(name, email, password);

            var user = result.Item3;
            var uploadManager = result.Item4;
            var transactionsProfile = result.Item2;
            var groupingProfile = result.Item1;


            await _userRepo.AddUserAsync(user);
            await _groupingRepo.AddProfileAsync(groupingProfile, user);
            await _transactionsRepo.AddProfileAsync(transactionsProfile, user);
            await _uploadManagerRepo.AddUploadManager(uploadManager, user);
            await _dc.SaveChangesAsync();

            return new UserDTO(result.Item3);

        }

    }
}
