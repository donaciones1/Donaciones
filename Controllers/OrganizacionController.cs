using Donaciones.Models;
using Donaciones.Repository;

namespace Donaciones.Controllers
{
    public class OrganizacionController : BaseController<Organizacion>
    {
        public OrganizacionController(IRepository<Organizacion> _repo):base(_repo)
        {

        }
    }
}
