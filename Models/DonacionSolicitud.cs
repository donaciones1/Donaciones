using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Donaciones.Models
{
    public class DonacionSolicitud:Base
    {
        public string Titulo { get; set; }
        public string Observacion { get; set; }

        public int CantidadActual => this.Donaciones.Sum(w => w.Cantidad);
        public int CantidadFin { get; set; }
        public int? OrganizacionId { get; set; }
        public Organizacion Organizacion { get; set; }
        public int? OwnerId { get; set; }
        public Usuario Owner { get; set; }
        public int EstadoId { get; set; }
        public Estado Estado { get; set; }

        public IEnumerable<Donacion> Donaciones { get; set; }
    }
}
