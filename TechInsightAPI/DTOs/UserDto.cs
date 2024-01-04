﻿using TechInsightAPI.Models;
using System;
using System.ComponentModel.DataAnnotations;

namespace TechInsightAPI.DTOs
{
    public class UserDto
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Username is required")]
        public string Username { get; set; }

        [Required(ErrorMessage = "Email is required")]
        [EmailAddress(ErrorMessage = "Invalid email format")]
        public string Email { get; set; }

        public string Bio { get; set; }
        public string ProfilePicUrl { get; set; }

        [Required(ErrorMessage = "Password is required")]
        public string Password { get; set; }

        public UserRole UserRole { get; set; }
        public DateTime RegistrationTime { get; set; }
    }
}