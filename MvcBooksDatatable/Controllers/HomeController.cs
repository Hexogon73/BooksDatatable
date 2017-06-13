using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MvcBooksDatatable.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult getData()
        {
            //Datatable parameter
            var draw = Request.Form.GetValues("draw").FirstOrDefault();
            //pading parameter
            var start = Request.Form.GetValues("start").FirstOrDefault();
            var length = Request.Form.GetValues("length").FirstOrDefault();
            //sorting parameter
            var sortColumn = Request.Form.GetValues("columns["+Request.Form.GetValues("order[0][column]").FirstOrDefault()+"][name]").FirstOrDefault();
            var sortColumnDir = Request.Form.GetValues("order[0][dir]").FirstOrDefault();
            //filter parameter
            var searchValue = Request.Form.GetValues("search[value]").FirstOrDefault();



            List<Book> allBooks = new List<Book>();
            int pageSize = length != null ? Convert.ToInt32(length) : 0;
            int skip = start != null ? Convert.ToInt32(start) : 0;
            int recordsTotal = 0;

            //database query
            using (BooksDatabaseEntities dc = new BooksDatabaseEntities())
            {
                var v = (from a in dc.Books select a);

                //search
                if (!string.IsNullOrEmpty(searchValue))
                {

                }

                return Json(dc.Books.ToList());
            }
        }
    }
}