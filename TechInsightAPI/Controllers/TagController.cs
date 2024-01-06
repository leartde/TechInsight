using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Hosting;
using TechInsightAPI.Data;
using TechInsightAPI.DTOs;
using TechInsightAPI.Models;

namespace TechInsightAPI.Controllers
{
    [Route("api/tags")]
    [ApiController]
    public class TagController : Controller
    {
        private readonly ApplicationDbContext _context;
            public TagController(ApplicationDbContext context)
        {
            _context = context;
        }


        [HttpGet]
        [ProducesResponseType(200, Type = typeof(TagDto))]
        [ProducesResponseType(400)]
        public IActionResult GetTags()
        {
            var tags = from t in _context.Tags
                        select new TagDto()
                        {
                            Id = t.Id,
                            Name = t.Name,
                            PostCount = _context.PostTags.Count(pt => pt.TagId == t.Id)

                        };
            return Ok(tags);
        }
    }
}
