using Donaciones.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Linq.Expressions;

namespace Donaciones.Repository
{
    public class OrganizacionRepository<TContext> : EFRepository<Organizacion, TContext> where TContext : DonacionDbContex
    {
        public OrganizacionRepository(TContext context) : base(context)
        {
        }

        public override Organizacion Get(int id)
        {
            return Hidratar().FirstOrDefault(ds =>ds.Id == id && ds.EstaActivo);
        }
        public override void Delete(int id)
        {
            var organizacion = this.Get(id);
            organizacion.EstaActivo = false;
            organizacion.UsuarioOrganizaciones = null;
            organizacion.Contacto = null;
            this.Update(organizacion);
        }
        public override IQueryable<Organizacion> Get(Expression<Func<Organizacion, bool>> filter = null)
        {
            return Hidratar().Where(w => w.EstaActivo).ToList().AsQueryable();
        }
        private IQueryable<Organizacion> Hidratar()
        {
            return this.DonacionContext.Set<Organizacion>()
                .Include(o => o.Contacto);
        }
    }
}
