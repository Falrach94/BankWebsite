using ApplicationLayer.DTOs;
using BankAccountDomainModel.Modules.Grouping.Data_Objects.Entities;
using BankAccountLib;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ApplicationLayer.Services
{
    public interface IGroupingService
    {

        Task<GroupDTO> CreateNewGroupAsync(Guid userId, string name);
        Task RemoveGroupAsync(Guid userId, Guid groupId);


        Task<IEnumerable<GroupDTO>> GetGroupsAsync(Guid userId);


        Task<GroupDTO> AddTransactionToGroupAsync(Guid userId, Guid groupId, Guid transactionId);
        Task<GroupDTO> RenameGroupAsync(Guid userId, Guid groupId, string name);

    }
}