using System.Collections.Generic;

namespace Donaciones.Models
{
    public class Usuario : Base
    {
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public IEnumerable<UsuarioOrganizacion> UsuarioOrganizaciones { get; set; }
        public bool EstaActivo { get; set; } = true;
    }
}
