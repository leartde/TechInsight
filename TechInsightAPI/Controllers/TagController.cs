﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Hosting;
using TechInsightAPI.Data;
using TechInsightAPI.DTOs;
using TechInsightAPI.Models;

namespace TechInsightAPI.Controllers
{
    [Route("api/tags")]
    [ApiController]
    public class TagController : Controller
    {
        private readonly ApplicationDbContext _context;
        public TagController(ApplicationDbContext context)
        {
            _context = context;
        }


        [HttpGet]
        [ProducesResponseType(200, Type = typeof(List<TagDto>))]
        [ProducesResponseType(400)]
        public IActionResult GetTags()
        {
            var tags = _context.Tags
                .Select(t => new TagDto
                {
                    Id = t.Id,
                    Name = t.Name,
                    PostCount = _context.PostTags.Count(pt => pt.TagId == t.Id)
                })
                .ToList();

            return Ok(tags);
        }


        [HttpDelete]
        [Route("delete/{id}")]

        public IActionResult DeleteTag(int id)
        {
            var tag = _context.Tags.Find(id);
            if (tag == null)
            {
                return NotFound();
            }
            _context.Tags.Remove(tag);
            _context.SaveChanges();
            return Ok($"Tag {tag.Name} with ID {tag.Id} deleted successfully");
        }
    }

}
