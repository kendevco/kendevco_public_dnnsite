<%@ Control Language="vb" AutoEventWireup="false" Explicit="True" Inherits="DotNetNuke.UI.Skins.Skin" %>
<%@ Register TagPrefix="ctl" TagName="Footer" Src="controls/Footer.ascx" %>
<%@ Register TagPrefix="ctl" TagName="Header" Src="controls/Header.ascx" %>
<%@ Register TagPrefix="dnn" TagName="BREADCRUMB" Src="~/Admin/Skins/BreadCrumb.ascx" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.UI.Skins" Assembly="DotNetNuke" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.Client.ClientResourceManagement" Assembly="DotNetNuke.Web.Client" %>
<%@ Register Src="controls/ChildPageList.ascx" TagPrefix="ctl" TagName="ChildPageList" %>
<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet">

<!--[if lt IE 9]>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js"></script>
<![endif]-->

<div id="siteWrapper" class="landing-page <%=PortalSettings.ActiveTab.TabName %>">

	<div class="site-banner-container"><div id="SiteBanner" class="container" runat="server"></div></div>
	<div id="VideoBanner" runat="server"></div>
	<div class="text-banner-container"><div id="TextBanner" class="container" runat="server"></div></div>
  <div class="main-content-container"><div id="ContentPane" class="container" runat="server"></div></div>
	<div class="content-sidebar-container"><div id="ContentSidebar" class="container" runat="server"></div></div>
	<div class="find-doctor-container"><div id="FindDoctorBanner" class="container" runat="server"></div></div>
	<div class="website-banner-container"><div id="WebsiteBanner" class="container" runat="server"></div></div>

<!-- Footer -->
    <ctl:Footer ID="ucFooter" runat="server" />

</div>
<!-- /.SiteWrapper -->

<%-- CSS & JS includes --%>
<%@ Register TagPrefix="dnn" TagName="jQuery" src="~/Admin/Skins/jQuery.ascx" %>
<dnn:jQuery runat="server"></dnn:jQuery>

<dnn:DnnCssInclude ID="DnnCssInclude1" runat="server" FilePath="css/bootstrap.css" PathNameAlias="SkinPath" Priority="18" />
<dnn:DnnCssInclude ID="DnnCssInclude2" runat="server" FilePath="css/bootstrap-theme.css" PathNameAlias="SkinPath" Priority="19"  />
<dnn:DnnCssInclude ID="DnnCssInclude3" runat="server" FilePath="css/all.css" PathNameAlias="SkinPath" Priority="20"  />
<dnn:DnnCssInclude ID="DnnCssInclude4" runat="server" FilePath="css/desktop.css" PathNameAlias="SkinPath" Priority="21"  />
<dnn:DnnCssInclude ID="DnnCssInclude5" runat="server" FilePath="css/tablet.css" PathNameAlias="SkinPath" Priority="22"  />
<dnn:DnnCssInclude ID="DnnCssInclude6" runat="server" FilePath="css/mobile.css" PathNameAlias="SkinPath" Priority="23"  />
<dnn:DnnJsInclude ID="DnnJsInclude1" runat="server" FilePath="js/bootstrap.js" PathNameAlias="SkinPath" Priority="25"  />
<dnn:DnnJsInclude ID="DnnJsInclude4" runat="server" FilePath="js/textsizer.js" PathNameAlias="SkinPath" Priority="27"   />
<dnn:DnnJsInclude ID="DnnJsInclude5" runat="server" FilePath="js/print.js" PathNameAlias="SkinPath" Priority="28"   />
<dnn:DnnJsInclude ID="DnnJsInclude3" runat="server" FilePath="js/global.js" PathNameAlias="SkinPath" Priority="29"  />
<dnn:DnnCssInclude ID="DnnCssInclude7" runat="server" FilePath="js/fancybox/jquery.fancybox.css" PathNameAlias="SkinPath" Priority="24"  />
<dnn:DnnJsInclude ID="DnnJsInclude2" runat="server" FilePath="js/fancybox/jquery.fancybox.min.js" PathNameAlias="SkinPath" Priority="5"  />
<dnn:DnnJsInclude ID="landingpageJSinclude" runat="server" FilePath="js/landingpage.js" PathNameAlias="SkinPath" Priority="5"  />
