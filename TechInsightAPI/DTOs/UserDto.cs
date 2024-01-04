using TechInsightAPI.Models;
using TechInsightAPI.DTOs;

namespace TechInsightAPI.DTOs
{
    public class UserDto
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Bio { get; set; }
        public string ProfilePicUrl { get; set; }
        public UserRole UserRole { get; set; }
        public DateTime RegistrationTime { get; set; }
    }
}
