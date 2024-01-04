using Microsoft.AspNetCore.Mvc;
using TechInsightAPI.DTOs;
using TechInsightAPI.Models;
using TechInsightAPI.Data;
using System;
using System.Linq;

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
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // Create a new User entity and set its properties
            var user = new User
            {
                Username = userDto.Username,
                Email = userDto.Email,
                Bio = userDto.Bio,
                ProfilePicUrl = userDto.ProfilePicUrl,
                Password = userDto.Password, // Set the password property
                UserRole = userDto.UserRole,
                RegistrationTime = DateTime.Now
            };

            try
            {
                // Add the user to the database
                _context.Users.Add(user);
                _context.SaveChanges();

                // Return a successful response with the created UserDto
                return CreatedAtAction(nameof(GetById), new { id = user.Id }, userDto);
            }
            catch (Exception ex)
            {
                // Log the exception for debugging purposes
                Console.WriteLine(ex);

                // Return a 500 Internal Server Error response
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
