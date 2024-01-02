using TechInsightAPI.Data;
using TechInsightAPI.Interfaces;
using TechInsightAPI.Models;

namespace TechInsightAPI.Repositories
{
    public class ExampleRepository: IExampleRepository
    {
        private readonly ApplicationDbContext _context;
        public ExampleRepository(ApplicationDbContext context) {
     
            _context = context;
        }

        public ICollection<Example> GetExamples()
        {
            return _context.Examples.OrderBy(e => e.Id).ToList();
        }
    }
}
