<%@ Control language="C#" AutoEventWireup="false" Explicit="True" Inherits="DotNetNuke.UI.Skins.Skin" %>
<%@ Register TagPrefix="dnn" TagName="BREADCRUMB" Src="~/Admin/Skins/breadcrumb.ascx" %>
<%@ Register TagPrefix="dnn" TagName="COPYRIGHT" Src="~/Admin/Skins/Copyright.ascx" %>
<%@ Register TagPrefix="dnn" TagName="JQUERY" Src="~/Admin/Skins/jQuery.ascx" %>
<%@ Register TagPrefix="dnn" TagName="META" Src="~/Admin/Skins/Meta.ascx" %>
<%@ Register TagPrefix="dnn" TagName="MENU" Src="~/DesktopModules/DDRMenu/Menu.ascx" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.Client.ClientResourceManagement" Assembly="DotNetNuke.Web.Client" %>

<dnn:Meta ID="META" runat="server" Name="viewport" Content="width=device-width,initial-scale=1" />
<dnn:DnnCssInclude ID="skinCSS" runat="server" FilePath="semantic/dist/semantic.min.css" PathNameAlias="SkinPath" Priority="9" />
<dnn:DnnCssInclude ID="vendorCSS" runat="server" FilePath="dist/vendor.css" PathNameAlias="SkinPath" Priority="8" />
<dnn:DnnCssInclude ID="webFontCSS" runat="server" FilePath="css/MyFontsWebfontsKit.css" PathNameAlias="SkinPath" Priority="7" />

<dnn:DnnCssInclude ID="OpenSans" runat="server" FilePath="https://fonts.googleapis.com/css?family=Open+Sans:400,700" PathNameAlias="" Priority="7" />

<dnn:DnnCssInclude ID="Materialize" runat="server" FilePath="https://fonts.googleapis.com/icon?family=Material+Icons" PathNameAlias="" Priority="7" />

<%--Remove the default DNN stylesheet. Currently, this breaks the login form styling. --%>
<%--<dnn:DnnCssExclude runat="server" Name="dnndefault" />--%>

<dnn:DnnJsInclude runat="server" FilePath="dist/scripts.min.js" PathNameAlias="SkinPath" ForceProvider="DnnFormBottomProvider" />

<dnn:DnnJsInclude runat="server" FilePath="google-tag-manager.js" PathNameAlias="SkinPath" Priority="1" />

<!--[if lt IE 9]>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js"></script>
<![endif]-->

<!-- FontAwesome CDN -->
<script defer src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"></script>

<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N6CXZ43" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

<!-- Keeping Yourself Safe Bar -->
<div id="coronavirus-bar"><a href="https://www.bjc.org/coronavirus" target="_blank">CORONAVIRUS (COVID-19):  CHECK HERE FOR UPDATES AND A FREE RISK SCREENING ></a></div>

<style>
#coronavirus-bar {
    background-color: #6607d1;
    padding: 18px 10px 17px;
    text-align: center;
} 

#coronavirus-bar a {
    color: #fff;
    font-size: 23px;
    text-decoration: none !important;
    font-weight: bold;
}
</style>


<div class="ui menu secondary-header-bar">
  <div class="ui container">
    <dnn:MENU ID="UTILITY" MenuStyle="Menus/UtilityMenu" runat="server" NodeSelector="*" IncludeNodes="79,80,81"></dnn:MENU>
  </div>
</div>

<div class="ui container">
    <div class="ui relaxed grid header-wrapper">
        <div class="logo six wide column"><%--<%=PortalSettings.PortalName %>--%>
          <a href="/">
            <img src="<%=SkinPath %>/images/logos/FBJH_25yr_anniversary_logo.svg" />
          </a> 
        </div>

        <div class="nine wide column">
            <div class="ui secondary menu main">
              <%--Excludes the root nodes for the utility and footer menus--%>  
              <dnn:MENU ID="MENU" MenuStyle="Menus/MainMenu" runat="server" NodeSelector="*" ExcludeNodes="41,78,79,80,81,82,83"></dnn:MENU>
            </div>
        </div>

        <a href="/how-to-give/give-now" class="ui circular segment give-now compact">
            <h2 class="ui header">Give Now</h2>
        </a>
    </div>

  <div class="mobile-header-wrapper">
    <a href="/"><img class="mobile-logo" src="<%=SkinPath %>/images/logos/FBJH_25yr_anniversary_logo.svg" /></a>
    <a id="mobile-menu"><i class="material-icons">menu</i></i></a>
  </div>
</div>

<!-- ///////// MOBILE MENU ///////// -->
<div id="sidr" style="display: none">
  <a class="close-menu"><i class="material-icons">close</i></a>
  <dnn:MENU ID="MOBILE" MenuStyle="Menus/MobileMenu" runat="server" NodeSelector="*" ExcludeNodes="41"></dnn:MENU>
</div>
<!-- End Mobile Menu -->
