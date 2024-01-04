namespace TechInsightAPI.DTOs
{
    public class PostDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public string Author { get; set; }
        public string Category {  get; set; }
        public string ImageURL { get; set; }
        public string UserImage { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}
