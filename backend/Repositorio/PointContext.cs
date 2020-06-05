using Dominio;
using Microsoft.EntityFrameworkCore;
using System;

namespace Repositorio
{
    public class PointContext : DbContext
    {
        public PointContext(DbContextOptions<PointContext> opt)
            : base(opt)
        {

        }
   
        public DbSet<Point> Points { get; set; }
    }
}