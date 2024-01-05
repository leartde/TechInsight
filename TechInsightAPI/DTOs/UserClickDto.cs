namespace TechInsightAPI.DTOs
{
    public class UserClickDto
    {
        public int PostId { get; set; }
        public string postTitle { get; set; }
        public int UserId { get; set; }
        public string UserName { get; set; }
        public DateTime ClickedAt { get; set; } = DateTime.Now;


    }
}
