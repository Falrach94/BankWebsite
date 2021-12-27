using ApplicationLayer;
using ApplicationLayer.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace WebBackend.Controllers
{
    [ApiController]
    public class ErrorController : Controller
    {
        [Route("error")]
        public IActionResult Error()
        {
            return StatusCode(500, new ErrorDTO(CustomErrorCodes.UnknownError, "Internal Server Error"));
        }
    }
}
