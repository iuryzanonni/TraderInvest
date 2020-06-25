using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace APITrader.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ParserController : ControllerBase
    {
        [HttpGet]
        public void GetDatabase()
        
        
        {
            Parser parser = new Parser();
            parser.fillDatabase();
        }
    }
}
