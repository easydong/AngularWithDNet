using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using AngularWithDNet.Models;

namespace AngularWithDNet.Data_Helpers
{
    public class StudentsRepo
    {
        private StudentDbContext _dbContext = new StudentDbContext();

        public IEnumerable<StudentVm> Query()
        {
            return _dbContext.Students;
        }

        public StudentVm Get(int id)
        {
            return _dbContext.Students.SingleOrDefault(student => student.Id == id);
        }

        public void Post(int id, StudentVm student)
        {
            var st = _dbContext.Students.SingleOrDefault(_st => _st.Id == id);
            _dbContext.Students.Attach(st);
            _dbContext.Entry(st).State = EntityState.Modified;
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
            bool saveFailed;
            do
            {
                saveFailed = false;

                try
                {
                    _dbContext.SaveChanges();
                }
                catch (DbUpdateConcurrencyException ex)
                {
                    saveFailed = true;

                    // Update the values of the entity that failed to save from the store 
                    ex.Entries.Single().Reload();
                }
            } while (saveFailed);
        }
    }
}