using TechInsightAPI.Models;

namespace TechInsightAPI.Interfaces
{
    public interface IExampleRepository
    {
        ICollection<Example> GetExamples();  
    }
}
