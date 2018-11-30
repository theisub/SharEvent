using System;
using System.Collections.Generic;
using System.Text;

namespace DBRepository.Repositories
{
    public abstract class BaseRepository
    {
        protected string ConnectionString { get; }
        protected IEventContextFactory ContextFactory { get; }
        public BaseRepository(string connectionString, IEventContextFactory contextFactory)
        {
            ConnectionString = connectionString;
            ContextFactory = contextFactory;
        }
    }
}
