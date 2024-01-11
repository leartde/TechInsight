using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Hosting;
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

        [HttpGet]
        [Route("commentById/{id}")]
        public IActionResult GetCommentById(int id)
        {
            if (!_context.Comments.Any(c => c.Id == id))
            {
                return NotFound();
            }

            var comments = from c in _context.Comments
                        select new CommentDto()
                        {
                            Id = c.Id,
                            Content = c.Content,
                            Username = c.User.Username,
                            UserId = c.UserId,
                            PostId = c.PostId,
                            CreatedAt = c.CreatedAt
                        };
            var selectedComment = comments.Where(c => c.Id == id).FirstOrDefault();

            return Ok(selectedComment);
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


        [HttpPost]
        [Route("AddComment")]
        public ActionResult<CommentDto> AddComment(CommentDto commentDto)
        {
          

            var comment = new Comment
            {
                Content = commentDto.Content,
                UserId = commentDto.UserId,
                PostId = commentDto.PostId,
                CreatedAt = commentDto.CreatedAt,
                
            };


            try
            {
                _context.Comments.Add(comment);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {

                return StatusCode(500, "An error occurred while saving the post");
            }


            var createdCommentDto = new CommentDto
            {
                Content = commentDto.Content,
                UserId = commentDto.UserId,
                PostId = commentDto.PostId,
                CreatedAt = commentDto.CreatedAt,

            };

            return Ok(createdCommentDto);
        }


            [HttpPut]
            [Route("UpdateComment")]
            public async Task<IActionResult> UpdateComment([FromForm] CommentDto commentDto)
            {
                if (commentDto == null || commentDto.Id <= 0)
                {
                    return BadRequest("Invalid comment data");
                }

                var comment = await _context.Comments.FindAsync(commentDto.Id);

                if (comment == null)
                {
                    return NotFound($"Comment with ID {commentDto.Id} not found");
                }

                try
                {
                    comment.Content = commentDto.Content;
                    _context.Comments.Update(comment);
                    await _context.SaveChangesAsync();

                    return Ok(new { message = "comment updated successfully", updatedComment = commentDto });
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"Error: {ex.Message}");

                    return StatusCode(500, $"An error occurred while updating the comment: {ex.Message}");
                }
            }

        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> DeleteComment(int id)
        {
            if (id <= 0)
            {
                return BadRequest("Invalid comment data");
            }
            var comment = await _context.Comments.FindAsync(id);
            if (comment == null)
            {
                return NotFound($"Comment with ID {id} not found");
            }
            try
            {
     
                _context.Comments.Remove(comment);
                await _context.SaveChangesAsync();
                return Ok($"Comment with ID {comment.Id} deleted successfully");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error: {ex.Message}");

                return StatusCode(500, $"An error occurred while deleting the commnent: {ex.Message}");
            }
        }







    }
}
