using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Donaciones.Models;
using Donaciones.Repository;

namespace Donaciones.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public abstract class BaseController<T> : Controller where T : Base
    {
        protected IRepository<T> _repo { get;}
        public BaseController(IRepository<T> _repo)
        {
            this._repo = _repo;
        }

        [HttpGet]
        public virtual ActionResult<List<T>> Get()
        {
            if (!ModelState.IsValid) return BadRequest();

            var resultado = _repo.Get();

            if (resultado == null) return NotFound();
            

            return Ok(resultado);
        }

        [HttpGet("{id}")]
        public virtual ActionResult<T> Get(int id)
        {
            if (!ModelState.IsValid)  return BadRequest();

            var resultado = _repo.Get(id);

            if (resultado == null) return NotFound(); 

            return Ok(resultado);
        }

        [HttpPost]
        public virtual  ActionResult Post([FromBody] T value)
        {
            if (!ModelState.IsValid) return BadRequest();

            _repo.Add(value);

            return Ok();
        }

        [HttpPut("{id}")]
        public virtual ActionResult Put(int id, [FromBody] T value)
        {
            if (!ModelState.IsValid)return BadRequest();

            _repo.Update(value);
            return Ok();
        }

        [HttpDelete("{id}")]
        public virtual ActionResult Delete(int id)
        {
            if (!ModelState.IsValid) return BadRequest();

           _repo.Delete(id);

            return Ok();
        }
    }
}
