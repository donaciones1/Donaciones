using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Donaciones.Models
{
    // para simplificar se llevo a la donacion
    public class DonacionItem:Base
    {
        public string Observaciones { get; set; }
        public int Cantidad { get; set; }
        public int DonacionId { get; set; }
        public Donacion Donacion { get; set; }
        public int DonationSolicitudItemId { get; set; }
        public DonacionSolicitudItem DonacionSolicitudItem { get; set; }
    }
}


