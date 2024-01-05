namespace TechInsightAPI.DTOs
{
    public class CommentDto
    {
        public int Id { get; set; }
        public string Content { get; set; }
        public DateTime CreatedAt { get; set; }
        public int UserId {  get; set; }
        public string Username { get; set; }
        public string UserImage { get; set; }
        public int PostId { get; set; }
        public string PostTitle { get; set; }

    }
}
