using System.ComponentModel.DataAnnotations;

namespace TechInsightAPI.Models
{
    public class Example
    {
        [Key]
        public int Id { get; set; } 
        public string Name { get; set; }
        public string Description { get; set; }
    }
}
