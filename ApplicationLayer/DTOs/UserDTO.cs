using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebBackend.Account_Domain_Model.Data_Objects;

namespace ApplicationLayer.DTOs
{
    public class UserDTO
    {
        public UserDTO(User user)
        {
            Name = user.Name;
            Id = user.Id;
        }

        public string Name { get; set;}
        public Guid Id { get; set; }
    }
}
