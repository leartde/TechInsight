using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;
using System.Text.Json;
using TechInsightAPI.Data;
using TechInsightAPI.Interfaces;
using TechInsightAPI.Models;
using TechInsightAPI.DTOs;
using System.Reflection;

namespace TechInsightAPI.Controllers
{
    [Route("api/posts")]
    [ApiController]
    public class PostController : Controller
    {
        private readonly ApplicationDbContext _context;

        public PostController(ApplicationDbContext context)
        {
            _context = context;
        }
        [HttpGet]
        [ProducesResponseType(200, Type = typeof(Post))]
        [ProducesResponseType(400)]
        public IActionResult GetPosts()
        {
            var posts = from p in _context.Posts
                        select new PostDto()
                        {
                            Id = p.Id,
                            Title = p.Title,
                            Content = p.Content,
                            Author = p.User.Username,
                            UserId = p.User.Id,
                            Category = p.Category.Name,
                            ImageURL = p.ImageURL,
                            Tags = _context.PostTags
                                .Where(t => t.PostId == p.Id)
                                .Select(pt => pt.TagReference.Name)
                                .ToList(),
                            UserImage = p.User.ProfilePicUrl,
                            CreatedAt = p.CreatedAt
                        };
            return Ok(posts);
        }

        [HttpGet("{postId}")]
        [ProducesResponseType(200, Type = typeof(Post))]
        [ProducesResponseType(400)]
        public IActionResult GetPost(int postId)
        {
            if (!_context.Posts.Any(p => p.Id == postId))
            {
                return NotFound();
            }
            var posts = from p in _context.Posts
                        select new PostDto()
                        {
                            Id = p.Id,
                            Title = p.Title,
                            Content = p.Content,
                            Author = p.User.Username,
                            UserId = p.User.Id,
                            Category = p.Category.Name,
                            ImageURL = p.ImageURL,
                            Tags = _context.PostTags
                                .Where(t => t.PostId == p.Id)
                                .Select(pt => pt.TagReference.Name)
                                .ToList(),
                            UserImage = p.User.ProfilePicUrl,
                            CreatedAt = p.CreatedAt
                        };
            var selectedPost = posts.Where(p => p.Id == postId).FirstOrDefault();

            return Ok(selectedPost);

        }

        [HttpGet("category/{category}")]
        [ProducesResponseType(200, Type = typeof(Post))]
        [ProducesResponseType(400)]
        public IActionResult GetPosts(string category)
        {
            var posts = from p in _context.Posts
                        select new PostDto()
                        {
                            Id = p.Id,
                            Title = p.Title,
                            Content = p.Content,
                            Author = p.User.Username,
                            UserId = p.User.Id,
                            Category = p.Category.Name,
                            ImageURL = p.ImageURL,
                            Tags = _context.PostTags
                                .Where(t => t.PostId == p.Id)
                                .Select(pt => pt.TagReference.Name)
                                .ToList(),
                            UserImage = p.User.ProfilePicUrl,
                            CreatedAt = p.CreatedAt
                        };

            var selectedPosts = posts.Where(p => p.Category == category).ToList();

            if (selectedPosts.Count == 0)
            {
                return NotFound();
            }

            return Ok(selectedPosts);
        }

        [HttpGet("user/{userId}")]
        [ProducesResponseType(200, Type = typeof(Post))]
        [ProducesResponseType(400)]
        public IActionResult GetPosts(int userId)
        {
            var posts = from p in _context.Posts
                        select new PostDto()
                        {
                            Id = p.Id,
                            Title = p.Title,
                            Content = p.Content,
                            Author = p.User.Username,
                            UserId = p.User.Id,
                            Category = p.Category.Name,
                            ImageURL = p.ImageURL,
                            Tags = _context.PostTags
                                .Where(t => t.PostId == p.Id)
                                .Select(pt => pt.TagReference.Name)
                                .ToList(),
                            UserImage = p.User.ProfilePicUrl,
                            CreatedAt = p.CreatedAt
                        };

            var selectedPosts = posts.Where(p => p.UserId == userId).ToList();

            if (selectedPosts.Count == 0)
            {
                return NotFound();
            }

            return Ok(selectedPosts);
        }

        [HttpGet("popularPosts")]
        [ProducesResponseType(200, Type = typeof(Post))]
        [ProducesResponseType(400)]
        public IActionResult GetPostsByClicks()
        {
            var posts = from p in _context.Posts
                        select new PostDto()
                        {
                            Id = p.Id,
                            Title = p.Title,
                            Content = p.Content,
                            Author = p.User.Username,
                            UserId = p.User.Id,
                            Category = p.Category.Name,
                            ImageURL = p.ImageURL,
                            Tags = _context.PostTags
                                .Where(t => t.PostId == p.Id)
                                .Select(pt => pt.TagReference.Name)
                                .ToList(),
                            UserImage = p.User.ProfilePicUrl,
                            NrClicks = _context.UserClicks.Count(c => c.PostId == p.Id),
                            CreatedAt = p.CreatedAt
                        };

            var selectedPosts = posts.OrderByDescending(p => p.NrClicks);

          

            return Ok(selectedPosts);
        }

        [HttpGet("tag/{tag}")]
        [ProducesResponseType(200, Type = typeof(Post))]
        [ProducesResponseType(400)]
        public IActionResult GetPostsByTag(string tag)
        {
            var posts = from p in _context.Posts
                        select new PostDto()
                        {
                            Id = p.Id,
                            Title = p.Title,
                            Content = p.Content,
                            Author = p.User.Username,
                            UserId = p.User.Id,
                            Category = p.Category.Name,
                            ImageURL = p.ImageURL,
                            Tags = _context.PostTags
                                .Where(t => t.PostId == p.Id)
                                .Select(pt => pt.TagReference.Name)
                                .ToList(),
                            UserImage = p.User.ProfilePicUrl,
                            CreatedAt = p.CreatedAt
                        };

            var selectedPosts = posts.Where(p => p.Tags.Contains(tag)).ToList();

            if (selectedPosts.Count == 0)
            {
                return NotFound();
            }

            return Ok(selectedPosts);
        }

        [HttpPost]
        [Route("AddPost")]
        public ActionResult<PostDto> AddPost(PostDto postDto)
        {
            if (postDto == null || string.IsNullOrEmpty(postDto.Title) || string.IsNullOrEmpty(postDto.Content))
            {
                return BadRequest("Invalid input data");
            }

            var post = new Post
            {
                Title = postDto.Title,
                Content = postDto.Content,
                UserId = postDto.UserId,
                Author = postDto.Author,
                ImageURL = postDto.ImageURL,
                CreatedAt = postDto.CreatedAt,

            };
            var existingTags = _context.Tags.Where(t => postDto.Tags.Contains(t.Name)).ToList();
            foreach (var tagName in postDto.Tags)
            {
                var existingTag = existingTags.FirstOrDefault(t => t.Name == tagName);
                if (existingTag != null)
                {
                    post.PostTags.Add(new PostTag { TagReference = existingTag });
                }
                else
                {
                    post.PostTags.Add(new PostTag { TagReference = new Tag { Name = tagName } });
                }
            }

            if (!string.IsNullOrEmpty(postDto.Category))
            {
                var existingCategory = _context.Categories.FirstOrDefault(c => c.Name == postDto.Category);

                if (existingCategory == null)
                {
                    existingCategory = new Category { Name = postDto.Category };
                    _context.Categories.Add(existingCategory);
                }

                post.Category = existingCategory;
            }

            try
            {
                _context.Posts.Add(post);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                
                return StatusCode(500, "An error occurred while saving the post");
            }

           
            var createdPostDto = new PostDto
            {
                Id = post.Id,
                Title = post.Title,
                Content = post.Content,
                Author = post.Author,
                UserId = post.UserId,
                ImageURL = post.ImageURL,
                CreatedAt = post.CreatedAt,
                
            };

            return Ok(createdPostDto);
        }









    }
}
