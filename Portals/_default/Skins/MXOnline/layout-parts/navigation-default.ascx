<!--#include file="registers.ascx" -->

<nav class="navbar navbar-expand-lg navbar-light bg-light bg-gradient">
    <div class="navbar-brand site-logo">
      	<dnn:Logo ID="dnnLogo" runat="server" />
    </div>
  	<div class="d-block d-lg-none text-right" style="flex-grow: 1;">
  		<a href="javascript: navigationSearch();"><i class="fas fa-search fa-lg"></i></a>&nbsp;
        <dnn:Login ID="dnnLoginMobile" LegacyMode="false" runat="server" />
  	</div>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="ml-0 mr-auto">
            <dnn:Menu MenuStyle="navs/main" NodeSelector="RootOnly" runat="server" />
        </div>
    	<div class="form-inline my-2 my-lg-0 d-none d-lg-block">
      		<div class="input-group mr-3">
                <input id="txtNavigationSearch" type="text" maxlength="255" size="20" class="form-control" aria-label="Search" autocomplete="off" placeholder="Search...">
				<div class="input-group-append" >
					<button class="btn btn-primary" onclick="javascript: navigationSearch(); return false;">
						<i class="fas fa-search"></i>
					</button>
				</div>
			</div>
    	</div>
        <% If Request.IsAuthenticated Then  %>
            <dnn:User id="dnnUser" CssClass="d-none d-lg-block" runat="server" />
            <div class="d-none d-lg-block">
                <mx:ShoppingCartSummary ID="mxShoppingCartSummary" runat="server" />
            </div>
        <% End If %>
        <dnn:Login ID="dnnLogin" LegacyMode="false" CssClass="d-none d-lg-block" runat="server" />
    </div>
</nav> 

<script>
    <% If Not String.IsNullOrEmpty(ConfigurationManager.AppSettings("Protech.Themes.MXOnline.LogoLinkUrl")) Then  %>
        $("#<%= dnnLogo.ClientID %>_hypLogo").attr("href", "<%= ConfigurationManager.AppSettings("Protech.Themes.MXOnline.LogoLinkUrl") %>");
    <% End If %>

    $("#<%= dnnLoginMobile.ClientID %>_loginGroup").addClass("d-inline");
    $("#<%= dnnLoginMobile.ClientID %>_enhancedLoginLink").html("<i class='fas fa-user fa-lg'></i>");
    
    <% If Not Request.IsAuthenticated Then  %>
        $("#<%= dnnLogin.ClientID %>_enhancedLoginLink").prepend("<i class='fas fa-user'></i>&nbsp;");
        $("#<%= dnnLogin.ClientID %>_enhancedLoginLink").removeAttr("onclick");
        $("#<%= dnnLoginMobile.ClientID %>_enhancedLoginLink").removeAttr("onclick");
    <% Else %>
        $("#<%= dnnLogin.ClientID %>_enhancedLoginLink").attr("href", "/Portals/_default/Skins/MXOnline/pages/SignOut.aspx");
        $("#<%= dnnLoginMobile.ClientID %>_enhancedLoginLink").attr("tabindex", "0");
        $("#<%= dnnLoginMobile.ClientID %>_enhancedLoginLink").attr("role", "button");
        $("#<%= dnnLoginMobile.ClientID %>_enhancedLoginLink").attr("title", "");
        $("#<%= dnnLoginMobile.ClientID %>_enhancedLoginLink").removeAttr("href");
        $("#<%= dnnLoginMobile.ClientID %>_enhancedLoginLink").attr("data-container", "body");
        $("#<%= dnnLoginMobile.ClientID %>_enhancedLoginLink").attr("data-toggle", "popover");
        $("#<%= dnnLoginMobile.ClientID %>_enhancedLoginLink").attr("data-trigger", "focus");
        $("#<%= dnnLoginMobile.ClientID %>_enhancedLoginLink").attr("data-placement", "bottom");
        $("#<%= dnnLoginMobile.ClientID %>_enhancedLoginLink").attr("data-content", $("#<%= dnnUser.ClientID %>_registerLink").html() + "<br /><small>" + $("#<%= dnnUser.ClientID %>_registerLink").clone().html($("#<%= dnnUser.ClientID %>_registerLink").attr("title")).removeAttr("class")[0].outerHTML + "<br /><br />" + $("#<%= dnnLogin.ClientID %>_enhancedLoginLink").clone().removeAttr("class")[0].outerHTML + "</small>");
        $("#<%= dnnLoginMobile.ClientID %>_enhancedLoginLink").attr("data-html", "true");
        if ($(".mx-icon-panel")[0]) $("#<%= dnnLoginMobile.ClientID %>_loginGroup").after("<div class='mx mx-wrapper mx-shoppingcart-summary-wrapper d-inline-block'>" + $(".mx-icon-panel")[0].outerHTML + "</div>");
        $(function () { $('[data-toggle="popover"]').popover() });
        $("#<%= dnnUser.ClientID %>_registerLink").prepend("<i class='fas fa-user'></i>&nbsp;");
        $("#<%= dnnLogin.ClientID %>_enhancedLoginLink").prepend("&nbsp;|&nbsp;");
    <% End If %>

    document.getElementById('txtNavigationSearch').onkeypress = function (e) {
        if (!e) e = window.event;
        var keyCode = e.keyCode || e.which;
        if (keyCode == '13') {
            navigationSearch();
            return false;
        }
    }

    function navigationSearch() {
        window.location.href = "<%= DotNetNuke.Common.Globals.NavigateURL(PortalSettings.Current.SearchTabId) %>?Search=" + document.getElementById('txtNavigationSearch').value;
    }
</script>