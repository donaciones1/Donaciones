using System.Collections.Generic;

namespace Donaciones.Models
{
    public class Organizacion:Base
    {
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public int? ContactoId { get; set; }
        public Usuario Contacto { get; set; }
        public IEnumerable<UsuarioOrganizacion> UsuarioOrganizaciones { get; set; }
        public bool EstaActivo { get; set; } = true;
    }
}
