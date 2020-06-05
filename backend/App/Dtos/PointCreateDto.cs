using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Dtos
{
    public class PointCreateDto
    {
        [Required]
        public string Adress { get; set; }
        [Required]

        public string Adress2 { get; set; }
        [Required]

        public string City { get; set; }


        [Required]

        public string[] Items { get; set; }


        [Required]

        public string Name { get; set; }

        [Required]

        public string Url { get; set; }
        [Required]

        public string Uf { get; set; }

    }
}
