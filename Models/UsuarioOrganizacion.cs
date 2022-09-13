using System.Text.Json.Serialization;

namespace Donaciones.Models
{
    public class UsuarioOrganizacion:Base
    {
        public int UsuarioId { get; set; }
        [JsonIgnore]
        public Usuario Usuario { get; set; }
        public int OrganizacionId { get; set; }
        public Organizacion Organizacion { get; set; }
    }
}
