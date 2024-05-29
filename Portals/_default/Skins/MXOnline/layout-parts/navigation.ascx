<script runat="server">
    Protected Sub Page_Load_Navigation(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        Me.plhNavigation.Controls.Add(LoadControl(PortalSettings.ActiveTab.SkinPath + "layout-parts\" + IIf(Not String.IsNullOrEmpty(ConfigurationManager.AppSettings("Protech.Themes.MXOnline.Navigation")), ConfigurationManager.AppSettings("Protech.Themes.MXOnline.Navigation"), "navigation-default.ascx")))
    End Sub
</script>
<asp:PlaceHolder ID="plhNavigation" runat="server"></asp:PlaceHolder>