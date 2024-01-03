using System.ComponentModel.DataAnnotations;

namespace TechInsightAPI.Models
{
    public class Category
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "Category name is required")]
        public string Name { get; set; }

        public ICollection<Post> Posts { get; set; }
    }
}
