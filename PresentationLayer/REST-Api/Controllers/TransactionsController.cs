using ApplicationLayer;
using ApplicationLayer.DTOs;
using ApplicationLayer.Services;
using BankAccountLib;
using BankAccountLib.Utility;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace WebBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
   // [EnableCors("CorsPolicy")]
    public class TransactionsController : Controller
    {
        private readonly ITransactionsService _transactionService;
        private readonly IGroupingService _groupingService;

        public TransactionsController(ITransactionsService transactionService, IGroupingService groupingService)
        {
            _transactionService = transactionService;
            _groupingService = groupingService;
        }


        [HttpGet("get/{userId}/{from}/{monthCount}")]
        public async Task<ActionResult<TransactionGroupDTO[]>> Get(Guid userId, DateTime from, int monthCount)
        {
            DateTime to = from.AddMonths(monthCount);

            return (await _transactionService.GetTransactionsAsync(userId,from, to - from)).ToArray(); 
        }

        [HttpPut("assign/{userId}/{transactionId}/{groupId}")]
        public async Task<IActionResult> AssignTransactionToGroupAsync(Guid userId, Guid transactionId, Guid groupId)
        {
            await _groupingService.AddTransactionToGroupAsync(userId, groupId, transactionId);
            return Ok();
        }




        [HttpPost("upload/{userId}")]
        public async Task<ActionResult<int>> UploadTransactions(Guid userId, [FromForm]IFormFile file)
        {
            var request = Request;
            if (!request.HasFormContentType || !request.Form.Files.Any())
            {
                throw new System.Web.Http.HttpResponseException(HttpStatusCode.UnsupportedMediaType);
            }
            RawCSVFile csvFile;
            using (var stream = new MemoryStream())
            {
                await file.CopyToAsync(stream);
                stream.Position = 0;

                csvFile = await RawCSVFile.LoadAsync(stream);
            }
           
            var transactions = InfrastructureUtils.LoadTransactionsFromFile(csvFile, true);


            var result = await _transactionService.AddTransactionsAsync(userId, transactions);

            return Ok(result.Count());
        }
    }
}
