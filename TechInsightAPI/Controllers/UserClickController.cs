using Microsoft.AspNetCore.Mvc;
using TechInsightAPI.Data;
using TechInsightAPI.DTOs;
using TechInsightAPI.Models;

namespace TechInsightAPI.Controllers
{
    [Route("api/userclicks")]
    [ApiController]
    public class UserClickController : Controller
    {
        private readonly ApplicationDbContext _context;
        
        public UserClickController(ApplicationDbContext context)
        {
            _context = context;
        }
        //[HttpGet]
        //[ProducesResponseType(200, Type = typeof(Post))]
        //[ProducesResponseType(400)]
        //public IActionResult GetPosts()
        //{
        //    var clicks = from c in _context.UserClicks
        //                select new UserClickDto()
        //                {
        //                 PostId = c.PostId,
                         
        //                };
        //    return Ok(clicks);
        //}
    }
}
