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

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<Point>()
            .Property(e => e.Items)
            .HasConversion(
                v => string.Join(',', v),
                v => v.Split(',', StringSplitOptions.RemoveEmptyEntries));

        }
        public DbSet<Point> Points { get; set; }
    }
}