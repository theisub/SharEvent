using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Models
{
    public class GeoPoint
    {
        [Key]
        public int PointId { get; set; }
        public int EventId { get; set; }
        public float PointLatitiude { get; set; }
        public float PointLongitude { get; set; }


        //Это облегчит парсинг, чтобы не передавать по одной точке в post (на саму базу никак не влияет)
        [NotMapped]
        public List<float> PointLatitiudeList { get; set; }
        [NotMapped]
        public List<float> PointLongitudeList { get; set; }

    }
}
