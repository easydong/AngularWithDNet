using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AngularWithDNet.Data_Helpers;
using AngularWithDNet.Models;

namespace AngularWithDNet.Controllers
{
    public class StudentsApiController : ApiController
    {
        private StudentsRepo studentDb=new StudentsRepo();
        // GET api/StudentsApi
        public HttpResponseMessage Get()
        {
            var students=studentDb.Query().ToList();
            return Request.CreateResponse(HttpStatusCode.OK, students);
        }

        // GET api/values/5
        public HttpResponseMessage Get(string name)
        {
            var st = studentDb.Get(name);
            return Request.CreateResponse(HttpStatusCode.OK, st);
        }

        // POST api/values
        public void Post(string name,[FromBody]StudentVm student)
        {
            studentDb.Post(name, student);
        }

        // PUT api/values/5
        public void Put([FromBody]StudentVm student)
        {
            studentDb.Put(student);
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}