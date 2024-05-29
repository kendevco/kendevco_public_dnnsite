using DotNetNuke.Entities.Tabs;
using DotNetNuke.Framework.JavaScriptLibraries;
using DotNetNuke.UI.Skins;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Website;

public partial class Portals_0_Skins_Website_Controls_Header : SkinObjectBase
{
    public class PageList
    {
        public int TabId { get; set; }
        public string TabName { get; set; }
        public string PermanentRedirect { get; set; }
        public string Url { get; set; }
    }

    protected string SkinPath
    {
        get
        {
            return PortalSettings.HomeDirectory + "Skins/Foundation/";
        }
    }

    public DataTable ListTabs
    {
        get
        {
            var obj = ViewState["ListTabs"];
            if (obj == null)
                return null;
            return (DataTable)obj;
        }
        set
        {
            ViewState["ListTabs"] = value;
        }
    }

    protected string RootTabName
    {
        get
        {
            TabInfo tabInfo = (TabInfo)PortalSettings.ActiveTab.BreadCrumbs[0];
            return tabInfo.TabPath.ToLower().Replace("//", "");
        }
    }
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            JavaScript.RequestRegistration(CommonJs.jQuery);
            JavaScript.RequestRegistration(CommonJs.jQueryUI);

            Level1TabID = GetLevel1ActiveTab().TabID;

            string tabIds = "88,98,100,180,181"; // giving: 296
            ListTabs = DB.GetTableFormat("select TabID, TabName, ParentId, PermanentRedirect, Url from [Tabs] where IsVisible = 1 and IsDeleted = 0 and ParentId in ({0}) order by PermanentRedirect, TabName", tabIds);
        }
    }

    public string NavClass(int tabId)
    {
        if (ListTabs.Select("ParentId = " + tabId).Length > 0)
            return "navdrop";
        return "navlink";
    }

    protected string GetTabSelectedCssClass(int tabID)
    {
        return (tabID == Level1TabID) ? "selected" : "";
    }

    private TabInfo GetLevel1ActiveTab()
    {
        var tab = PortalSettings.ActiveTab;
        TabController controller = new TabController();
        while (tab.Level > 0)
        {
            tab = controller.GetTab(tab.ParentId, PortalSettings.PortalId, false);
        }
        return tab;
    }

    public int Level1TabID
    {
        get { return Convert.ToInt32(ViewState["Level1TabID"]); }
        set { ViewState["Level1TabID"] = value; }
    }

    public string GetPageUrl(PageList page)
    {
        if (page.PermanentRedirect.ToLower() == "true")
            return page.Url.Contains("http://") ? page.Url : "http://" + page.Url;

        return DotNetNuke.Common.Globals.NavigateURL(Convert.ToInt32(page.TabId));
    }

    public List<TabInfo> GetChildTabs(int parId)
    {
        List<TabInfo> tabs = TabController.GetTabsByParent(parId, 0).Where(tab => tab.IsVisible && !tab.IsDeleted)
            .ToList();
        return tabs;
    }

    public string LoadSubPages(int pageId)
    {
        var pages = GetChildTabs(pageId);

        if (pages.Count == 0)
            return "";

        int numberOfColums = 3;
        StringBuilder str = new StringBuilder();

        str.Append("<div class='dropBox'><div class='row'>");

        var total = pages.Count;
        var listPage1 = new List<TabInfo>();
        var listPage2 = new List<TabInfo>();
        var listPage3 = new List<TabInfo>();
        var i = 0;
        foreach (var page in pages)
        {
            var list = listPage1;
            if (i % numberOfColums == 1)
                list = listPage2;
            else if (i % numberOfColums == 2)
                list = listPage3;

            list.Add(page);

            i++;
        }

        str.Append(BuildColumnPagesList(listPage1));
        str.Append(BuildColumnPagesList(listPage2));
        str.Append(BuildColumnPagesList(listPage3));

        str.Append("</div></div>");

        return str.ToString();
    }

    public string BuildColumnPagesList(List<TabInfo> listPages)
    {
        var str = new StringBuilder();
        str.Append("<div class='col-md-4 col-sm-4'><ul>");
        foreach (var tab in listPages)
        {
            str.AppendFormat("<li class='line'><a href='{0}'><h4>{1}</h4></a></li>", DotNetNuke.Common.Globals.NavigateURL(tab.TabID), tab.TabName);
        }
        str.Append("</ul></div>");
        return str.ToString();
    }

    public string LoadPages(int tabId)
    {
        DataRow[] dr = ListTabs.Select("ParentId = " + tabId);

        if (dr.Length == 0)
            return "";

        int numberOfColums = 3;
        StringBuilder str = new StringBuilder();

        str.Append("<div class='dropBox'><div class='row'>");

        var total = dr.Length;
        var pages = total;

        var listPage1 = new List<PageList>();
        var listPage2 = new List<PageList>();
        var listPage3 = new List<PageList>();
        var listPage4 = new List<PageList>();

        int steps = pages / 4;
        int step1 = steps;
        int step2 = steps;
        int step3 = steps;
        int step4 = steps;
        int morePages = pages % 4;

        for (int k = 0; k < morePages; k++)
        {
            if (k == 0)
                step1 += 1;
            if (k == 1)
                step2 += 1;
            if (k == 2)
                step3 += 1;
        }
        //if ((steps < 4 && morePages == 0) || steps == 0)
        if (steps == 0 && morePages != 0)
            numberOfColums = 4;

        for (int i = 0; i < total; i++)
        {
            if (i < step1)
            {
                listPage1.Add(new PageList
                {
                    TabId = Convert.ToInt32(dr[i]["TabId"]),
                    TabName = dr[i]["TabName"].ToString(),
                    PermanentRedirect = dr[i]["PermanentRedirect"].ToString(),
                    Url = dr[i]["Url"].ToString()
                });
            }
            else if (i < step2 + step1)
            {
                listPage2.Add(new PageList
                {
                    TabId = Convert.ToInt32(dr[i]["TabId"]),
                    TabName = dr[i]["TabName"].ToString(),
                    PermanentRedirect = dr[i]["PermanentRedirect"].ToString(),
                    Url = dr[i]["Url"].ToString()
                });
            }
            else if (i < step3 + (step1 + step2))
            {
                listPage3.Add(new PageList
                {
                    TabId = Convert.ToInt32(dr[i]["TabId"]),
                    TabName = dr[i]["TabName"].ToString(),
                    PermanentRedirect = dr[i]["PermanentRedirect"].ToString(),
                    Url = dr[i]["Url"].ToString()
                });
            }
            else if (i < step4 + (step3 + (step2 + step1)) + morePages)
            {
                listPage4.Add(new PageList
                {
                    TabId = Convert.ToInt32(dr[i]["TabId"]),
                    TabName = dr[i]["TabName"].ToString(),
                    PermanentRedirect = dr[i]["PermanentRedirect"].ToString(),
                    Url = dr[i]["Url"].ToString()
                });
            }
        }
        str.Append(BuildColSection(listPage1, numberOfColums));
        str.Append(BuildColSection(listPage2, numberOfColums));
        str.Append(BuildColSection(listPage3, numberOfColums));
        str.Append(BuildColSection(listPage4, numberOfColums));

        str.Append("</div></div>");

        return str.ToString();
    }

    public DataRow GetDataRow(DataRow dr, DataRow newRow)
    {
        newRow["TabId"] = dr["TabId"];
        newRow["TabName"] = dr["TabName"];

        return newRow;
    }

    public string LoadSubPages(List<PageList> pages)
    {
        StringBuilder str = new StringBuilder();
        str.Append("<ul>");
        if (pages.Count > 0)
        {
            foreach (var page in pages)
            {
                str.Append(BuildLinkHtml(page));
            }
        }
        str.Append("</ul>");

        return str.ToString();
    }

    public string BuildLinkHtml(PageList page)
    {
        StringBuilder str = new StringBuilder();

        string classPermanentRedirect = string.Empty;
        string target = "_self";
        if (page.PermanentRedirect.ToLower() == "true")
        {
            classPermanentRedirect = "blue-url";
            target = "_blank";
        }
        str.AppendFormat("<li class='line {0}'><a href='{1}' target='{2}'><h4>{3}</h4></a>", classPermanentRedirect, GetPageUrl(page), target, page.TabName);

        if (ConfigurationManager.AppSettings["DisableNavSubPage"] == "false")
        {
            str.Append(BuildSubSubPage(page.TabId.ToString()));
        }
        str.Append("</li>");

        return str.ToString();
    }

    public string BuildSubLinkHtml(PageList page)
    {
        StringBuilder str = new StringBuilder();
        str.AppendFormat("<li><a href='{0}'>{1}</a></li>", GetPageUrl(page), page.TabName);
        return str.ToString();
    }

    public string BuildColSection(List<PageList> pages, int numberOfColums)
    {
        if (pages.Count == 0)
            return "";

        StringBuilder str = new StringBuilder();
        str.AppendFormat("<div class='col-md-{0} col-sm-{0}'>", numberOfColums);
        str.Append(LoadSubPages(pages));
        str.Append("</div>");

        return str.ToString();
    }

    public string BuildSubSubPage(string tabId)
    {
        var listTabs = DB.GetTableFormat("select TabID, TabName, ParentId from [Tabs] where IsVisible = 1 and IsDeleted = 0 and ParentId = {0}", tabId);

        if (listTabs.Rows.Count == 0)
            return "";

        StringBuilder str = new StringBuilder();

        str.Append("<ul class='dropBoxLevel2'>");

        foreach (DataRow tab in listTabs.Rows)
        {
            var page = new PageList
                {
                    TabId = Convert.ToInt32(tab["TabId"]),
                    TabName = tab["TabName"].ToString(),
                    PermanentRedirect = tab["PermanentRedirect"].ToString(),
                    Url = tab["Url"].ToString()
                };
            str.Append(BuildSubLinkHtml(page));
        }

        str.Append("</ul>");

        return str.ToString();
    }
}