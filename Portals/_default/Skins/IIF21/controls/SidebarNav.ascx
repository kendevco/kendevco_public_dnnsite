<%@ Control Language="C#" AutoEventWireup="false" Inherits="DotNetNuke.UI.Skins.Skin" %>
<%@ Import Namespace="TabInfo=DotNetNuke.Entities.Tabs.TabInfo" %>
<%@ Import Namespace="DotNetNuke.Security.Permissions" %>
<%@ Register TagPrefix="dnn" TagName="MENU" src="~/DesktopModules/DDRMenu/Menu.ascx" %>

<%-- script to see if current page has children --%>
<script runat="server">
    private static TabInfo GetRootTab(TabInfo tab) {
        if (tab.ParentId == Null.NullInteger) {
            return tab;
        }
        return GetRootTab(new TabController().GetTab(tab.ParentId, tab.PortalID, false));
    }
    private static bool HasChildrenInMenu(TabInfo tab) {
        return tab.HasChildren && TabController.GetTabsByParent(tab.TabID, tab.PortalID).Any(t => t.IsVisible && !t.IsDeleted && TabPermissionController.CanViewPage(t));
    }
</script>
<%-- set interior nav level based on whether or not current page has children --%>
<% if (HasChildrenInMenu(this.PortalSettings.ActiveTab)) { %>
    <dnn:MENU runat="server" MenuStyle="menus/nav" NodeSelector="0, 0, 0" IncludeHidden="true" />
<% } else { %>
    <dnn:MENU runat="server" MenuStyle="menus/nav" NodeSelector="-1, 0, 0" IncludeHidden="true" />
<% } %>