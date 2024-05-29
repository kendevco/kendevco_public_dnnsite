<%@ Control Language="vb" AutoEventWireup="false" Explicit="True" Inherits="DotNetNuke.UI.Skins.Skin" %>
<%@ Register TagPrefix="ctl" TagName="Footer" Src="controls/Footer.ascx" %>
<%@ Register TagPrefix="ctl" TagName="Header" Src="controls/Header.ascx" %>
<%@ Register TagPrefix="dnn" TagName="BREADCRUMB" Src="~/Admin/Skins/BreadCrumb.ascx" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.UI.Skins" Assembly="DotNetNuke" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.Client.ClientResourceManagement" Assembly="DotNetNuke.Web.Client" %>

<div class="push">
    <!-- Header : row1,2,3-->
    <ctl:Header ID="ucHeader" runat="server" />

    <!-- breadcrumb -->
    <div class="container">
        <div class="breadcrumbs">
            <a href="/" class="breadCrumbItem">Home</a>
            <span class="icon-arrow-right-generic"></span>
            <dnn:BREADCRUMB ID="dnnBreadcrumb" runat="server" RootLevel="0" Separator="<span class=&quot;icon-arrow-right-generic&quot;></span>"
                CssClass="breadCrumbItem" />
        </div>
    </div>
    <div>&nbsp;</div>
    <!-- Content Pane -->
    <div class="row-content"><%--id="showAd" class="adRow"--%>
        <div class="container">
            <div class="row">
                <!-- Right Pane -->
                <div class="col-md-12">
                    <div id="ContentPane" runat="server" class="h_ContentPane">
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Bottom Pane -->
    <div class="container">
        <div id="BottomPane" runat="server" class="bottomPane">
        </div>
    </div>

    <!-- Footer -->
    <ctl:Footer ID="ucFooter" runat="server" />
</div>

<dnn:DnnCssInclude ID="DnnCssInclude1" runat="server" FilePath="css/bootstrap.css" PathNameAlias="SkinPath" Priority="18" />
<dnn:DnnCssInclude ID="DnnCssInclude2" runat="server" FilePath="css/bootstrap-theme.css" PathNameAlias="SkinPath" Priority="19"  />
<dnn:DnnCssInclude ID="DnnCssInclude3" runat="server" FilePath="css/all.css" PathNameAlias="SkinPath" Priority="20"  />
<dnn:DnnCssInclude ID="DnnCssInclude4" runat="server" FilePath="css/desktop.css" PathNameAlias="SkinPath" Priority="21"  />
<dnn:DnnCssInclude ID="DnnCssInclude5" runat="server" FilePath="css/tablet.css" PathNameAlias="SkinPath" Priority="22"  />
<dnn:DnnCssInclude ID="DnnCssInclude6" runat="server" FilePath="css/mobile.css" PathNameAlias="SkinPath" Priority="23"  />
<dnn:DnnCssInclude ID="DnnCssInclude7" runat="server" FilePath="css/jquery.fancybox.css" PathNameAlias="SkinPath" Priority="24"  />
<dnn:DnnJsInclude ID="DnnJsInclude1" runat="server" FilePath="js/bootstrap.js" PathNameAlias="SkinPath" Priority="25"  />
<dnn:DnnJsInclude ID="DnnJsInclude2" runat="server" FilePath="js/jquery.fancybox.js" PathNameAlias="SkinPath" Priority="26"  />
<dnn:DnnJsInclude ID="DnnJsInclude3" runat="server" FilePath="js/global.js" PathNameAlias="SkinPath" Priority="27"  />
<dnn:DnnCssInclude ID="DnnCssInclude8" runat="server" FilePath="css/dnn-admin.css" PathNameAlias="SkinPath" Priority="28" />

