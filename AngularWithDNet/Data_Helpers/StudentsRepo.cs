using System.Collections.Generic;
using System.Linq;
using AngularWithDNet.Models;

namespace AngularWithDNet.Data_Helpers
{
    public class StudentsRepo
    {
        private StudentDbContext _dbContext=new StudentDbContext();

        public IEnumerable<StudentVm> Query()
        {
            return _dbContext.Students;
        }

        public StudentVm Get(int id)
        {
            return _dbContext.Students.SingleOrDefault(student => student.Id.Equals(id));
        }

        public void Post(int id,StudentVm student)
        {
            var st = _dbContext.Students.Where(_st => _st.Id.Equals(id));
            _dbContext.Entry(st).CurrentValues.SetValues(student);
            _dbContext.SaveChanges();
        }

        public void Put(StudentVm student)
        {
            _dbContext.Students.Add(student);
            _dbContext.SaveChanges();
        }

        public void Delete(int id)
        {
            var student = _dbContext.Students.SingleOrDefault(st => st.Id.Equals(id));
            _dbContext.Students.Remove(student);
            _dbContext.SaveChanges();
        }
    }
}