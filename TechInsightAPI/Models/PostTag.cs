using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace TechInsightAPI.Models
{
    public class PostTag
    {
        [Key]
        [Column(Order = 1)]
        public int PostId { get; set; }

        [Key]
        [Column(Order = 2)]
        public int TagId { get; set; }

        public virtual Post PostReference { get; set; }
        public virtual Tag TagReference { get; set; }
    }

}
