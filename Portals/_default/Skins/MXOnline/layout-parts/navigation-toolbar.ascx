<!--#include file="registers.ascx" -->

<nav>
    <div class="bg-primary text-right p-2">
        <% If Request.IsAuthenticated Then  %>
            <dnn:User id="dnnUser" CssClass="small text-light mr-1" runat="server" />
            <span class="small text-light mr-1">|</span>
        <% End If %>
        <dnn:Login ID="dnnLogin" LegacyMode="false" CssClass="small text-light mr-1" runat="server" />
        <% If Not Request.IsAuthenticated Then  %>
            <span class="small text-light mr-1">|</span>
            <dnn:User id="dnnNewUser" CssClass="small text-light mr-2" runat="server" />
        <% End If %>
        <a href="javascript: navigationSearch();" class="mr-4"><i class="fas fa-search text-light"></i></a>
    </div>
    <div class="navbar navbar-expand-lg navbar-light bg-light bg-gradient">
        <div class="navbar-brand site-logo">
      	    <dnn:Logo ID="dnnLogo" runat="server" />
        </div>
	    <div class="d-block d-lg-none text-right" style="flex-grow: 1;">
            <asp:Label ID="lblShoppingCartSummaryMobile" runat="server" />
  	    </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <dnn:Menu MenuStyle="navs/main" NodeSelector="RootOnly" runat="server" />
            <% If Request.IsAuthenticated Then  %>
                <div class="d-none d-lg-block">
                    <mx:ShoppingCartSummary ID="mxShoppingCartSummary" CssClass="d-none d-lg-block" runat="server" />
                </div>
            <% End If %>
        </div>
    </div>
</nav> 

<script>
    <% If Not String.IsNullOrEmpty(ConfigurationManager.AppSettings("Protech.Themes.MXOnline.LogoLinkUrl")) Then  %>
        $("#<%= dnnLogo.ClientID %>_hypLogo").attr("href", "<%= ConfigurationManager.AppSettings("Protech.Themes.MXOnline.LogoLinkUrl") %>");
    <% End If %>

    $("#<%= dnnLogin.ClientID %>_loginGroup").addClass("d-inline");
    
    <% If Not Request.IsAuthenticated Then  %>
        $("#<%= dnnLogin.ClientID %>_enhancedLoginLink").removeAttr("onclick");
    <% Else %>
        $("#<%= dnnLogin.ClientID %>_enhancedLoginLink").attr("href", "/Portals/_default/Skins/MXOnline/pages/SignOut.aspx");
        if ($(".mx-icon-panel")[0]) $("#<%= lblShoppingCartSummaryMobile.ClientID %>").html("<div class='mx mx-wrapper mx-shoppingcart-summary-wrapper d-inline-block'>" + $(".mx-icon-panel")[0].outerHTML + "</div>");
        $("#<%= dnnUser.ClientID %>_registerLink").prepend("<i class='fas fa-user'></i>&nbsp;");
    <% End If %>

    function navigationSearch() {
        window.location.href = "<%= DotNetNuke.Common.Globals.NavigateURL(PortalSettings.Current.SearchTabId) %>?Search=";
    }
</script>