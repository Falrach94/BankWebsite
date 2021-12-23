using ApplicationLayer;
using ApplicationLayer.DTOs;
using ApplicationLayer.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GroupsController : Controller
    {

        private readonly IGroupingService _groupingService;

        public GroupsController(IGroupingService groupingService)
        {
            _groupingService = groupingService;
        }

        [HttpGet("{userId}")]
        public async Task<ActionResult<GroupDTO[]>> GetAsync(Guid userId)
        {
            var timestamp = DateTime.Now;
            var result = (await _groupingService.GetGroupsAsync(userId)).ToArray();
            Console.WriteLine($"Time - Get Groups: {(DateTime.Now - timestamp).TotalMilliseconds} ms");

            return result;
        }

        [HttpPost("{userId}")]
        public async Task<ActionResult<TransactionGroupDTO>> CreateAsync(Guid userId, [FromBody]GroupDTO group)
        { 
            return Ok(await _groupingService.CreateNewGroupAsync(userId, group.Name));
        }
        [HttpPut("{userId}/{groupId}")]
        public async Task<IActionResult> UpdateAsync(Guid userId, Guid groupId, GroupDTO group)
        {
            if(group.Name != null)
            {
                await _groupingService.RenameGroupAsync(userId, groupId, group.Name);
            }

            return Ok();
        }
        [HttpDelete("{userId}/{groupId}")]
        public async Task<IActionResult> DeleteAsync(Guid userId, Guid groupId)
        {
            await _groupingService.RemoveGroupAsync(userId, groupId);
            return Ok();
        }

    }
}
