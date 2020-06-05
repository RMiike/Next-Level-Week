using Dominio;
using System.Collections.Generic;

namespace Repositorio
{
    public class MockPointRepo 
        //: IRepo
    {
        public IEnumerable<Point> GetAll()
        {

            var points = new List<Point>
            {
                new Point {
                    Adress= "Casaasda",
                    Adress2= "Ch1sdasd",
                    City= "Alta Floresta D'Oeste",
                    Name= "Renato Miike Alvesasdasdasd",
                    Uf= "Rondônia"},
                new Point {
                    Adress= "Casaasda",
                    Adress2= "Ch1sdasd",
                    City= "Alta Floresta D'Oeste",
                    Name= "Renato Miike Alvesasdasdasd",
                    Uf= "Rondônia"},
                new Point {
                    Adress= "Casaasda",
                    Adress2= "Ch1sdasd",
                    City= "Alta Floresta D'Oeste",
                    Name= "Renato Miike Alvesasdasdasd",
                    Uf= "Rondônia"}
            };
            return points;
        }
    }
}
