<script runat="server">
    Protected Sub Page_Load_Footer(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        Me.plhFooter.Controls.Add(LoadControl(PortalSettings.ActiveTab.SkinPath + "layout-parts/" + IIf(Not String.IsNullOrEmpty(ConfigurationManager.AppSettings("Protech.Themes.MXOnline.Footer")), ConfigurationManager.AppSettings("Protech.Themes.MXOnline.Footer"), "footer-default.ascx")))
    End Sub
</script>
<asp:PlaceHolder ID="plhFooter" runat="server"></asp:PlaceHolder>

<% If ConfigurationManager.AppSettings("Protech.Themes.MXOnline.GDPREnabled") = "true" Then %>
<div id="gdpr" class="alert alert-warning alert-dismissible fade show fixed-bottom rounded-0 mb-0" style="display: none;" role="alert">
  We use cookies on this site to optimize site functionality and ensure you get the best possible experience. If you would like to disable cookies on this device, please review the section on 'Managing cookies' in our privacy policy.
  <a href="/Privacy" class="alert-link">View our Privacy Policy</a>
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
<script>
    if (!sessionStorage.getItem('gdpr.clicked'))
        $('#gdpr').show();

    $('#gdpr').on('closed.bs.alert', function () {
        sessionStorage.setItem('gdpr.clicked', 1);
    })
</script>
<% End If %>