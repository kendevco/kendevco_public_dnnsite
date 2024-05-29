<%@ Control Language="vb" AutoEventWireup="false" Explicit="True" Inherits="DotNetNuke.UI.Skins.Skin" %>
<%@ Register TagPrefix="ctl" TagName="Footer" Src="controls/Footer.ascx" %>
<%@ Register TagPrefix="ctl" TagName="Header" Src="controls/Header.ascx" %>
<%@ Register TagPrefix="dnn" TagName="BREADCRUMB" Src="~/Admin/Skins/BreadCrumb.ascx" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.UI.Skins" Assembly="DotNetNuke" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.Client.ClientResourceManagement" Assembly="DotNetNuke.Web.Client" %>
<%@ Register Src="controls/ChildPageList.ascx" TagPrefix="ctl" TagName="ChildPageList" %>

<script type="text/javascript">
    $(function () {
        hideSkinTitle();
        enableExpandCollapse();
    });

    function hideSkinTitle() {
        var articleId = '<%= Request.QueryString("ArticleID") %>';
        if (articleId != '') {
            $(".blog_category").hide();

            // Update breadcrumb
            var $breadCrumb = $(".breadCrumbItem").last();
            var articleTitle = $(".article h1").html();
            $breadCrumb.html(articleTitle);
        }
    }

    function enableExpandCollapse() {
        $(".click-to-expand").click(function() {
            $(this).parent().find(".div-to-expand").slideToggle();
        });
    }
</script>

<div class="push">
    <!-- Header : row1,2,3-->
    <ctl:Header ID="ucHeader" runat="server" />

    <!-- Banner -->
    <div class="container">
        <div id="globalBannerArea" class="globalBannerArea">
            <div id="TopPane" runat="server" class="topPane">
            </div>
        </div>
    </div>

    <!-- breadcrumb -->
    <div class="container">
        <div class="breadcrumbs">
            <a href="/" class="breadCrumbItem">Home</a>
            <span class="icon-arrow-right-generic"></span>
            <dnn:BREADCRUMB ID="dnnBreadcrumb" runat="server" RootLevel="0" Separator="<span class=&quot;icon-arrow-right-generic&quot;></span>"
                CssClass="breadCrumbItem" />
        </div>
    </div>
    
    <!-- Content Pane -->
    <div class="mainContentBlog">
        <div class="container">
            <div class="row">
                <%--Top Pane--%>
                <div class="col-md-12 col-sm-12 col-xs-12 blog_top_content">
                    <div id="TopContentPane" runat="server" class="contentPane">
                    </div>
                </div>      
                
                <div class="col-md-12 col-sm-12 col-xs-12 blog_category">
                    <h2>
                        <%--<i class="icon-blog-category"></i>--%>
                        Ask the BJC Expert
                    </h2>
                </div>   
                
                <div class="col-md-12 col-sm-12 col-xs-12 blog_middle_content">
                    <div id="MiddleContentPane" runat="server" class="contentPane">
                    </div>
                </div>      
                       
                <!-- Right Pane -->
                <div class="col-md-8 col-sm-8 col-xs-12 blog_col_left">
                    <div id="RightPane" runat="server" ></div>
                </div>

                <!-- Left Pane -->
                <div class="col-md-4 col-sm-4 col-xs-12 two_col_right">
                    <div id="ContentPane" runat="server" class="rightPane content">
                    </div>                 
                </div>
                
                <!-- Content Pane-->
                <div class="col-md-12 col-sm-12 col-xs-12 blog_bottom_content">
                    <div id="BottomContentPane" runat="server" class="contentPane">
                    </div>
                </div>
            </div>
            
            <!-- Bottom Pane -->
            <div class="row">
                <div id="BottomPane" runat="server" class="col-md-12 col-sm-12 col-xs-12 bottomPane">
                </div>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <ctl:Footer ID="ucFooter" runat="server" />
</div>
<dnn:DnnCssInclude ID="DnnCssInclude1" runat="server" FilePath="css/bootstrap.css" PathNameAlias="SkinPath" Priority="18" />
<dnn:DnnCssInclude ID="DnnCssInclude2" runat="server" FilePath="css/bootstrap-theme.css" PathNameAlias="SkinPath" Priority="19"  />
<dnn:DnnCssInclude ID="DnnCssInclude3" runat="server" FilePath="css/all.css" PathNameAlias="SkinPath" Priority="20"  />
<dnn:DnnCssInclude ID="DnnCssInclude8" runat="server" FilePath="css/Blog.css" PathNameAlias="SkinPath" Priority="20"  />
<dnn:DnnCssInclude ID="DnnCssInclude4" runat="server" FilePath="css/desktop.css" PathNameAlias="SkinPath" Priority="21"  />
<dnn:DnnCssInclude ID="DnnCssInclude5" runat="server" FilePath="css/tablet.css" PathNameAlias="SkinPath" Priority="22"  />
<dnn:DnnCssInclude ID="DnnCssInclude6" runat="server" FilePath="css/mobile.css" PathNameAlias="SkinPath" Priority="23"  />
<dnn:DnnCssInclude ID="DnnCssInclude7" runat="server" FilePath="css/jquery.fancybox.css" PathNameAlias="SkinPath" Priority="24"  />
<dnn:DnnJsInclude ID="DnnJsInclude1" runat="server" FilePath="js/bootstrap.js" PathNameAlias="SkinPath" Priority="25"  />
<dnn:DnnJsInclude ID="DnnJsInclude2" runat="server" FilePath="js/jquery.fancybox.js" PathNameAlias="SkinPath" Priority="26"  />
<dnn:DnnJsInclude ID="DnnJsInclude4" runat="server" FilePath="js/textsizer.js" PathNameAlias="SkinPath" Priority="27"   />
<dnn:DnnJsInclude ID="DnnJsInclude5" runat="server" FilePath="js/print.js" PathNameAlias="SkinPath" Priority="28"   />
<dnn:DnnJsInclude ID="DnnJsInclude3" runat="server" FilePath="js/global.js" PathNameAlias="SkinPath" Priority="29"  />