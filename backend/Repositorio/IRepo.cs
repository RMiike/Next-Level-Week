using Dominio;
using System;
using System.Collections.Generic;
using System.Text;

namespace Repositorio
{
    public interface IRepo
    {
        bool SaveChanges();
        IEnumerable<Point> GetAll();
        Point GetPointById(int id);

        void CreatePoint(Point point);

        void UpdatePoint(Point point);

        void DeletePoind(Point point);
    }
}
