using Microsoft.AspNetCore.Mvc;
using TechInsightAPI.Data;
using TechInsightAPI.DTOs;
using TechInsightAPI.Models;
using TechInsightAPI.Models.TechInsight.Models;

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

        [HttpGet]
        public IActionResult Get()
        {
            var clicks = from uc in _context.UserClicks
                         select new UserClickDto()
                         {
                             PostId = uc.PostId,
                             UserId = uc.UserId,
                             ClickedAt = uc.ClickedAt,

                         };
            return Ok(clicks);
        }

        [HttpPost]
        [Route("AddClick/{postId}/{userId}")]
        public IActionResult AddClick(int postId, int userId)
        {
            if(postId < 0 ||  userId < 0)
            {
                return BadRequest("Invalid data");
            }
            var click = new UserClick
            {
                PostId = postId,
                UserId = userId,
                ClickedAt = DateTime.Now,
            };
           _context.UserClicks.Add(click);
            _context.SaveChanges();
            return Ok(click);

        }
        
    }
}
