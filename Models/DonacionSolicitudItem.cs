namespace Donaciones.Models
{
    // para simplificar se llevo a la donaciónsolicitud
    public class DonacionSolicitudItem:Base
    {
        public string Nombre { get; set; }
        public int CantidadActual { get; set; }
        public int CantidadFin { get; set; }
        public int DonacionSolicitudId { get; set; }
        public DonacionSolicitud DonacionSolicitud { get; set; }
    }
}
