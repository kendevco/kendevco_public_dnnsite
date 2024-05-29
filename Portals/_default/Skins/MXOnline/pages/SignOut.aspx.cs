using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

using Protech.MX.Base;

namespace Protech.MX.Integration.DotNetNuke.Pages
{
    public partial class SignOut : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            // Deauthenticate the user
            MXAuthentication.SignOut();

            string returnUrl = Server.UrlDecode(Convert.ToString(Request.QueryString["returnurl"]));

            if (!string.IsNullOrEmpty(returnUrl))
            {
                base.Response.Redirect(returnUrl);
            }
            else
            {
                // Redirect to the home page
                base.Response.Redirect("/");
            }
        }
    }
}