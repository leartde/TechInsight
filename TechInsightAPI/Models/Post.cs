using System.ComponentModel.DataAnnotations;
using TechInsightAPI.Models.TechInsight.Models;

namespace TechInsightAPI.Models
{
    public class Post
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Title is required")]
        public string Title { get; set; }

        [Required(ErrorMessage = "Content is required")]
        public string Content { get; set; }
        public string ImageURL { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public int UserId { get; set; }
        public User? User { get; set; }
        public int? CategoryId { get; set; }
        public Category? Category { get; set; } 
        public ICollection<Comment>? Comments { get; set; } = new List<Comment>();
        public ICollection<PostTag>? PostTags { get; set; } = new List<PostTag>();
        public ICollection<Like>? Likes { get; set; } = new List<Like>();
        public ICollection<UserClick>? UserClicks { get; set; } = new List<UserClick>();
    }

}
