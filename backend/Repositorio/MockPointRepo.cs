using Dominio;
using System;
using System.Collections.Generic;
using System.Text;

namespace Repositorio
{
    public class MockPointRepo : IRepo
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
                    Items = new Items[] {Items.Papeis_e_Papelao, Items.Eletronicos },
                    Uf= "Rondônia"},
                new Point {
                    Adress= "Casaasda",
                    Adress2= "Ch1sdasd",
                    City= "Alta Floresta D'Oeste",
                    Items = new Items[] {Items.Papeis_e_Papelao, Items.Eletronicos },
                    Name= "Renato Miike Alvesasdasdasd",
                    Uf= "Rondônia"},
                new Point {
                    Adress= "Casaasda",
                    Adress2= "Ch1sdasd",
                    City= "Alta Floresta D'Oeste",
                    Items = new Items[] {Items.Papeis_e_Papelao, Items.Eletronicos },
                    Name= "Renato Miike Alvesasdasdasd",
                    Uf= "Rondônia"}
            };
            return points;
        }
    }
}
