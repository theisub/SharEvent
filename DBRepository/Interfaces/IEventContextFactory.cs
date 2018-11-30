using System;
using System.Collections.Generic;
using System.Text;

namespace DBRepository
{
    public interface IEventContextFactory
    {
        EventContext CreateDbContext(string connectionString);
    }
}
