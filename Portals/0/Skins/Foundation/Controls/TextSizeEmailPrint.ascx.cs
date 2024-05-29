using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using DotNetNuke.UI.Skins;

namespace BJH.Skin.controls
{
    public partial class TextSizeEmailPrint : SkinObjectBase
    {
        protected string SkinPath
        {
            get
            {
                return PortalSettings.HomeDirectory + "Skins/BJH/";
            }
        }

        protected void Page_Load(object sender, EventArgs e)
        {

        }
    }
}