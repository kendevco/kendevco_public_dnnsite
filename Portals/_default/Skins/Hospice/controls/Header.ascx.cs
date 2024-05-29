using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using DotNetNuke.UI.Skins;
using DotNetNuke.Entities.Tabs;

namespace BJC.Skin.controls
{
    public partial class Header : SkinObjectBase
    {
        protected string SkinPath
        {
            get
            {
                return PortalSettings.HomeDirectory + "Skins/Hospice/";
            }
        }
    }
}