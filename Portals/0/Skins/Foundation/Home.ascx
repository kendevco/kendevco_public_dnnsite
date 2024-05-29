<%@ Control Language="vb" AutoEventWireup="false" Explicit="True" Inherits="DotNetNuke.UI.Skins.Skin" %>
<%@ Register TagPrefix="ctl" TagName="Footer" Src="controls/Footer.ascx" %>
<%@ Register TagPrefix="ctl" TagName="Header" Src="controls/Header.ascx" %>

<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.UI.Skins" Assembly="DotNetNuke" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.Client.ClientResourceManagement" Assembly="DotNetNuke.Web.Client" %>
<%@ Register Src="controls/ChildPageList.ascx" TagPrefix="ctl" TagName="ChildPageList" %>

<div class="push">
    <!-- Header : row1,2,3-->
    <ctl:Header ID="ucHeader" runat="server" />

    <!-- Rotating Banner -->
    <div id="globalBannerArea" class="globalBannerArea">
        <div id="TopPane1" runat="server" class="h_TopPane1">
        </div>
    </div>

    <!-- Content Pane -->
    <div class="mainContent home">
        <div class="container">
            <div class="row">
                <!-- Right Pane -->
                <div class="col-md-12 col-sm-12 col-xs-12 contentCol">
                    <div id="ContentPane" runat="server" class="contentPane">
                    </div>                    
                </div>
            </div>
        </div>
    </div>

    <!-- Bottom Left and Right Pane -->
    <div class="row-content h_mainbottompane">
        <div class="container">
            <div id="BluePane" runat="server">
            </div>
        </div>
    </div>

    <!-- Bottom Pane -->
    <div class="row-content">
        <div class="container">
            <div id="BottomPane" runat="server" class="h_ContentPane">                
            </div>
        </div>
    </div>

    <!-- Footer -->
    <ctl:Footer ID="ucFooter" runat="server" />
</div>

<dnn:DnnCssInclude ID="DnnCssInclude1" runat="server" FilePath="css/bootstrap.css" PathNameAlias="SkinPath" Priority="18" />
<dnn:DnnCssInclude ID="DnnCssInclude2" runat="server" FilePath="css/bootstrap-theme.css" PathNameAlias="SkinPath" Priority="19" />
<dnn:DnnCssInclude ID="DnnCssInclude3" runat="server" FilePath="css/all.css" PathNameAlias="SkinPath" Priority="20" />
<dnn:DnnCssInclude ID="DnnCssInclude4" runat="server" FilePath="css/desktop.css" PathNameAlias="SkinPath" Priority="21" />
<dnn:DnnCssInclude ID="DnnCssInclude5" runat="server" FilePath="css/tablet.css" PathNameAlias="SkinPath" Priority="22" />
<dnn:DnnCssInclude ID="DnnCssInclude6" runat="server" FilePath="css/mobile.css" PathNameAlias="SkinPath" Priority="23" />
<dnn:DnnCssInclude ID="DnnCssInclude7" runat="server" FilePath="css/jquery.fancybox.css" PathNameAlias="SkinPath" Priority="24" />
<dnn:DnnJsInclude ID="DnnJsInclude1" runat="server" FilePath="js/bootstrap.js" PathNameAlias="SkinPath" Priority="25" />
<dnn:DnnJsInclude ID="DnnJsInclude2" runat="server" FilePath="js/jquery.fancybox.js" PathNameAlias="SkinPath" Priority="26" />
<dnn:DnnJsInclude ID="DnnJsInclude3" runat="server" FilePath="js/global.js" PathNameAlias="SkinPath" Priority="27" />
<dnn:DnnCssInclude ID="DnnCssInclude8" runat="server" FilePath="css/dnn-admin.css" PathNameAlias="SkinPath" Priority="28" />