using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Models
{
    public class User
    {
        [Key]
        public int UserId { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
        //public bool isAdmin { get; set; }

        public void SetPasswordHash(string hashed)
        {
            this.Password = hashed;
        }
    }
}
