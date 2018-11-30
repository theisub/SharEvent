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

                result.Points = await query.Include(p => p.EventId).OrderByDescending(p => p.PointId).Take(eventId).ToListAsync();

            }
            return result;

        }

        public async Task<List<int>> GetAllPoints(int eventId)
        {
            using (var context = ContextFactory.CreateDbContext(ConnectionString))
            {
                var temp = from p in context.GeoPoints select p;
                return await context.GeoPoints.Select(e => e.EventId).Distinct().ToListAsync();

            }

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

    }
}
