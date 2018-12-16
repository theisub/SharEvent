using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DBRepository.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace SharEventTest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventController
    {
        IEventRepository eventRepository;

        public EventController(IEventRepository eventRepository)
        {
            this.eventRepository = eventRepository;
        }

        [Route("page")]
        [HttpGet]
        public async Task<Event<GeoPoint>> GetAllPoints(int eventId)
        {
            //55.75, 37.57
            //await eventRepository.AddPoint(new GeoPoint { EventId = 3, PointLatitiude = 55, PointLongitude = 37 });
            return await eventRepository.GetPoints(eventId);

        }

        [Authorize]
        [Route("event")]
        [HttpPost]
        public async Task AddEvent(Event<GeoPoint> _event)
        {
           // await eventRepository.AddEvent(_event);
        }



    }
}