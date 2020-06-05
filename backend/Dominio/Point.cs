using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Dominio
{
    public class Point
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Adress { get; set; }
        [Required]

        public string Adress2 { get; set; }
        [Required]

        public string City { get; set; }


        [Required]

        public string Items { get; set; }


        [Required]

        public string Name { get; set; }

        [Required]

        public string Url { get; set; }
        [Required]

        public string Uf { get; set; }

    }
}
