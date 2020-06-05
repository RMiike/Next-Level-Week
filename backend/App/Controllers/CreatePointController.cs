using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using backend.Dtos;
using Dominio;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Repositorio;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CreatePointController : ControllerBase
    {
        private readonly IRepo _repository;
        private readonly IMapper _mapper;

        public CreatePointController(
            IRepo repository,
            IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;

        }
        // GET: api/CreatePoint
        [HttpGet]
        public ActionResult<IEnumerable<PointReadDto>> Get()
        {
            var points = _repository.GetAll();
            return Ok(_mapper.Map<IEnumerable<PointReadDto>>(points));
        }

        // GET: api/CreatePoint/5
        [HttpGet("{id}", Name = "GetPointById")]
        public ActionResult<PointReadDto> GetPointById(int id)
        {
            var pointItem = _repository.GetPointById(id);
            if (pointItem != null)
            {
                return Ok(_mapper.Map<PointReadDto>(pointItem));
            }
            return NotFound();
        }

        // POST: api/CreatePoint
        [HttpPost]
        public ActionResult<PointReadDto> CreatePoint(PointCreateDto point)
        {
            var pointModel = _mapper.Map<Point>(point);
            _repository.CreatePoint(pointModel);
            _repository.SaveChanges();
            var pointReadDto = _mapper.Map<PointReadDto>(pointModel);

            return CreatedAtRoute(nameof(GetPointById), new { Id = pointReadDto.Id }, pointReadDto);
        }

        //// PUT: api/CreatePoint/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var pointWillDelete = _repository.GetPointById(id);

            if (pointWillDelete == null)
            {
                return NotFound();
            }
            _repository.DeletePoind(pointWillDelete);
            _repository.SaveChanges();
            return NoContent();
        }
    }
}
