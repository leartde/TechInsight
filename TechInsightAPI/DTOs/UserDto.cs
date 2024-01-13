using TechInsightAPI.Models;
using System;
using System.ComponentModel.DataAnnotations;

namespace TechInsightAPI.DTOs
{
    public class UserDto
    {
        public int Id { get; set; }
        public string? Username { get; set; }

        //[Required(ErrorMessage = "Email is required")]
        [EmailAddress(ErrorMessage = "Invalid email format")]
        public string? Email { get; set; }

        public string? Bio { get; set; }
        public IFormFile? Image { get; set; }
        public string? ProfilePicUrl { get; set; }
        
        public string? Password { get; set; }

        public UserRole UserRole { get; set; }
        public DateTime? RegistrationTime { get; set; }
        public int postCount { get; set; }  
    }
}
