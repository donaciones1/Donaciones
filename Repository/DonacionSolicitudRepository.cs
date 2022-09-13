using Donaciones.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Donaciones.Repository
{
    public class DonacionSolicitudRepository<TContext> : EFRepository<DonacionSolicitud, TContext> where TContext : DonacionDbContex
    {
        public DonacionSolicitudRepository(TContext context) : base(context)
        {
        }

        public override DonacionSolicitud Get(int id)
        {
            return Hidratar().FirstOrDefault(ds =>ds.Id == id);
        }

        public override IQueryable<DonacionSolicitud> Get(Expression<Func<DonacionSolicitud, bool>> filter = null)
        {
            return Hidratar().ToList().AsQueryable();
        }

        public int GetCantidadDeSolicitudes()
        {
            return DonacionContext.DonacionSolicitudes.Count();
        }

        public int GetCantidadDeSolicitudesFinalizadas()
        {
            return DonacionContext.DonacionSolicitudes.Where(w => w.EstadoId == 3).Count();
        }


        private IQueryable<DonacionSolicitud> Hidratar()
        {
            return this.DonacionContext.Set<DonacionSolicitud>()
                .Include(ds => ds.Estado)
                .Include(ds => ds.Organizacion)
                .Include(ds => ds.Donaciones)
                .Include(ds => ds.Owner);
        }
    }
}
