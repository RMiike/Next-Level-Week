using Dominio;
using System;
using System.Collections.Generic;
using System.Text;

namespace Repositorio
{
    public interface IRepo
    {
        IEnumerable<Point> GetAll();
    }
}
