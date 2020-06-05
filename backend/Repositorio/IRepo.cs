using Dominio;
using System;
using System.Collections.Generic;
using System.Text;

namespace Repositorio
{
    public interface IRepo
    {
        IEnumerable<Point> GetAll();
        Point GetCommandById(int id);

        void CreateCommand(Point point);

        void UpdateCommand(Point point);

        void DeleteCommand(Point point);
    }
}
