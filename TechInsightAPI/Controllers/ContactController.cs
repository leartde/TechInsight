using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using TechInsightAPI.Data;
using TechInsightAPI.DTOs;
using Microsoft.Extensions.Logging; 

namespace TechInsightAPI.Controllers
{

    [Route("api/contacts")]
    [ApiController]
    public class ContactController : Controller
    {

        private readonly ApplicationDbContext _context;
        public ContactController(ApplicationDbContext context)
        {
        _context = context;   
        }

        [HttpGet]
        public IActionResult GetContacts()
        {
            var contacts = from c in _context.Contacts
                           select new ContactDto()
                           {
                               Id = c.Id,
                               Name = c.Name,
                               Email = c.Email, 
                               Subject = c.Subject,
                               Message = c.Message,
                               SubmissionTime = c.SubmissionTime,
                               UserId = c.UserId,
                           };
            return Ok(contacts);
        }

        [HttpPost]
        [Route("addContact")]
        public async Task<IActionResult> AddContact(ContactDto contactDto, [FromServices] ILogger<ContactController> logger)
        {
            if(contactDto == null)
            {
                return BadRequest("Invalid input data");
            }
            var contact = new Contact
            {
                Name = contactDto.Name,
                Email = contactDto.Email,
                Subject = contactDto.Subject,
                Message = contactDto.Message,
                SubmissionTime = contactDto.SubmissionTime,
                UserId = contactDto.UserId
            };
            try
            {
                _context.Contacts.Add(contact);
                await _context.SaveChangesAsync();
                return Ok(new { Message = "Contact added successfully", Contact = contact });
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "An error occurred while saving the contact");
                return StatusCode(500, new { ErrorMessage = "An error occurred while saving the contact" });
            }
        }

        [HttpDelete]
        [Route("delete/{id}")]
        public async Task<IActionResult> DeleteContact(int id)
        {
            if (id <= 0)
            {
                return BadRequest("Invalid contact data");
            }
            var contact = await _context.Contacts.FindAsync(id);
            if (contact == null)
            {
                return NotFound($"Post with ID {id} not found");
            }
            try
            {


                _context.Contacts.Remove(contact);
                await _context.SaveChangesAsync();
                return Ok($"Contact with ID {contact.Id} deleted successfully");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error: {ex.Message}");

                return StatusCode(500, $"An error occurred while deleting the contact: {ex.Message}");
            }
        }
    }
}
