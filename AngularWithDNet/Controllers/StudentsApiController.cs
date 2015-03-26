using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AngularWithDNet.Models;

namespace AngularWithDNet.Controllers
{
    public class StudentsApiController : ApiController
    {

        private List<StudentVm> students = new List<StudentVm>
        {
            new StudentVm() {Name = "Sudheer", Age = "24"},
            new StudentVm() {Name = "Sumanth", Age = "25"}

        };
        // GET api/StudentsApi
        public HttpResponseMessage Get()
        {
            return Request.CreateResponse(HttpStatusCode.OK, students);
        }

        // GET api/values/5
        public HttpResponseMessage Get(string name)
        {
            var st = students.First(student => student.Name.Equals(name));
            return Request.CreateResponse(HttpStatusCode.OK, st);
        }

        // POST api/values
        public void Post([FromBody]StudentVm student)
        {
            students.Add(student);
        }

        // PUT api/values/5
        public void Put([FromBody]StudentVm student)
        {
            students.Add(student);
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}