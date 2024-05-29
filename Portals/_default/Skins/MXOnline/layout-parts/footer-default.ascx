<!--#include file="registers.ascx" -->

<footer class="bg-dark pt-2 pb-3" role="contentinfo">
    <div class="container text-center text-light">
        <small>
            <div class="mb-3">
                <a href="https://www.facebook.com/<%= ConfigurationManager.AppSettings("Protech.Themes.MXOnline.FacebookUsername") %>" target="_blank" class="btn btn-secondary btn-circle-sm"><i class="fab fa-facebook-f"></i></a>
                <a href="https://twitter.com/<%= ConfigurationManager.AppSettings("Protech.Themes.MXOnline.TwitterUsername") %>" target="_blank" class="btn btn-secondary btn-circle-sm"><i class="fab fa-twitter"></i></a>
                <a href="https://www.linkedin.com/<%= ConfigurationManager.AppSettings("Protech.Themes.MXOnline.LinkedInUsername") %>" target="_blank" class="btn btn-secondary btn-circle-sm"><i class="fab fa-linkedin-in"></i></a>
            </div>
            <dnn:Copyright ID="dnnCopyright" CssClass="d-block mb-2" runat="server" />
            <dnn:LinkToMobileSite ID="dnnLinkToMobile" CssClass="d-block mb-2" runat="server" />
            <dnn:Terms ID="dnnTerms" runat="server" /> <span class="text-primary">|</span> <dnn:Privacy ID="dnnPrivacy" runat="server" />
        </small>
    </div>
</footer>