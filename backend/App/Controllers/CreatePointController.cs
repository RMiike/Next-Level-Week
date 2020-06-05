using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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

        public CreatePointController(IRepo repository)
        {
            _repository = repository;
        }
        // GET: api/CreatePoint
        [HttpGet]
        public ActionResult<IEnumerable<Point>> Get()
        {
            var commandItems = _repository.GetAll();
            return Ok(commandItems);
        }

        // GET: api/CreatePoint/5
        [HttpGet("{id}", Name = "GetPointById")]
        public ActionResult<Point> GetPointById(int id)
        {
            var pointItem = _repository.GetPointById(id);
            if (pointItem != null)
            {
                return Ok(pointItem);
            }
            return NotFound();
        }

        // POST: api/CreatePoint
        [HttpPost]
        public ActionResult<Point> CreatePoint(Point point)
        {
            _repository.CreatePoint(point);
            _repository.SaveChanges();

            return NoContent();
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
