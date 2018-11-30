using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DBRepository.Interfaces;
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
            //await eventRepository.AddPoint(new GeoPoint { EventId = 3, PointLatitiude = 22, PointLongitude = 33 });
            return await eventRepository.GetPoints(3);

        }




    }
}