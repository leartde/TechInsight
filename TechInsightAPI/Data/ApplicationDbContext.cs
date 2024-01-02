using Microsoft.EntityFrameworkCore;
using TechInsightAPI.Models;

namespace TechInsightAPI.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {


        }

        public DbSet<Example> Examples { get; set; }
    }
}
