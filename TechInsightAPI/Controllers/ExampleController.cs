using Microsoft.AspNetCore.Mvc;
using TechInsightAPI.Interfaces;
using TechInsightAPI.Models;

namespace TechInsightAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExampleController : Controller
    {
        private readonly IExampleRepository _exampleRepository;

        public ExampleController(IExampleRepository exampleRepository)
        {
           _exampleRepository = exampleRepository;
        }
        [HttpGet]
        [ProducesResponseType(200,Type = typeof(ICollection<Example>))]
        public IActionResult GetExamples()
        {
            var examples = _exampleRepository.GetExamples();
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
           return Ok(examples);
        }
    }
}
