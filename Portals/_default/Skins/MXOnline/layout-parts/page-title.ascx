<script runat="server">
    Dim pageClass As String = ""

    Protected Sub Page_PreRender_PageTitle(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.PreRender
        Dim tabPath As String = PortalSettings.ActiveTab.TabPath.Substring(2) + "//"

        Dim i As Integer = tabPath.IndexOf("//")

        Do While (i <> -1)
            pageClass += " {0}-" + tabPath.Substring(0, i).Replace("//", "-").ToLower()
            i = tabPath.IndexOf("//", (i + 1))
        Loop

        pageClass = pageClass.Substring(1)
    End Sub
</script>

<div class="page-title bg-primary text-light <%= String.Format(pageClass, "page-title") %>">
    <h1><%= IIf(PortalSettings.ActiveTab.SkinSrc.Contains("subnav") Or (PortalSettings.ActiveTab.SkinSrc.Contains("landing") And PortalSettings.ActiveTab.Level = 1 And TabController.GetTabsByParent(PortalSettings.ActiveTab.ParentId, PortalSettings.ActiveTab.PortalID).Any(Function(x) Not x.IsDeleted And x.SkinSrc.Contains("subnav"))), PortalSettings.ActiveTab.BreadCrumbs(0).Title, PortalSettings.ActiveTab.Title) %></h1>
</div>