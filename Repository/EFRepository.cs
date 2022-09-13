using Donaciones.Models;
using System;
using System.Linq;
using System.Linq.Expressions;

namespace Donaciones.Repository
{
    public class EFRepository<T, TContext> : IRepository<T> where T : Base where TContext : DonacionDbContex
    {
        protected TContext DonacionContext { get; private set; }

        public EFRepository(TContext context)
        {
            DonacionContext = context;
        }

        public virtual T Add(T entidad)
        {
            DonacionContext.Add(entidad);

            this.DonacionContext.SaveChanges();
            return entidad;
        }

        public virtual void Delete(int id)
        {
            var entidad = DonacionContext.Set<T>().Find(id);

            DonacionContext.Remove(entidad);

            this.DonacionContext.SaveChanges();
        }

        public virtual T Get(int id)
        {
            return  DonacionContext.Set<T>().Find(id);
        }

        public virtual IQueryable<T> Get(Expression<Func<T, bool>> filter = null)
        {
            var query = DonacionContext.Set<T>().AsQueryable();

            if (filter != null)
            {
                query = query.Where(filter);
            }

            return query;
        }

        public virtual T Update(T entidad)
        {
            DonacionContext.Update(entidad);
            this.DonacionContext.SaveChanges();
            return entidad;
        }

    }
}
