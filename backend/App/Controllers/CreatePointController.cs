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

        //// GET: api/CreatePoint/5
        //[HttpGet("{id}", Name = "Get")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        //// POST: api/CreatePoint
        //[HttpPost]
        //public void Post([FromBody] string value)
        //{
        //}

        //// PUT: api/CreatePoint/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        //// DELETE: api/ApiWithActions/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
