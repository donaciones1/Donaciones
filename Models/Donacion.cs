using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Donaciones.Models
{
    public class Donacion : Base
    {
        public string Observacion { get; set; }
        public int Cantidad { get; set; }
        public int DonacionSolicitudId { get; set; }

        [NotMapped]
        public DonacionSolicitud DonacionSolicitud { get; set; }
        public int DonanteId { get; set; }
        public Usuario Donante { get; set; }
        //public IEnumerable<DonacionItem> DonacionItems { get; set; }
    }
}
