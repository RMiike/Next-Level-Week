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

    
        public void CreatePoint(Point point)
        {
            if (point == null)
            {
                throw new ArgumentNullException(nameof(point));
            }
            _context.Points.Add(point);
        }

      
        public void DeletePoind(Point point)
        {

            if (point == null)
            {
                throw new ArgumentNullException(nameof(point));
            }
            _context.Remove(point);
        }

        public IEnumerable<Point> GetAll()
        {
            return _context.Points.ToList();
        }

        public Point GetPointByCity(string uf)
        {
            return _context.Points.FirstOrDefault(p => p.Uf == uf);
        }

        public Point GetPointById(int uf)
        {
            return _context.Points.FirstOrDefault(p => p.Id == uf);
        }
        public bool SaveChanges()
        {
            return (_context.SaveChanges() >= 0);
        }

    
        public void UpdatePoint(Point point)
        {
            //Nothing
        }
    }
}
