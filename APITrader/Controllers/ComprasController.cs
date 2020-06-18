using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APITrader.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace APITrader.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ComprasController : ControllerBase
    {
        private static List<Compras> compras = new List<Compras>();

        [HttpGet] //se eu mudar o nome da função para outro nome sem ser get
        public List<Compras> GetCompras()
        {
            Compras compras = new Compras();
            return compras.acoesCompradas();
        }
    }
}
