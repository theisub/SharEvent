using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Models
{
    public class GeoPoint
    {
        [Key]
        public int PointId { get; set; }
        public int EventId { get; set; }
        public decimal PointLatitiude { get; set; }
        public decimal PointLongitude { get; set; }


        
    }
}
