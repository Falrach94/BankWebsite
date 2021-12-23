using BankAccountDomainModel.Modules.Grouping.Classification;
using BankAccountDomainModel.Modules.Grouping.Data_Objects.Entities;
using BankAccountLib.Classification;
using BankAccountLib.Classification.Classificator;
using BankAccountLib.Classification.Data;
using BankAccountLib.Classification.Extractor;
using BankAccountLib.Transactions.Filter;
using BankAccountLib.Utility;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BankAccountLib.Data_Objects.Entities
{
    public class GroupingProfile : Entity, IGroupingProfile
    {

        /// <summary>
        /// possible transaction groups with example transactions
        /// </summary>
        private List<TransactionGroup> _groups = new();
        /// <summary>
        /// context for auto grouping transactions
        /// </summary>
        private TransactionClassifier _classifier = new();


        public IEnumerable<ITransactionGroup> Groups => _groups;
        public DateTime UpdateTimestamp => _classifier.UpdateTimestamp;
        public ITransactionClassifier Classifier => _classifier;


        public ITransactionGroup Classify(TransactionData data)
        {
            return _classifier.Classify(data);
        }


        private void ValidateGroupName(string name)
        {
            if (name.Length == 0)
            {
                throw new InvalidNameException();
            }
            if (IsUniqueGroupName(name))
            {
                throw new NameAlreadyUsedException();
            }
        }
        public bool IsUniqueGroupName(string name)
        {
            return _groups.Any(g => g.Name == name);
        }
     
        
        public ITransactionGroup CreateGroup(string name)
        {
            if (name is null)
            {
                throw new ArgumentNullException(nameof(name));
            }

            ValidateGroupName(name);

            var g = new TransactionGroup(name);

            _groups.Add(g);

            return g;
        }
        public ITransactionGroup RemoveGroup(Guid groupId)
        {
            //get group object from aggregate
            var result = _groups.Find(g => g.Id == groupId);
            if (result is null)
            {
                return null;
            }

            if (_groups.Remove(result))
            {
                return result;
            }
            return null;
        }
        public ITransactionGroup RenameGroup(Guid id, string name)
        {

            //get group object from aggregate
            var result = _groups.Find(g => g.Id == id);
            if (result is null)
            {
                throw new ElementNotFoundException();
            }

            ValidateGroupName(name);

            //rename
            result.Name = name;
            return result;
        }



        public ITransactionGroup AddTransactionToGroup(Guid groupId, TransactionData transaction)
        {
            //find group with given id
            var group = _groups.Find(g => g.Id == groupId);
            if(group is null)
            {
                throw new GroupNotFoundException($"No group with id {groupId} found in this profile!");
            }

            //check if transaction is already in group
            if (group.ExampleTransactions.Contains(transaction))
            {
                return null;
            }

            //get group object from aggregate
            var result = _groups.Find(g => g.Equals(group));
            if (result is null)
            {
                throw new ElementNotFoundException();
            }

            //ensure transaction is not part of any other group
            foreach (var g in _groups)
            {
                g.ExampleTransactions.Remove(transaction);
            }


            //add transaction to examples
            result.ExampleTransactions.Add(transaction);

            //update classifier
            _classifier.Update(_groups);

            return result;
        }

        public ITransactionGroup RemoveTransactionFromGroup(Guid groupId, TransactionData transaction)
        {
            //find group with given id
            var group = _groups.Find(g => g.Id == groupId);
            if (group is null)
            {
                throw new GroupNotFoundException($"No group with id {groupId} found in this profile!");
            }

            //remove transaction from examples
            if (group.ExampleTransactions.Remove(transaction))
            {
                //update classifier
                _classifier.Update(_groups);
                return group;
            }

            return null;

        }

    }
}
