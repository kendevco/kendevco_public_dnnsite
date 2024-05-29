using DotNetNuke.Security;
using DotNetNuke.Web.Api;
using System.Web.Http;
using System.Collections.Generic;
using ToSic.SexyContent.WebApi;
using System.Linq;
using System;

public class ExampleController : SxcApiController
{
	[HttpGet]
    [AllowAnonymous]
    public bool IsOk()
    {
        return true;
    }


	[HttpPost]
    [AllowAnonymous]
    // public access is important
    [DnnModuleAuthorize(AccessLevel = SecurityAccessLevel.Anonymous)]
    // Don't validate token, as we want to allow public access
    // [ValidateAntiForgeryToken]
    public bool IsOk(dynamic postFeedback)
    {
        // var feedback = new Dictionary<string, object>();
        // feedback.Add("Subject", postFeedback.Subject.ToString());
        // feedback.Add("Message", postFeedback.Message.ToString());
        // feedback.Add("Status", "New");

        // // to define relationships, always create a list first. Reason is that internally
        // // relationships could always be more than one, so it's always a list
        // // use the entity-id to establish the relationship
        // var categ = new List<int>();
        // categ.Add(Convert.ToInt32(postFeedback.Category.ToString()));
        // feedback.Add("Category", categ);

        // App.Data.Create("Feedback", feedback, "Anonymous"); // full version, with "who did it" for the log entry

        return true;
    }

    // [HttpGet]
    // [DnnModuleAuthorize(AccessLevel = SecurityAccessLevel.Edit)]
    // [ValidateAntiForgeryToken]
    // public void Complete(int id)
    // {
    //     var editSet = new Dictionary<string, object>();
    //     editSet.Add("Status", "Completed");
    //     App.Data.Update(id, editSet);
    // }

    // [HttpDelete]
    // [DnnModuleAuthorize(AccessLevel = SecurityAccessLevel.Edit)]
    // [ValidateAntiForgeryToken]
    // public void Delete(int id)
    // {
    //     App.Data.Delete(id);
    // }
}