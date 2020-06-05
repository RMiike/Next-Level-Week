﻿using Domain;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Data
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
