using Donaciones.Models;
using System;
using System.Linq;
using System.Linq.Expressions;

namespace Donaciones.Repository
{
    public interface IRepository<T> where T : Base
    {
        T Get(int id);
        IQueryable<T> Get(Expression<Func<T, bool>> filtro = null);
        T Add(T entidad);
        void Delete(int id);
        T Update(T entidad);
    }
}
