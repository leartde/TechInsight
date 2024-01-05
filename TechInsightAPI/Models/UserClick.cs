namespace TechInsightAPI.Models
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    namespace TechInsight.Models
    {
        public class UserClick
        {
            public int id { get; set; }
            public int PostId { get; set; }
            public int UserId { get; set; }
            public DateTime ClickedAt { get; set; } = DateTime.Now;

            public virtual Post ClickedPost { get; set; }
            public virtual User ClickingUser { get; set; }
        }
    }
}
