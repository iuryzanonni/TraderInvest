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
    public class CarteiraController : ControllerBase
    {
        [HttpGet]
        public List<Carteira> GetCarteira()
        {
            Carteira carteira = new Carteira();
            return carteira.carteiraUser("iury.faria");
        }
    }
}
