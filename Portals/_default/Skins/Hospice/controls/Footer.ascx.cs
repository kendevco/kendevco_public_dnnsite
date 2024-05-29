using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using DotNetNuke.UI.Skins;

namespace BJC.Skin.controls
{
    public partial class Footer : SkinObjectBase
    {
        protected string SkinPath
        {
            get
            {
                return PortalSettings.HomeDirectory + "Skins/Hospice/";
            }
        }

        protected void Page_Load(object sender, EventArgs e)
        {

        }
    }
}