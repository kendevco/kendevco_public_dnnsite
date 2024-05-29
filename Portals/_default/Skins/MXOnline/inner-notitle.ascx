<%@ Control Language="vb" AutoEventWireup="false" Explicit="True" Inherits="DotNetNuke.UI.Skins.Skin" %>
<script runat="server">
    Dim pageTitleClass As String = ""

    Protected Sub Page_PreRender_InnerNoTitle(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.PreRender
        Dim tabPath As String = PortalSettings.ActiveTab.TabPath.Substring(2) + "//"

        Dim i As Integer = tabPath.IndexOf("//")

        Do While (i <> -1)
            pageTitleClass += " {0}-" + tabPath.Substring(0, i).Replace("//", "-").ToLower()
            i = tabPath.IndexOf("//", (i + 1))
        Loop

        pageTitleClass = pageTitleClass.Substring(1)
    End Sub
</script>
<!--#include file="layout-parts/registers.ascx" -->

<!--#include file="layout-parts/includes-top.ascx" -->

<!-- Header -->
<header class="header-<%= PortalSettings.ActiveTab.TabPath.Split("//")(2).ToLower() %>" role="banner">
    <!--#include file="layout-parts/navigation.ascx" -->
    <div class="pane-pagetitle <%= String.Format(pageTitleClass, "pane-pagetitle") %>">
        <div id="PageTitle" class="container mt-0" runat="server"></div>
    </div>
</header>

<!-- Page Content -->
<!--#include file="layout-parts/content-areas.ascx" -->

<!-- Footer -->
<!--#include file="layout-parts/footer.ascx" -->

<!--#include file="layout-parts/includes-bottom.ascx" -->
