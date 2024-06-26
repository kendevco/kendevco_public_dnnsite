// Add namespaces for security check in Oqtane & DNN despite differences in .net core/.net Framework
// If you only target one platform, you can remove the parts you don't need
#if NETCOREAPP
using Microsoft.AspNetCore.Authorization; // .net core [AllowAnonymous] & [Authorize]
using Microsoft.AspNetCore.Mvc;           // .net core [HttpGet] / [HttpPost] etc.
#else
using System.Web.Http;                    // .net 4.5 [AllowAnonymous] / [HttpGet]
using DotNetNuke.Web.Api;                 // [DnnModuleAuthorize] & [ValidateAntiForgeryToken]
#endif
using System.Linq;                        // this enables .First() or .Select(x => ...)
using Dynlist = System.Collections.Generic.IEnumerable<dynamic>;

// Tutorial note: This is used in the WebApi demos App.Query

[AllowAnonymous]                          // all commands can be accessed without a login
[ValidateAntiForgeryToken]                // protects API from users not on your site (CSRF protection)
public class AuthorsQueryController : Custom.Hybrid.Api14 // see https://r.2sxc.org/CustomWebApi
{
  [HttpGet]                               // [HttpGet] says we're listening to GET requests
  public dynamic Get(int authorId)
  {
    var query = App.Query["AuthorsWithBooks"];
    query.Params("AuthorId", authorId.ToString());
    var a = AsDynamic(query["Current"].First());

    return new {
        Id = a.EntityId,
        a.FirstName,
        a.LastName,
        Picture = a.Mugshot,
        Books = AsList(query["CurrentBooks"])
          .Select(b => new {
            Id = b.EntityId,
            b.Title
          })
      };
  }

}

// The next line is for 2sxc-internal quality checks, you can ignore this
// 2sxclint:disable:no-dnn-namespaces - 2sxclint:disable:no-web-namespace