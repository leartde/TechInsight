using Newtonsoft.Json;
using System.Collections;

namespace TechInsightAPI.DTOs
{
    public class PostDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public int UserId { get; set; }
        public int PostId { get; set; }
        public string? Author { get; set; }
        public string? Category {  get; set; }

        public IFormFile? Image { get; set; }
        public string? ImageURL { get; set; }
        public string? UserImage { get; set; }
        public List<string>? Tags { get; set; }
        public string? TagsJson { get; set; }
        public int? NrClicks { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}
