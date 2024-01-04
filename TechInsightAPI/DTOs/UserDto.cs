using TechInsightAPI.Models;
using TechInsightAPI.DTOs;
using System.ComponentModel.DataAnnotations;

namespace TechInsightAPI.DTOs
{
    public class UserDto
    {
        public int Id { get; set; }
        public string ?Username { get; set; }
        public string ?Email { get; set; }
        public string ?Bio { get; set; }
        public string ?ProfilePicUrl { get; set; }

        [Required(ErrorMessage = "Password is required")]
        public string ?Password { get; set; }

        public UserRole UserRole { get; set; }
        public DateTime RegistrationTime { get; set; }
    }
}
