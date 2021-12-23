using BankAccountDomainModel.Modules.Grouping.Data_Objects.Entities;
using BankAccountDomainModel.Repositories;
using BankAccountLib;
using BankAccountLib.Classification;
using BankAccountLib.Classification.Classificator;
using BankAccountLib.Classification.Data;
using BankAccountLib.Classification.Extractor;
using BankAccountLib.Classification.FeatureSelection;
using BankAccountLib.Data_Objects.Entities;
using BankAccountLib.Repositories;
using BankAccountLib.Transactions.Filter;
using BankAccountLib.Utility;
using AggregateDatabase;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using TestCLIApp;
using TextParser.Parser;
using TextParser.Tokenizer;
using TextParserUtils.Parser;
using WebBackend.Account_Domain_Model.Data_Objects;
using AggregateDatabase.Repositories;
using System.Threading;
using Microsoft.EntityFrameworkCore;
using ApplicationLayer;
using ApplicationLayer.Services;
using ApplicationLayer.DTOs;

namespace TestApp
{
    class Program
    {
        private static IUserRepository _userRepo;
        private static IGroupingProfileRepository _profileRepo;

        private static UserService _userService;
        private static GroupingService _groupingService;


        //private static Guid profileId;
        private static UserDTO _user;

//        private static UserDTO _user;
       // private static ProfileDTO _profile;

        static private async Task<string> PrintClassificationListAsync(int maxCount, bool all)
        {
            var transactions = await _userService.GetTransactionsAsync(new DateTime(), TimeSpan.FromTicks(DateTime.Now.Ticks), _user.Id);

            var groupedTransactions = transactions.GroupBy(t => tGroupId);

            var groups = await _groupingService.GetGroupsAsync(_user.Id);

            foreach (var resultGroup in groupedTransactions)
            {
                var g = groups.FirstOrDefault(gr => gr.Id == resultGroup.Key);
                var groupName = g is null ? "Unclassified" : g.Name;

                Console.WriteLine("");
                PrintUtils.PrintClassificationGroup(groupName, resultGroup, transactions, maxCount);
            }
            return "";
        }

        static async Task RunPrimaryTextParserAsync()
        {

            var tokenizer = new Tokenizer<string>(false);
            tokenizer.AddToken("profile", "profile");
            tokenizer.AddToken("exit", "exit");
            tokenizer.AddToken("filter", "filter");
            tokenizer.AddToken("print", "print");
            tokenizer.AddToken("groups", "groups");
            tokenizer.AddToken("group", "group");
            tokenizer.AddToken("set", "set");
            tokenizer.AddToken("classify", "classify");
            tokenizer.AddToken("features", "features");
            tokenizer.AddToken("remove", "remove");
            tokenizer.AddToken("g", "g");
            tokenizer.AddToken("add", "add");
            tokenizer.AddToken("p", "p");
            tokenizer.AddToken("train", "train");
            tokenizer.AddToken("t", "t");
            tokenizer.AddToken("save", "save");
            tokenizer.AddToken("load", "load");
            tokenizer.AddToken("help", "help");
            tokenizer.AddToken("user", "user");
            tokenizer.AddToken("a", "a");


            ITransactionGroup selectedGroup = null;
            bool exit = false;

            AsyncCommandParser parser = new(tokenizer);

            parser.AddRule(new(ParserSequence.Start().Token("set").Number("transaction").String("group").End(), async c =>
            {
                //get transaction
                int tId = c.Get<int>("transaction");

                var transactions = (await _userService.GetTransactionsAsync(new DateTime(), TimeSpan.FromTicks(DateTime.Now.Ticks), _user.Id)).ToList();

                var transaction = transactions[tId];
                if (transaction is null)
                {
                    return $"No transaction with index {tId} found!";
                }

                //get group                
                string groupName = c.Get<string>("group");
                var groups = await _groupingService.GetGroupsAsync(_user.Id);
                var group = groups.FirstOrDefault(g => g.Name == groupName);
                if (group is null)
                {
                    return $"No group with name '{groupName}' found!";
                }
              //  await _groupingService.AddTransactionToGroupAsync(_user.Id, group.Id, transaction.Data);

                return "";
            }));
            parser.AddRule(new(ParserSequence.Start().Token("groups").End(), async c =>
            {
                var groups = await _groupingService.GetGroupsAsync(_user.Id);
                PrintUtils.PrintGroupInfos(groups);
                return "";
            }));

            parser.AddRule(new(ParserSequence.Start().Token("classify").Token("a").Number("max").End(), async c =>
            {
                return await PrintClassificationListAsync(c.Get<int>("max"), true);
            }));
            parser.AddRule(new(ParserSequence.Start().Token("classify").Token("a").End(), async c =>
            {
                return await PrintClassificationListAsync(int.MaxValue, true);
            }));
            parser.AddRule(new(ParserSequence.Start().Token("classify").End(), async c =>
            {
                return await PrintClassificationListAsync(int.MaxValue, false);
            }));
            parser.AddRule(new(ParserSequence.Start().Token("classify").Number("max").End(), async c =>
            {
                return await PrintClassificationListAsync(c.Get<int>("max"), false);
            }));

           parser.AddRule(new(ParserSequence.Start().Token("load").String("path").End(), async c =>
            {
                string path = c.Get<string>("path");

                if (!File.Exists(path))
                {
                    return "file not found";
                }

                List<TransactionData> transactions;

                try
                {
                    RawCSVFile file = await RawCSVFile.LoadAsync(path);

                    transactions = InfrastructureUtils.LoadTransactionsFromFile(file, true);
                }
                catch (FormatException)
                {
                    return "File format incorrect! (expected format 'CSV-MT940')";
                }

                var list = await _userService.AddTransactionsToUserAsync(_user.Id, transactions);

                return $"{list.Count()} new transactions added";
            }));
      
            /*parser.AddRule(new(ParserSequence.Start().Token("filter").String("format").End(), async c =>
            {
                var groups = _profile.CreateTransactionHierarchy(c.Get<string>("format"),
                                                                 _user.Transactions);

                foreach (var gr in groups)
                {
                    PrintUtils.PrintFilterGroup(gr, 0);
                }
                return "";
            }));
            parser.AddRule(new(ParserSequence.Start().Token("filter").End(), async c =>
            {
                var groups = _profile.CreateTransactionHierarchy("G",
                                                                 _user.Transactions);

                foreach (var gr in groups)
                {
                    PrintUtils.PrintFilterGroup(gr, 0);
                }
                return "";
            }));*/
            /*
            parser.AddRule(new(ParserSequence.Start().Token("group").String("name").End(), async c =>
            {
                var group = _profile.Groups.First(g => g.Name == c.Get<string>("name"));

                if (group == null)
                {
                    return "group not found";
                }
                selectedGroup = group;
                return $"Selected group is {group.Name}!";
            }));
            */
            parser.AddRule(new(ParserSequence.Start().Token("add").Token("g").String("name").End(), async c =>
            {
                string name = c.Get<string>("name");

                try
                {
                    await _groupingService.CreateNewGroupAsync(_user.Id, name);
                }
                catch(NameAlreadyUsedException)
                {
                    return "group already exists";
                }

                return "new group created";
            }));
         
            parser.AddRule(new(ParserSequence.Start().Token("help").End(), c =>
            {
                return Task.FromResult(string.Join('\n', parser.Examples));
            }));
            parser.AddRule(new(ParserSequence.Start().Token("exit").End(), c =>
            {
                exit = true;
                return Task.FromResult("");
            }));
           
            while (!exit)
            {
                Console.Write("Command: ");

                string input = Console.ReadLine();
                var result = parser.ParseCommand(input);
                if (result.Success)
                {
                    try
                    {
                        string output = await result.Value(result.Context);
                        Console.WriteLine(output);
                    }
                    catch(Exception ex)
                    {
                        Console.WriteLine(ex);
                    }
                }
                else
                {
                    Console.WriteLine("Command not recognized!");
                }
            }
        }

        static bool TestConnection(DatabaseContext dc)
        {
            if (dc.Database.CanConnect())
            {
                Console.WriteLine("database connection successfull");
            }
            else
            {
                Console.WriteLine("database connection failed");
                return false;
            }

            if (dc.Database.EnsureCreated())
            {
                Console.WriteLine("EnsureCreated successfull");
            }
            else
            {
                Console.WriteLine("EnsureCreated failed");
            }
            return true;
        }

        /*
        static async Task AddUserAsync(string name)
        {

            //create new user without profiles
            _user = new User(name);      

            //create new profile and add to user
            _profile = new GroupingProfile(new());
            _user.AddProfile(_profile);


            //synchronize user with db      
            await _userRepo.AddUserAsync(_user);
            await _userRepo.SaveAsync();

            //synchronize profile with db
            await _profileRepo.AddProfileAsync(_profile, _user);
            await _profileRepo.SaveAsync();
        }
        */

        static async Task Initialize(DatabaseContext dc)
        {
            Console.WriteLine("initializing...");

            //initialize repositories
            _profileRepo = new ProfileRepository(dc);
            _userRepo = new UserRepository(dc);

            _userService = new UserService(dc, _userRepo, _profileRepo);
            _groupingService = new GroupingService(dc, _userRepo, _profileRepo);

            //load user
            try
            {
                _user = await _userService.AuthenticateUserAsync("Falrach");
            }
            catch(UserNotFoundException)
            {
                _user = await _userService.CreateUserAsync("Falrach");
            }

            //load active profile
            //_profile = await _profileRepo.GetByIdAsync(_user.ActiveProfileId);



        }

        static void Main(string[] args)
        {
            //create database context
            DatabaseContext dc = new(); 
            
            //test database connection
            if(!TestConnection(dc))
            {
                return;
            }

            try
            {
                //initialize entities
                Initialize(dc).Wait();
            }
            catch(Exception ex)
            {
                Console.WriteLine(ex);
                return;
            }

            //start text parser
            RunPrimaryTextParserAsync().Wait();

        }
    }
}
