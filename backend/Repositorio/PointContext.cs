using Dominio;
using Microsoft.EntityFrameworkCore;

namespace Repositorio
{
    public class Context : DbContext
    {
        public Context(DbContextOptions<Context> opt)
            : base(opt)
        {

        }

        public DbSet<Point> Points { get; set; }
    }
}