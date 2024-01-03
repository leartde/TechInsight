namespace TechInsightAPI.Models
{
    public class Tag
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public virtual ICollection<PostTag> PostTags { get; set; } = new List<PostTag>();
    }

}
