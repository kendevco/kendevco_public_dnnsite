using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using DotNetNuke.Common;
using DotNetNuke.Entities.Modules;
using DotNetNuke.Entities.Tabs;
using DotNetNuke.Services.FileSystem;

public partial class Portals_0_Skins_BJH_controls_ChildPageList : PortalModuleBase //System.Web.UI.UserControl
{
    private List<int> lstTabIdPath = new List<int>();

    public int TopLevel
    {
        get
        {
            if (ViewState["TopLevel"] == null)
                return 1;
            return Convert.ToInt16(ViewState["TopLevel"]);
        }
        set { ViewState["TopLevel"] = value; }
    }

    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            LoadChildPageList();
        }
    }

    private void LoadChildPageList()
    {
        var tabController = new TabController();
        var topLevelTab = PortalSettings.ActiveTab;
        lstTabIdPath.Add(topLevelTab.TabID);

        while (topLevelTab.Level >= TopLevel)
        {
            topLevelTab = tabController.GetTab(topLevelTab.ParentId, PortalSettings.PortalId, false);
            lstTabIdPath.Add(topLevelTab.TabID);
        }

        lnkTop.Text = topLevelTab.TabName;
        lnkTop.NavigateUrl = Globals.NavigateURL(topLevelTab.TabID);

        ltrChildPageList.Text = LoadChildPages(topLevelTab);
    }

    string LoadChildPages(TabInfo topLevelTab)
    {
        if (!topLevelTab.HasChildren)
            return "";

        var html = new StringBuilder();
        html.AppendLine("<div class='subNavLeftMenu'>");
        html.AppendLine("<ul>");
        var children = TabController.GetTabsByParent(topLevelTab.TabID, PortalSettings.PortalId);
        foreach (var subTab in children)
        {
            BuildPageLink(html, subTab, 1, 0);
        }
        html.AppendLine("</ul>");
        html.AppendLine("</div>");

        return html.ToString();
    }

    private void BuildPageLink(StringBuilder htmlBuilder, TabInfo tab, int level, int parentId)
    {
        if (!tab.IsVisible || tab.IsDeleted)
            return;

        switch (tab.TabType)
        {
            case TabType.Normal:
                CreateLink(htmlBuilder, tab, level, parentId, Globals.NavigateURL(tab.TabID), "");
                break;

            case TabType.Url:
                CreateLink(htmlBuilder, tab, level, parentId, tab.Url, "_blank");
                break;

            case TabType.Tab:
                CreateLink(htmlBuilder, tab, level, parentId, Globals.NavigateURL(Convert.ToInt32(tab.Url)), "");
                break;

            case TabType.File:
                CreateLink(htmlBuilder, tab, level, parentId, GetFilePath(tab.Url, PortalId), "");
                break;
        }

        //if (tab.TabID == 435 || tab.TabID == 436)
        //{
        //    string a = "";
        //    a = "";
        //

        var children = TabController.GetTabsByParent(tab.TabID, PortalSettings.PortalId);
        foreach (var subTab in children)
        {
            BuildPageLink(htmlBuilder, subTab, level + 1, tab.TabID);
        }
    }

    private void CreateLink(StringBuilder htmlBuilder, TabInfo tab, int level, int parentId, string tabUrl, string target)
    {
        if (tab.DisableLink)
        {
            htmlBuilder.AppendFormat("<li class='menuLevel{0} {1}' tabid='{2}' parenttabid='{3}'><a href='#' onclick='return false;' class='inactiveLink'>{4}</a>{5}</li>",
                    level, GetExtraCssClass(tab), tab.TabID, parentId, tab.TabName, GetExpandIcon(tab));

            return;
        }

        htmlBuilder.AppendFormat("<li class='menuLevel{0} {1}' tabid='{2}' parenttabid='{3}'><a href='{4}' target='{5}'>{6}</a>{7}</li>",
                    level, GetExtraCssClass(tab), tab.TabID, parentId, tabUrl, target, tab.TabName, GetExpandIcon(tab));
    }

    /// <summary>
    /// 
    /// </summary>
    /// <param name="fileid">File ID is in this format: "FileID=161" taken from tab.Url property</param>
    /// <param name="portalID"></param>
    /// <returns></returns>
    private string GetFilePath(string fileid, int portalID)
    {
        if (fileid == null)
            return "";
        if (fileid.Length < 8)
            return "";
        var fileController = new FileManager();
        int fileId = Convert.ToInt32(fileid.Substring(7));
        if (fileId == 0)
            return "";
        var fi = fileController.GetFile(fileId);

        return PortalSettings.HomeDirectory + fi.Folder + fi.FileName;
    }

    private string GetExtraCssClass(TabInfo tab)
    {
        var css = new StringBuilder();

        if (tab.HasChildren)
            css.Append(" hasChild");

        if (tab.TabID == PortalSettings.ActiveTab.TabID)
            css.Append(" selected");
       
        return css.ToString();
    }

    private string GetExpandIcon(TabInfo tab)
    {
        if (tab.HasChildren)
            return String.Format("<span class='blue {0}'>&nbsp;</span>", "expanded plusSign"); 

        return "";
    }
}