using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Models;

namespace DBRepository.Interfaces
{
    public interface IEventRepository
    {
        Task<Event<GeoPoint>> GetPoints(int eventId);
        //Task<GeoPoint> GetPoint(int pointId);
        Task<List<int>> GetAllPoints(int eventId);
        //Task<Event<GeoPoint>> GetEvent(int eventId);
        Task AddPoint(GeoPoint _point);
        //Task AddEvent (Event _event);
        //Task DeleteEvent(int eventId);
        Task DeletePoint(int pointId);
    }
}
