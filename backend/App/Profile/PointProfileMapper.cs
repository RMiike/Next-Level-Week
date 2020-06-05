
using AutoMapper;
using backend.Dtos;
using Dominio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Profiles
{
    public class PointProfileMapper : Profile
    {
        public PointProfileMapper()
        {
            CreateMap<Point, PointReadDto>();
            CreateMap<PointCreateDto, Point>();
        }
    }
}
