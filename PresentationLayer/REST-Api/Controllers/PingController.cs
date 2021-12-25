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
   // [EnableCors("CorsPolicy")]
    public class PingController : Controller
    {

        [HttpGet]
        public Task<IActionResult> Ping()
        {
            Console.WriteLine("ping");
            return Task.FromResult((IActionResult)Ok());
        }
    }
}
