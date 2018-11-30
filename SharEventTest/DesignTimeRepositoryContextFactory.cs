using DBRepository;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace WebEvent
{
    public class DesignTimeRepositoryContextFactory : IDesignTimeDbContextFactory<EventContext>
    {
        public EventContext CreateDbContext(string[] args)
        {
            var builder = new ConfigurationBuilder()
                 .SetBasePath(Directory.GetCurrentDirectory())
                 .AddJsonFile("appsettings.json");

            var config = builder.Build();
            var connectionString = config.GetConnectionString("DefaultConnection");
            var eventFactory = new EventContextFactory();

            return eventFactory.CreateDbContext(connectionString);
        }
    }
}
