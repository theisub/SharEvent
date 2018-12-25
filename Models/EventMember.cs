using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Models
{
    public class EventMember
    {
        [Key]
        public int EventMemberId { get; set; }
        
        public int EventId { get; set; }
        public int UserId { get; set; }
        public bool Status { get; set; }
    }
}
