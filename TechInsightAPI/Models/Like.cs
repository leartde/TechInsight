using System.ComponentModel.DataAnnotations;

namespace TechInsightAPI.Models
{
    public class Like
    {
        public int Id { get; set; }

        [DataType(DataType.DateTime)]
        public DateTime CreatedAt { get; set; }

        [Required(ErrorMessage = "UserId is required")]
        public int UserId { get; set; }

        public virtual User? User { get; set; }

        [Required(ErrorMessage = "PostId is required")]
        public int PostId { get; set; }

        public virtual Post? Post { get; set; }
    }

}
