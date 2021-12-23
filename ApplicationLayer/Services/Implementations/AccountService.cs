using AggregateDatabase;
using ApplicationLayer.DTOs;
using BankAccountDomainModel.Repositories;
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

        public AccountService(DatabaseContext dc,
                              IUserRepository userRepo,
                              IGroupingProfileRepository profileRepo,
                              ITransactionsProfileRepository transactionsRepo)
        {
            _userRepo = userRepo;
            _transactionsRepo = transactionsRepo;
            _groupingRepo = profileRepo;
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

            var result = BankAccountDomainModel.Services.AccountService.CreateNewAccount(name, email, password);

            await _userRepo.AddUserAsync(result.Item3);
            await _groupingRepo.AddProfileAsync(result.Item1, result.Item3);
            await _groupingRepo.SaveAsync();
            await _transactionsRepo.AddProfileAsync(result.Item2, result.Item3);
            await _transactionsRepo.SaveAsync();
            await _userRepo.SaveAsync();

            return new UserDTO(result.Item3);

            /*

            //create new user without profiles
            var newUser = new User(name);

            //synchronize user with db      
            await _userRepo.AddUserAsync(newUser);
            await _userRepo.SaveAsync();


            //create new profile and add to user
            var profile = new GroupingProfile(new());
            newUser.AddProfile(profile);
            _dc.Entry(profile).State = EntityState.Added;
            _dc.Entry(profile.Classifier).State = EntityState.Added;


            //synchronize user with db  
            await _userRepo.SaveAsync();

            //synchronize profile with db
            await _transactionsRepo.AddProfileAsync(profile, newUser);
            await _transactionsRepo.SaveAsync();
            return new UserDTO(newUser);
            */
        }

    }
}
