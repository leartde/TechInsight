using Microsoft.AspNetCore.Mvc;
using TechInsightAPI.Data;
using TechInsightAPI.DTOs;
using TechInsightAPI.Models;

namespace TechInsightAPI.Controllers
{
    [Route("api/categories")]
    [ApiController]

    public class CategoryController : Controller
    {
        private readonly ApplicationDbContext _context;
        public CategoryController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IQueryable<CategoryDto> GetCategories()
        {
            var categories = from c in _context.Categories
                             select new CategoryDto
                             {
                                 Id = c.Id,
                                 Name = c.Name,
                                 nrPosts = _context.Posts.Count(p => p.CategoryId == c.Id)
                             };
            return categories;
        }
    }
}
