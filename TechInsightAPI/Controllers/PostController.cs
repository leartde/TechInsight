using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;
using System.Text.Json;
using TechInsightAPI.Data;
using TechInsightAPI.Interfaces;
using TechInsightAPI.Models;
using TechInsightAPI.DTOs;
using System.Reflection;
using Newtonsoft.Json;
using System.Security.Claims;

namespace TechInsightAPI.Controllers
{
    [Route("api/posts")]
    [ApiController]
    public class PostController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly IPhotoService _photoService;

        public PostController(ApplicationDbContext context, IPhotoService photoService)
        {
            _context = context;
            _photoService = photoService;
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
                            NrClicks = _context.UserClicks.Count(c => c.PostId == p.Id),
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
        public async Task<IActionResult> AddPost([FromForm] PostDto postDto)
        {
            if (postDto == null || string.IsNullOrEmpty(postDto.Title) || string.IsNullOrEmpty(postDto.Content))
            {
                return BadRequest("Invalid input data");
            }

            
            List<string> tags = JsonConvert.DeserializeObject<List<string>>(postDto.TagsJson);

            var imgResult = await _photoService.AddPhotoAsync(postDto.Image);
            var post = new Post
            {
                Title = postDto.Title,
                Content = postDto.Content,
                UserId = postDto.UserId,
                ImageURL = imgResult.Url.ToString(),
                CreatedAt = postDto.CreatedAt,
            };

            var existingTags = _context.Tags
                .Where(t => tags.Contains(t.Name))
                .ToList();

            foreach (var tagName in tags)
            {
                var existingTag = existingTags.FirstOrDefault(t => t.Name == tagName);

                if (existingTag != null)
                {
                    post.PostTags.Add(new PostTag { TagReference = existingTag });
                }
                else
                {
                    var newTag = new Tag { Name = tagName };
                    post.PostTags.Add(new PostTag { TagReference = newTag });
                    existingTags.Add(newTag);
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
                await _context.SaveChangesAsync();

               
                var createdPostDto = new PostDto
                {
                    Id = post.Id,
                    Title = post.Title,
                    Content = post.Content,
                    UserId = post.UserId,
                    ImageURL = post.ImageURL,
                    CreatedAt = post.CreatedAt,
                };

                return Ok(new { Message = "Post added successfully", Post = createdPostDto });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { ErrorMessage = "An error occurred while saving the post" });
            }


        }


        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> DeletePost(int id)
        {
            if (id <= 0)
            {
                return BadRequest("Invalid post data");
            }
            var post = await _context.Posts.FindAsync(id);
            if (post == null)
            {
                return NotFound($"Post with ID {id} not found");
            }
            try
            {



                foreach (var comment in post.Comments.ToList())
                {
                    _context.Comments.Remove(comment);
                };



                _context.Posts.Remove(post);
                await _context.SaveChangesAsync();
                return Ok($"Post with ID {post.Id} deleted successfully");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error: {ex.Message}");

                return StatusCode(500, $"An error occurred while deleting the post: {ex.Message}");
            }
        }
        [HttpPut("update")]
        public async Task<IActionResult> EditPost([FromForm] PostDto postDto)
        {
            if (postDto == null || postDto.Id <= 0)
            {
                return BadRequest("Invalid post data");
            }

           
            var post = await _context.Posts.FindAsync(postDto.Id);
            List<string> tags = JsonConvert.DeserializeObject<List<string>>(postDto.TagsJson);
            var existingTags = _context.Tags
                .Where(t => tags.Contains(t.Name))
                .ToList();


            if (post == null)
            {
                return NotFound($"Post with ID {postDto.Id} not found");
            }

            try
            {
                
                post.Title = postDto.Title;
                post.Content = postDto.Content;
                if (!string.IsNullOrEmpty(postDto.Category))
                {
                    var existingCategory = _context.Categories.FirstOrDefault(c => c.Name == postDto.Category);

                    post.Category = existingCategory;
                }
                var tagsToRemove = post.PostTags.Where(pt => !tags.Contains(pt.TagReference.Name)).ToList();
                foreach (var tagToRemove in tagsToRemove)
                {
                    post.PostTags.Remove(tagToRemove);
                    
                }

                foreach (var tagName in tags)
                {
                    var existingTag = existingTags.FirstOrDefault(t => t.Name == tagName);

                    if (existingTag != null)
                    {
                      
                        var existingPostTag = post.PostTags.FirstOrDefault(pt => pt.TagId == existingTag.Id);

                        if (existingPostTag != null)
                        {
                           
                            existingPostTag.TagReference = existingTag;

                            
                            _context.Entry(existingPostTag).State = EntityState.Modified;
                        }
                        else
                        {
                            var newTag = new Tag { Name = tagName };
                            post.PostTags.Add(new PostTag { TagReference = newTag });
                            existingTags.Add(newTag);
                        }
                    }
                    else
                    {
                      
                        var newTag = new Tag { Name = tagName };
                        post.PostTags.Add(new PostTag { TagReference = newTag });
                        existingTags.Add(newTag);
                    }
                }






                if (postDto.Image != null)
                {
                    var imgResult = await _photoService.AddPhotoAsync(postDto.Image);
                    if (imgResult.Url == null)
                    {
                        return BadRequest("Error uploading post image");
                    }
                    post.ImageURL = imgResult.Url.ToString();
                }

         

                _context.Posts.Update(post);
                await _context.SaveChangesAsync();

                var updatedPostDto = new PostDto
                {
                    Id = post.Id,
                    Title = post.Title,
                    Content = post.Content,
                    UserId = post.UserId,
                    ImageURL = post.ImageURL,
                    CreatedAt = post.CreatedAt,
                    
                };

                return Ok(new { Message = "Post updated successfully", Post = updatedPostDto });
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
                return StatusCode(500, $"An error occurred while updating the post: {ex.Message}");
            }
        }















    }
}
