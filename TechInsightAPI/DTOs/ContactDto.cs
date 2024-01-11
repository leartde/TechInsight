using System.ComponentModel.DataAnnotations;

namespace TechInsightAPI.DTOs
{
    public class ContactDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Subject { get; set; }
        public string Message { get; set; }
        public DateTime? SubmissionTime { get; set; } = DateTime.Now;
        public int UserId { get; set; }
    }
}
