using Microsoft.AspNetCore.Mvc;
using TechInsightAPI.Data;
using TechInsightAPI.Interfaces;
using TechInsightAPI.Models;

namespace TechInsightAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : Controller
    {
        private readonly ApplicationDbContext _context;

        public PostController(ApplicationDbContext context)
        {
            _context = context;
        }
        [HttpGet]
        [ProducesResponseType(200, Type = typeof(ICollection<Example>))]
        public IActionResult GetPosts()
        {
            var posts = _context.Posts.OrderBy(e => e.Id).ToList();
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            return Ok(posts);
        }
    }
}
