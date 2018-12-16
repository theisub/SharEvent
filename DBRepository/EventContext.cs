using Microsoft.EntityFrameworkCore;
using Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace DBRepository
{
    public class EventContext : DbContext
    {

        public EventContext(DbContextOptions<EventContext> options) : base(options)
        {


        }
        public DbSet<User> Users { get; set; } //Это надо?
        public DbSet<GeoPoint> GeoPoints { get; set; } //И это тоже
        public DbSet<Event<GeoPoint>> Events { get; set; }


    }
}
