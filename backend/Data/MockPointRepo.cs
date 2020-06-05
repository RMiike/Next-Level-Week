using Domain;
using System;
using System.Collections.Generic;
using System.Text;

namespace Data
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
                    Items = Items.Eletronicos,
                    Uf= "Rondônia"},  
                new Point {
                    Adress= "Casaasda",
                    Adress2= "Ch1sdasd",
                    City= "Alta Floresta D'Oeste",
                    Items = Items.Organicos,
                    Name= "Renato Miike Alvesasdasdasd",
                    Uf= "Rondônia"}, 
                new Point {
                    Adress= "Casaasda",
                    Adress2= "Ch1sdasd",
                    City= "Alta Floresta D'Oeste",
                    Items = Items.Papeis_e_Papelao,
                    Name= "Renato Miike Alvesasdasdasd",
                    Uf= "Rondônia"}
            };
            return points;
        }
    }
}
