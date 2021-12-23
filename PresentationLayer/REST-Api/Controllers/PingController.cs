using ApplicationLayer;
using ApplicationLayer.DTOs;
using ApplicationLayer.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PingController : Controller
    {

        [HttpGet]
        public Task<IActionResult> Ping()
        {
            return Task.FromResult((IActionResult)Ok());
        }
    }
}
