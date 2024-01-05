using Microsoft.AspNetCore.Mvc;
using TechInsightAPI.Data;
using TechInsightAPI.DTOs;
using TechInsightAPI.Models;

namespace TechInsightAPI.Controllers
{
    [Route("api/comments")]
    [ApiController]
    public class CommentController : Controller
    {
        private readonly ApplicationDbContext _context;

        public CommentController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        [ProducesResponseType(200, Type = typeof(Comment))]
        [ProducesResponseType(400)]
        public IActionResult GetComments()
        {
            var comments = from c in _context.Comments
                           select new CommentDto()
                           {
                               Id = c.Id,
                               Content = c.Content,
                               CreatedAt = c.CreatedAt,
                               UserId = c.UserId,
                               Username = c.User.Username,
                               UserImage = c.User.ProfilePicUrl,
                               PostId = c.PostId,
                               PostTitle = c.Post.Title

                           };
            return Ok(comments);
        }

        [HttpGet("post/{postId}")]
        [ProducesResponseType(200, Type = typeof(Comment))]
        [ProducesResponseType(400)]
        public IActionResult GetComments(int postId)
        {
            var comments = from c in _context.Comments
                           select new CommentDto()
                           {
                               Id = c.Id,
                               Content = c.Content,
                               CreatedAt = c.CreatedAt,
                               UserId = c.UserId,
                               Username = c.User.Username,
                               UserImage = c.User.ProfilePicUrl,
                               PostId = c.PostId,
                               PostTitle = c.Post.Title

                           };

            var selectedComments = comments.Where(c => c.PostId == postId).ToList();

            if (selectedComments.Count == 0)
            {
                return NotFound();
            }

            return Ok(selectedComments);
        }






    }
}
