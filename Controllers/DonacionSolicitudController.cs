using Microsoft.AspNetCore.Mvc;
using Donaciones.Models;
using Donaciones.Repository;
using System.Collections.Generic;

namespace Donaciones.Controllers
{
    public class DonacionSolicitudController : BaseController<DonacionSolicitud>
    {
        private readonly int idFinalizado = 3;
        public DonacionSolicitudRepository<DonacionDbContex> donacionSolicitudRepo { get; }
        public DonacionSolicitudController(DonacionSolicitudRepository<DonacionDbContex> _repo):base(_repo)
        {
            this.donacionSolicitudRepo = _repo;
        }

        [HttpPut("finalizarSolicitud/{idDonacionSolicitud}")]
        public virtual ActionResult FinalizarSolicitud(int idDonacionSolicitud)
        {
            if (idDonacionSolicitud <=0) return BadRequest();

            var donacionSolicitud = _repo.Get(idDonacionSolicitud);

            if (donacionSolicitud == null) return NotFound();

            donacionSolicitud.EstadoId = idFinalizado;
            var resultado = _repo.Update(donacionSolicitud);

            return Ok(resultado);
        }

        [HttpGet("cantidadSolicitudes")]
        public virtual ActionResult<int> CantidadSolicitudes()
        {

            var resultado = donacionSolicitudRepo.GetCantidadDeSolicitudes();

            return Ok(resultado);
        }

        [HttpGet("solicitudes/finalizadas")]
        public virtual ActionResult<int> CantidadSolicitudesFinalizadas()
        {

            var resultado = this.donacionSolicitudRepo.GetCantidadDeSolicitudesFinalizadas();

            return Ok(resultado);
        }
    }
}
