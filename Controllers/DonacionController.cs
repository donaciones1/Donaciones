using Donaciones.Models;
using Donaciones.Repository;
using Microsoft.AspNetCore.Mvc;

namespace Donaciones.Controllers
{
    public class DonacionController : BaseController<Donacion>
    {
        public DonacionRepository<DonacionDbContex> donacionRepository { get; }
        public DonacionController(DonacionRepository<DonacionDbContex> _repo) : base(_repo)
        {
            this.donacionRepository = _repo;
        }

        [HttpGet("donacionMasGrande")]
        public virtual ActionResult<Donacion> GetDonacionMasGrande()
        {

            var resultado = donacionRepository.GetDonacionMasGrande();

            return Ok(resultado);
        }

        [HttpGet("donacion/totales")]
        public virtual ActionResult<int> GetTotales()
        {

            var resultado = this.donacionRepository.GetDonacionTotales();

            return Ok(resultado);
        }
    }
}
