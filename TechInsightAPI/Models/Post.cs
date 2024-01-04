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
        public virtual User User { get; set; }
        public int CategoryId { get; set; }
        public virtual Category? Category { get; set; } 
        public virtual ICollection<Comment>? Comments { get; set; } = new List<Comment>();
        public virtual ICollection<PostTag>? PostTags { get; set; } = new List<PostTag>();
        public virtual ICollection<Like>? Likes { get; set; } = new List<Like>();
        public  virtual ICollection<UserClick>? UserClicks { get; set; } = new List<UserClick>();
    }

}
