using System.ComponentModel.DataAnnotations;

namespace TechInsightAPI.Models
{
    public class Comment
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Comment cannot be empty")]
        public string Content { get; set; }

        [DataType(DataType.DateTime)]
        public DateTime? CreatedAt { get; set; }

        [Required(ErrorMessage = "UserId is required")]
        public int UserId { get; set; }

        public virtual User? User { get; set; }

        [Required(ErrorMessage = "PostId is required")]
        public int PostId { get; set; }

        public virtual Post? Post { get; set; }

        public Comment()
        {
            CreatedAt = DateTime.Now;
        }

        public Comment(int userId)
        {
            UserId = userId;
        }
    }

}
