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
        // GET api/StudentsApi
        public HttpResponseMessage Get()
        {
            var students = new List<StudentVm>
            {
                new StudentVm() {Name = "Sudheer", Age = "24"},
                new StudentVm() {Name = "Sumanth", Age = "25"}
            };
            return Request.CreateResponse(HttpStatusCode.OK, students);
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}