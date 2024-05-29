<!--#include file="registers.ascx" -->

<footer class="bg-dark pt-2 pb-3" role="contentinfo">
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-4 text-light mb-3 mb-md-0">
                <h5>About Us</h5>
                <hr class="bg-secondary">
                <dnn:Logo ID="dnnLogoFooter" CssClass="site-logo-footer" runat="server" />
                <small class="d-block mt-2">
                    <%= PortalSettings.Current.Description %>
                </small>
            </div>
            <div class="col-12 col-md-4 mb-3 mb-md-0">
                <h5 class="text-light">Site Links</h5>
                <hr class="bg-secondary">
                <dnn:Menu MenuStyle="navs/footer" NodeSelector="RootOnly" runat="server" />
            </div>
            <div class="col-12 col-md-4 text-light">
                <h5>Contact Info</h5>
                <hr class="bg-secondary">
                <small class="d-block mb-3">
                    <%= ConfigurationManager.AppSettings("Protech.Themes.MXOnline.Address") %>
                </small>
                <a href="https://www.facebook.com/<%= ConfigurationManager.AppSettings("Protech.Themes.MXOnline.FacebookUsername") %>" target="_blank" class="btn btn-secondary btn-circle-sm"><i class="fab fa-facebook-f"></i></a>
                <a href="https://twitter.com/<%= ConfigurationManager.AppSettings("Protech.Themes.MXOnline.TwitterUsername") %>" target="_blank" class="btn btn-secondary btn-circle-sm"><i class="fab fa-twitter"></i></a>
                <a href="https://www.linkedin.com/<%= ConfigurationManager.AppSettings("Protech.Themes.MXOnline.LinkedInUsername") %>" target="_blank" class="btn btn-secondary btn-circle-sm"><i class="fab fa-linkedin-in"></i></a>
            </div>
        </div>
        <hr class="bg-secondary">
        <small class="text-light">
            <dnn:Copyright ID="dnnCopyright" CssClass="mr-2" runat="server" />
            <dnn:LinkToMobileSite ID="dnnLinkToMobile" runat="server" />
            <div class="d-block d-md-inline-block">
                <dnn:Terms ID="dnnTerms" runat="server" /> <span class="text-primary">|</span> <dnn:Privacy ID="dnnPrivacy" runat="server" />
            </div>
        </small>
    </div>
</footer>

<script>
    <% If Not String.IsNullOrEmpty(ConfigurationManager.AppSettings("Protech.Themes.MXOnline.LogoLinkUrl")) Then  %>
        $("#<%= dnnLogoFooter.ClientID %>_hypLogo").attr("href", "<%= ConfigurationManager.AppSettings("Protech.Themes.MXOnline.LogoLinkUrl") %>");
    <% End If %>
</script>