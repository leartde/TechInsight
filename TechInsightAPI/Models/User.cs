using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using TechInsightAPI.Models.TechInsight.Models;

namespace TechInsightAPI.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Username is required")]
        public string Username { get; set; }

        [EmailAddress]
        public string ?Email { get; set; }

        [Required(ErrorMessage = "Password is required")]
        public string? PasswordHash { get; set; }
        //public string ?Password { get; set; }

        public string ?Bio { get; set; }
        public string ?ProfilePicUrl { get; set; }

        public UserRole UserRole { get; set; }

        public DateTime RegistrationTime { get; set; } = DateTime.Now;

        [JsonIgnore]
        public virtual ICollection<Post> Posts { get; set; } = new List<Post>();
        [JsonIgnore]
        public virtual ICollection<Comment> Comments { get; set; } = new List<Comment>();

        [JsonIgnore]
        public virtual ICollection<UserClick> UserClicks { get; set; } = new List<UserClick>();
        [JsonIgnore]
        public virtual ICollection<Contact> Contacts { get; set; } = new List<Contact>();
    }

    public enum UserRole
    {
        Standard,
        Admin,
        
    }

}
