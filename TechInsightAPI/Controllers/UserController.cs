using Microsoft.AspNetCore.Mvc;
using TechInsightAPI.DTOs;
using TechInsightAPI.Models;
using TechInsightAPI.Data;
using System;
using System.Linq;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using BCrypt.Net;

namespace TechInsightAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public UserController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost("signup")]
        public ActionResult<UserDto> SignUp(UserDto userDto)
        {
            try
            {
                // Check model validity
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                // Check if the email already exists
                if (_context.Users.Any(u => u.Email == userDto.Email))
                {
                    return BadRequest("Email is already taken.");
                }

                // Hash the password using BCrypt
                string hashedPassword = BCrypt.Net.BCrypt.HashPassword(userDto.Password);

                // Create a new User entity and set its properties
                var user = new User
                {
                    Username = userDto.Username,
                    Email = userDto.Email,
                    Bio = userDto.Bio,
                    ProfilePicUrl = userDto.ProfilePicUrl,
                    PasswordHash = hashedPassword, // Set the hashed password property
                    UserRole = userDto.UserRole,
                    RegistrationTime = DateTime.Now
                };

                // Add the user to the database
                _context.Users.Add(user);
                _context.SaveChanges();

                // Return a successful response with the created UserDto
                return CreatedAtAction(nameof(GetById), new { id = user.Id }, userDto);
            }
            catch (Exception ex)
            {
                // Log the exception for debugging purposes
                Console.WriteLine($"Error in SignUp method: {ex.Message}");
                Console.WriteLine($"StackTrace: {ex.StackTrace}");

                // Return a detailed error response
                return StatusCode(500, new { Message = "Internal Server Error", Details = ex.ToString() });
            }
        }

        [HttpPost("login")]
        public ActionResult<UserDto> Login(UserDto userDto)
        {
            try
            {
                // Check if both email and password are provided
                if (string.IsNullOrEmpty(userDto.Email) || string.IsNullOrEmpty(userDto.Password))
                {
                    return BadRequest("Email and password are required.");
                }

                // Fetch the user from the database based on the provided email
                var user = _context.Users.FirstOrDefault(u => u.Email == userDto.Email);

                // Check if the user exists
                if (user == null)
                {
                    // Invalid credentials
                    return Unauthorized();
                }

                // Use BCrypt to compare the hashed password
                if (BCrypt.Net.BCrypt.Verify(userDto.Password, user.PasswordHash))
                {
                    // Password is correct, create a user DTO
                    var userDtoResponse = new UserDto
                    {
                        Id = user.Id,
                        Username = user.Username,
                        Email = user.Email,
                        Bio = user.Bio,
                        ProfilePicUrl = user.ProfilePicUrl,
                        UserRole = user.UserRole,
                        RegistrationTime = user.RegistrationTime
                    };

                    // Set a cookie for the user
                    //Response.Cookies.Append("UserId", user.Id.ToString());

                    return userDtoResponse;
                }
                else
                {
                    // Password is incorrect
                    return Unauthorized();
                }
            }
            catch (Exception ex)
            {
                // Log the exception for debugging purposes
                Console.WriteLine($"Error in login method: {ex.Message}");
                Console.WriteLine($"StackTrace: {ex.StackTrace}");

                // Return a detailed error response
                return StatusCode(500, new { Message = "Internal Server Error", Details = ex.ToString() });
            }
        }


        [HttpGet("discover/user-profiles")]
        public ActionResult<IEnumerable<UserDto>> GetDiscoverUserProfiles(int currentUserId)
        {
            try
            {
                var discoverUserProfiles = _context.Users
                    .Where(u => u.Id != currentUserId)
                    .Select(user => new UserDto
                    {
                        Id = user.Id,
                        Username = user.Username,
                        Bio = user.Bio,
                        ProfilePicUrl = user.ProfilePicUrl,
                    })
                    .ToList();

                return discoverUserProfiles;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error in GetDiscoverUserProfiles method: {ex.Message}");
                Console.WriteLine($"StackTrace: {ex.StackTrace}");

                return StatusCode(500, new { Message = "Internal Server Error", Details = ex.ToString() });
            }
        }
        [HttpPost("submit")]
        public async Task<IActionResult> SubmitContactForm(ContactDto contactDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var contact = new Contact
            {
                Name = contactDto.Name,
                Email = contactDto.Email,
                Subject = contactDto.Subject,
                Message = contactDto.Message,
                SubmissionTime = DateTime.Now,
                // Assuming you have a logged-in user, set UserId accordingly
                // You can modify this based on your authentication logic
                UserId = 1 // Replace with actual user ID or fetch from authentication
            };

            try
            {
                _context.Contacts.Add(contact);
                _context.SaveChanges();

                // You can customize the response based on your needs
                return Ok(new { Message = "Contact form submitted successfully." });
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, "Internal Server Error");
            }
        }




        [HttpGet("{id}")]
        public ActionResult<UserDto> GetById(int id)
        {
            var user = _context.Users.Find(id);

            if (user == null)
            {
                return NotFound();
            }

            return new UserDto
            {
                Id = user.Id,
                Username = user.Username,
                Email = user.Email,
                Bio = user.Bio,
                ProfilePicUrl = user.ProfilePicUrl,
                UserRole = user.UserRole,
                RegistrationTime = user.RegistrationTime
            };
        }
    }
}
