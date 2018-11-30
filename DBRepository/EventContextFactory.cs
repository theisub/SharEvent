using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace DBRepository
{
    public class EventContextFactory : IEventContextFactory
    {
        public EventContext CreateDbContext(string connectionString)
        {

            var optionsBuilder = new DbContextOptionsBuilder<EventContext>();

            optionsBuilder.UseSqlServer(connectionString);

            return new EventContext(optionsBuilder.Options);



        }

    }
}
