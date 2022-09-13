using Donaciones.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Linq.Expressions;

namespace Donaciones.Repository
{
    public class UsuarioRepository<TContext> : EFRepository<Usuario, TContext> where TContext : DonacionDbContex
    {
        public UsuarioRepository(TContext context) : base(context)
        {
        }

        public override Usuario Get(int id)
        {
            return Hidratar().FirstOrDefault(ds =>ds.Id == id && ds.EstaActivo);
        }

        public override void Delete(int id)
        {
            var usuario = this.Get(id);
            usuario.EstaActivo = false;
            usuario.UsuarioOrganizaciones = null;
            this.Update(usuario);
        }

        public override IQueryable<Usuario> Get(Expression<Func<Usuario, bool>> filter = null)
        {
            return Hidratar().Where(w => w.EstaActivo).ToList().AsQueryable();
        }
        private IQueryable<Usuario> Hidratar()
        {
            return this.DonacionContext.Set<Usuario>()
                .Include(o => o.UsuarioOrganizaciones);
        }
    }
}
