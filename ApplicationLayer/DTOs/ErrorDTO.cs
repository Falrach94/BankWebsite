using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApplicationLayer.DTOs
{
    public class ErrorDTO
    {
        public ErrorDTO()
        {
        }

        public ErrorDTO(CustomErrorCodes code, string message)
        {
            Message = message;
            Code = code;
        }
        public ErrorDTO(CustomErrorCodes code, string message, object data)
        {
            Message = message;
            Code = code;
            Data = data;
        }

        public string Message { get; set; }
        public CustomErrorCodes Code { get; set; }
        public object Data { get; set; }
    }
}
