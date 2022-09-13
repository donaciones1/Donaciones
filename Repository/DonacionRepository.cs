using Donaciones.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Donaciones.Repository
{
    public class DonacionRepository<TContext> : EFRepository<Donacion, TContext> where TContext : DonacionDbContex
    {
        public DonacionRepository(TContext context) : base(context)
        {
           
        }

        public override Donacion Get(int id)
        {
            return Hidratar().FirstOrDefault(ds =>ds.Id == id);
        }

        public Donacion GetDonacionMasGrande()
        {
            return Hidratar().OrderByDescending(w => w.Cantidad).FirstOrDefault();
        }
        public int GetDonacionTotales()
        {
            return DonacionContext.Donaciones.Sum(w => w.Cantidad);
        }

        public override IQueryable<Donacion> Get(Expression<Func<Donacion, bool>> filter = null)
        { 
            return Hidratar().ToList().AsQueryable();
        }
        private IQueryable<Donacion> Hidratar()
        {
            return this.DonacionContext.Set<Donacion>()
                .Include(ds => ds.Donante);
        }
    }
}
