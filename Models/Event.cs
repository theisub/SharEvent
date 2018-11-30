using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Models
{
    public class Event<T>
    {
        [Key]
        public int EventId { get; set; }
        public int AdminId { get; set; }

        public string EventName { get; set; }
        public string EventDescription { get; set; }
        public DateTime? EventStartTime { get; set; }
        public DateTime? EventEndTime { get; set; }
        public string EventUrl { get; set; }

        public virtual List<T> Points { get; set; }

        public Event()
        {
            Points = new List<T>();
        }

        public Event(IEnumerable<T> points)
        {
            Points = new List<T>(points);
        }

    }
}
