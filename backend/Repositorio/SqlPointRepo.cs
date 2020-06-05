using Dominio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Repositorio
{
    public class SqlPointRepo : IRepo
    {
        private readonly PointContext _context;

        public SqlPointRepo(PointContext context)
        {
            _context = context;
        }
        public IEnumerable<Point> GetAll()
        {
            return _context.Points.ToList();
        }
    }
}
