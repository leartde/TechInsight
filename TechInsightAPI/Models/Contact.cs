using TechInsightAPI.Models;

public class Contact
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
    public string Subject { get; set; }
    public string Message { get; set; }
    public DateTime SubmissionTime { get; set; }

    public int UserId { get; set; }

    public virtual User User { get; set; }
}