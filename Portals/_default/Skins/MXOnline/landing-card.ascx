<%@ Control Language="vb" AutoEventWireup="false" Explicit="True" Inherits="DotNetNuke.UI.Skins.Skin" %>
<!--#include file="layout-parts/registers.ascx" -->

<!--#include file="layout-parts/includes-top.ascx" -->

<!-- Header -->
<!--#include file="layout-parts/header.ascx" -->

<!-- Page Content -->
<main role="main">
    <dnn:Menu MenuStyle="navs/sub" NodeSelector="RootChildren" Visible='<%# PortalSettings.ActiveTab.Level = 1 And TabController.GetTabsByParent(PortalSettings.ActiveTab.ParentId, PortalSettings.ActiveTab.PortalID).Any(Function(x) Not x.IsDeleted And x.SkinSrc.Contains("subnav")) %>' runat="server" />
    <div class="container">
        <!--#include file="layout-parts/page-description.ascx" -->
        <dnn:Menu MenuStyle="navs/card" NodeSelector="CurrentChildren" runat="server" />
        <br />
        <div id="ContentPane" runat="server"></div>
    </div>
</main>

<!-- Footer -->
<!--#include file="layout-parts/footer.ascx" -->

<!--#include file="layout-parts/includes-bottom.ascx" -->
