using System.Data.Entity;
using AngularWithDNet.Models;

namespace AngularWithDNet
{
    public class StudentDbContext:DbContext
    {
        public StudentDbContext()
            : base("name=DefaultConnection")
        {

        }

        public DbSet<StudentVm> Students { get; set; }
    }
}