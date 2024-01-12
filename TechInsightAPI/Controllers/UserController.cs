using Microsoft.AspNetCore.Mvc;
using TechInsightAPI.DTOs;
using TechInsightAPI.Models;
using TechInsightAPI.Data;
using System;
using System.Linq;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using BCrypt.Net;
using TechInsightAPI.Interfaces;

namespace TechInsightAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly IPhotoService _photoService;

        public UserController(ApplicationDbContext context, IPhotoService photoService)
        {
            _context = context;
            _photoService = photoService;
        }

        [HttpPost("signup")]
        public ActionResult<UserDto> SignUp(UserDto userDto)
        {
            try
            {
             
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

            
                if (_context.Users.Any(u => u.Email == userDto.Email))
                {
                    return BadRequest("Email is already taken.");
                }

              
                string hashedPassword = BCrypt.Net.BCrypt.HashPassword(userDto.Password);

           
                var user = new User
                {
                    Username = userDto.Username,
                    Email = userDto.Email,
                    Bio = userDto.Bio,
                    ProfilePicUrl = userDto.ProfilePicUrl,
                    PasswordHash = hashedPassword, 
                    UserRole = userDto.UserRole,
                    RegistrationTime = DateTime.Now
                };

          
                _context.Users.Add(user);
                _context.SaveChanges();

                return CreatedAtAction(nameof(GetById), new { id = user.Id }, userDto);
            }
            catch (Exception ex)
            {
             
                Console.WriteLine($"Error in SignUp method: {ex.Message}");
                Console.WriteLine($"StackTrace: {ex.StackTrace}");

                return StatusCode(500, new { Message = "Internal Server Error", Details = ex.ToString() });
            }
        }

        [HttpPost("login")]
        public ActionResult<UserDto> Login(UserDto userDto)
        {
            try
            {
              
                if (string.IsNullOrEmpty(userDto.Email) || string.IsNullOrEmpty(userDto.Password))
                {
                    return BadRequest("Email and password are required.");
                }

                var user = _context.Users.FirstOrDefault(u => u.Email == userDto.Email);

           
                if (user == null)
                {
                    
                    return Unauthorized();
                }

               
                if (BCrypt.Net.BCrypt.Verify(userDto.Password, user.PasswordHash))
                {
                    
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

                  

                    return userDtoResponse;
                }
                else
                {
                   
                    return Unauthorized();
                }
            }
            catch (Exception ex)
            {
                
                Console.WriteLine($"Error in login method: {ex.Message}");
                Console.WriteLine($"StackTrace: {ex.StackTrace}");

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


        [HttpGet]
        public IActionResult GetUsers()
        {
            var users = from u in _context.Users
                        select new UserDto()
                        {
                            Id = u.Id,
                            Username = u.Username,
                            Bio = u.Bio,
                            Email = u.Email,
                            ProfilePicUrl = u.ProfilePicUrl,
                            RegistrationTime = u.RegistrationTime,
                            UserRole = u.UserRole
                        };

            return Ok(users);

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

                UserId = 1
            };

            try
            {
                _context.Contacts.Add(contact);
                _context.SaveChanges();

               
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

        [HttpPut("update")]

        public async Task<IActionResult> UpdateUser([FromForm]UserDto userDto)
        {
            if (userDto == null || userDto.Id <= 0)
            {
                return BadRequest("Invalid user data");
            }

            var user = await _context.Users.FindAsync(userDto.Id);

            if (user == null)
            {
                return NotFound($"User with ID {userDto.Id} not found");
            }

            try
            {
                
               

                user.Username = userDto.Username;
                user.Bio = userDto.Bio;
                user.Email = userDto.Email;
                if (userDto.Image != null)
                {
                    var imgResult = await _photoService.AddPhotoAsync(userDto.Image);
                    if (imgResult.Url == null)
                    {
                        return BadRequest("Error uploading user image");
                    }

                    user.ProfilePicUrl = imgResult.Url.ToString();
                }

                _context.Users.Update(user);
                await _context.SaveChangesAsync();

                return Ok(new { message = "User updated successfully", updatedUser = user });
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
               
                return StatusCode(500, $"An error occurred while updating the user: {ex.Message}");
            }
        }

        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            if (id <= 0)
            {
                return BadRequest("Invalid user data");
            }
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound($"User with ID {id} not found");
            }
            try
            {
               

                foreach (var post in user.Posts.ToList())
                {
                    _context.Posts.Remove(post);
                };

                foreach (var comment in user.Comments.ToList())
                {
                    _context.Comments.Remove(comment);
                };

                foreach (var contact in user.Contacts.ToList())
                {
                    _context.Contacts.Remove(contact);
                };


                _context.Users.Remove(user);
                await _context.SaveChangesAsync();
                return Ok($"User with ID {user.Id} deleted successfully");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error: {ex.Message}");

                return StatusCode(500, $"An error occurred while deleting the user: {ex.Message}");
            }


        }

    }
}
