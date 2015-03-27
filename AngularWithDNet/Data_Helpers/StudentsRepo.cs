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

        public StudentVm Get(string name)
        {
            return _dbContext.Students.SingleOrDefault(student => student.Name.Equals(name));
        }

        public void Post(string name,StudentVm student)
        {
            var st = _dbContext.Students.Where(_st => _st.Name.Equals(student.Name));
            _dbContext.Entry(st).CurrentValues.SetValues(student);
            _dbContext.SaveChanges();
        }

        public void Put(StudentVm student)
        {
            _dbContext.Students.Add(student);
            _dbContext.SaveChanges();
        }

        public void Delete(string name)
        {
            var student = _dbContext.Students.SingleOrDefault(st => st.Name.Equals(name));
            _dbContext.Students.Remove(student);
        }
    }
}