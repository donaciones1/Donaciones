using Donaciones.Models;
using Donaciones.Repository;

namespace Donaciones.Controllers
{
    public class EstadoController : BaseController<Estado>
    {
        public EstadoController(IRepository<Estado> _repo):base(_repo)
        {
        }
    }
}
