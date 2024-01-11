using System.ComponentModel.DataAnnotations;

namespace TechInsightAPI.DTOs
{
    public class CommentDto
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "Content cannot be empty")]
        public string Content { get; set; }
        public DateTime? CreatedAt { get; set; } = DateTime.Now;
        public int UserId {  get; set; }
        public string? Username { get; set; }
        public string? UserImage { get; set; }
        public int PostId { get; set; }
        public string? PostTitle { get; set; }

    }
}
