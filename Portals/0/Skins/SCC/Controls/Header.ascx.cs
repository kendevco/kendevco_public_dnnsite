using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using DotNetNuke.Entities.Tabs;
using DotNetNuke.UI.Skins;
using DotNetNuke.Framework.JavaScriptLibraries;

public partial class Portals_0_Skins_Website_Controls_Header : SkinObjectBase
{    protected string SkinPath
    {
        get
        {
            return PortalSettings.HomeDirectory + "Skins/SCC/";
        }
    }

    protected string RootTabName
    {
        get
        {
            var tabInfo = (TabInfo)PortalSettings.ActiveTab.BreadCrumbs[0];
            return tabInfo.TabPath.ToLower().Replace("//", "");
        }
    }
    protected void Page_Load(object sender, EventArgs e)
    {
	if (!Page.IsPostBack)
        {
            JavaScript.RequestRegistration(CommonJs.jQuery);
            JavaScript.RequestRegistration(CommonJs.jQueryUI);
        }
    }
}