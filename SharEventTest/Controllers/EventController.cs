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

        [Route("geteventsbycreatorlist")]
        [HttpGet]
        public async Task<List<Event<GeoPoint>>> GetEventsListByCreatorId(int userId)
        {
            return await eventRepository.GetEventsWhereAdminHasId(userId);
        }

        [Route("geteventsbymemberlist")]
        [HttpGet]
        public async Task<List<Event<GeoPoint>>> GetEventsListByMemberId(int userId)
        {
            return await eventRepository.GetEventsWhereMemberHasId(userId);
        }

        //[Authorize]
        [Route("new")]
        [HttpPost]
        public Task<int> AddEvent([FromBody]Event<GeoPoint> _event)
        {
            return eventRepository.AddEvent(_event);
        }

        [Route("addpoints")]
        [HttpPost]
        public async Task AddPoints([FromBody]GeoPoint _points)
        {
            /*Это пока временно, потом поменяем на _points.EventId, который мы получим сразу же после создания ивента. В дальнейшем мы получаем id при генерации ивента,
            если сейчас попробовать создать ивент, то страница отдаст в хедере ответ с номером созданного ивента(он в виде простого числа, не json). 
            Надо только подумать как лучше его держать (думаю в виде доп. стейта).*/
            int eventId = 21;

            await eventRepository.CleanEventFromGeoPoints(eventId);
            for (int i = 0; i < _points.PointLatitiudeList.Count(); i++)
               await eventRepository.AddPoint(new GeoPoint { EventId = eventId, PointLatitiude = _points.PointLatitiudeList[i], PointLongitude = _points.PointLongitudeList[i] });

        }
        
    }
}