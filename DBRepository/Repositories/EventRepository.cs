﻿using DBRepository.Interfaces;
using Microsoft.EntityFrameworkCore;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DBRepository.Repositories
{
    public class EventRepository : BaseRepository, IEventRepository
    {

        public EventRepository(string connectionString, IEventContextFactory contextFactory) : base(connectionString, contextFactory)
        {

        }

        public async Task<Event<GeoPoint>> GetPoints(int eventId)
        {
            var result = new Event<GeoPoint>() { EventId = eventId };
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                var query = context.GeoPoints.AsQueryable();
                query = query.Where(p => p.EventId == eventId);

                result.Points = await query.ToListAsync();

            }
            return result;

        }

        public async Task<List<int>> GetAllPoints(int eventId)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                var temp = from p in context.GeoPoints select p;
                return await context.GeoPoints.Select(e => e.EventId).ToListAsync();

            }

        }

        public async Task<List<Event<GeoPoint>>> GetEventsWhereAdminHasId(int userId)
        {
            var result = new List<Event<GeoPoint>>();
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                var events = context.Events.AsQueryable();
                events = events.Where(ev => ev.AdminId == userId);

                result = await events.ToListAsync();
            }
            return result;
        }

        public async Task<List<Event<GeoPoint>>> GetEventsWhereMemberHasId(int userId)
        {
            var result = new List<Event<GeoPoint>>();
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                // HERE
                var tmp = (from em in context.EventMembers
                           join e in context.Events
                           on em.EventId equals e.EventId
                           where em.UserId == userId && em.Status == true
                           select e);

                result = await tmp.ToListAsync();
            }
            return result;
        }

        public async Task<List<Event<GeoPoint>>> GetEventsJoinRequestsWhereMemberHasId(int userId)
        {
            var result = new List<Event<GeoPoint>>();
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                var tmp = (from em in context.EventMembers
                           join e in context.Events
                           on em.EventId equals e.EventId
                           where em.UserId == userId && em.Status == false
                           select e);

                result = await tmp.ToListAsync();
            }
            return result;
        }



        public async Task AddPoint(GeoPoint _point)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                context.GeoPoints.Add(_point);
                await context.SaveChangesAsync();

            }
        }




        public async Task DeletePoint(int pointId)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                var point = new GeoPoint() { PointId = pointId };
                context.GeoPoints.Remove(point);
                await context.SaveChangesAsync();

            }
        }

        public async Task<int> AddEvent(Event<GeoPoint> _event)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                context.Events.Add(_event);
                await context.SaveChangesAsync();
                return _event.EventId;
            }
        }

        public async Task CleanEventFromGeoPoints(int eventId)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                var result = context.GeoPoints.Where(b => b.EventId == eventId);
                
                context.GeoPoints.RemoveRange(result);
                await context.SaveChangesAsync();
            }

        }
    }
}
