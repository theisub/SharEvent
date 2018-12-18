using Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DBRepository.Interfaces
{
    public interface IIdentityRepository
    {
        Task<User> GetUser(string userName);
        Task AddUser(User user);
    }
}
