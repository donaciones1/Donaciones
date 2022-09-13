using Donaciones.Models;
using Donaciones.Repository;

namespace Donaciones.Controllers
{
    public class UsuarioController : BaseController<Usuario>
    {
        public UsuarioController(IRepository<Usuario> _repo):base(_repo)
        {
        }
    }
}
