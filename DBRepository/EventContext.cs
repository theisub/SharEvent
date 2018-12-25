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
        public DbSet<User> Users { get; set; } 
        public DbSet<GeoPoint> GeoPoints { get; set; }
        public DbSet<Event<GeoPoint>> Events { get; set; }
        public DbSet<EventMember> EventMembers { get; set; }
    }
}
