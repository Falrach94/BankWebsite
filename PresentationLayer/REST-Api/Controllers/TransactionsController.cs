using ApplicationLayer;
using ApplicationLayer.DTOs;
using ApplicationLayer.Services;
using BankAccountLib;
using BankAccountLib.Utility;
using DomainLayer.Modules.UploadSupervisor.VOs;
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




        [HttpGet("summaries/{userId}")]
        public async Task<UploadSummaryDTO[]> GetSummaries(Guid userId)
        {
            return (await _transactionService.GetUploadSummariesAsync(userId)).ToArray();
        }

        [HttpPost("upload/{userId}")]
        public async Task<ActionResult<UploadPreviewDTO>> UploadPreview(Guid userId, [FromForm] IFormFile file)
        {
            //load file data
            var request = Request;
            if (!request.HasFormContentType || !request.Form.Files.Any())
            {
                throw new System.Web.Http.HttpResponseException(HttpStatusCode.UnsupportedMediaType);
            }

            //parse csv file
            RawCSVFile csvFile;
            using (var stream = new MemoryStream())
            {
                await file.CopyToAsync(stream);
                stream.Position = 0;

                try
                {
                    csvFile = await RawCSVFile.LoadAsync(file.FileName, stream);
                }
                catch(Exception)
                {
                    var error = new ErrorDTO(CustomErrorCodes.ParserError, "File could not be parsed!");
                    return BadRequest(error);
                }
            }

            //call to application layer
            var result = await _transactionService.UploadPreviewAsync(userId, csvFile);

            //create response
            if(result.InvalidData)
            {
                return BadRequest(new ErrorDTO(CustomErrorCodes.InvalidUploadFormat, "CSV-File has invalid format!", result));
            }
            return Ok(result);
        }


        [HttpPost("applyPreview/{userId}")]
        public async Task<ActionResult<UploadSummaryDTO>> ApplyPreview(Guid userId)
        {
            //call to application layer
            var result = await _transactionService.ApplyPreviewAsync(userId);

            //build response
            switch(result.Code)
            {
                case UploadState.Successfull:
                    return Ok(result);
                case UploadState.NoPreviewSet:
                    return BadRequest(new ErrorDTO(CustomErrorCodes.NoPreviewSet, "No preview was set previous to this method."));
                case UploadState.InvalidFileFormat:
                    return BadRequest(new ErrorDTO(CustomErrorCodes.InvalidUploadFormat, "CSV-File has invalid format!"));
                case UploadState.NoNewEntries:
                    return BadRequest(new ErrorDTO(CustomErrorCodes.NoNewEntries, "CSV-File didn't contain new data!"));
                default:
                    return StatusCode(500,  "Unkown error occured!");
            }
        }
    
    
    }
}
