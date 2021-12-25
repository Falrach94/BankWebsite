using ApplicationLayer;
using ApplicationLayer.DTOs;
using ApplicationLayer.Services;
using ApplicationLayer.Services.Implementations;
using BankAccountLib.Repositories;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    //[EnableCors("CorsPolicy")]
    public class UserController : Controller
    {
        private readonly IAccountService _accountService;

        public UserController(IAccountService accountService)
        {
            _accountService = accountService;
        }

        [HttpGet("auth/{name}/{password}")]
        public async Task<ActionResult<UserDTO>> Authenticate(string name, string password)
        {
            try
            {
                return await _accountService.AuthenticateUserAsync(name, password);
            }
            catch (AuthentificationFailedException)
            {
                return BadRequest($"Authentification failed!");
            }
            catch (UserNotFoundException)
            {
                return BadRequest($"Username '{name}' does not exist!");
            }
            catch
            {
                return new StatusCodeResult(StatusCodes.Status500InternalServerError);
            }

        }

        [HttpGet("create/{name}/{email}/{password}")]
        public async Task<ActionResult<UserDTO>> CreateUser(string name, string email, string password)
        {
            try
            {
                return await _accountService.CreateNewAccountAsync(name, password, email);
            }
            catch (NameAlreadyUsedException)
            {
                return BadRequest($"Username '{name}' is already in use!");
            }
            catch
            {
                return new StatusCodeResult(StatusCodes.Status500InternalServerError);
            }
        }

    }
}
