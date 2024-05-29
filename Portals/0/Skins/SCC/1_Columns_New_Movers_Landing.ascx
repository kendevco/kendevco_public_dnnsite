<%@ Control Language="vb" AutoEventWireup="false" Explicit="True" Inherits="DotNetNuke.UI.Skins.Skin" %>
<%@ Register TagPrefix="ctl" TagName="Footer" Src="controls/Footer.ascx" %>
<%@ Register TagPrefix="ctl" TagName="Header" Src="controls/Header.ascx" %>
<%@ Register TagPrefix="dnn" TagName="BREADCRUMB" Src="~/Admin/Skins/BreadCrumb.ascx" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.UI.Skins" Assembly="DotNetNuke" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.Client.ClientResourceManagement" Assembly="DotNetNuke.Web.Client" %>
<%@ Register Src="controls/ChildPageList.ascx" TagPrefix="ctl" TagName="ChildPageList" %>
<%@ Register TagPrefix="dnn" TagName="COPYRIGHT" Src="~/Admin/Skins/Copyright.ascx" %>


<div class="push one-col-fullwidth">
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
    <%--<div class="container">
        <div class="breadcrumbs">
            <a href="/" class="breadCrumbItem">Home</a>
            <span class="icon-arrow-right-generic"></span>
            <dnn:BREADCRUMB ID="dnnBreadcrumb" runat="server" RootLevel="0" Separator="<span class=&quot;icon-arrow-right-generic&quot;></span>"
                CssClass="breadCrumbItem" />
        </div>
    </div>--%>
    
    <div id="ContentPane" runat="server" class="contentPane">
    </div>

    <!-- Content Pane -->
    <div class="mainContent">
        <div class="container">
            <div class="row">
                <!-- Content Pane-->
                <div class="col-md-12 col-sm-12 col-xs-12">
                    <div id="ContentPaneFixedWidth" runat="server" class="contentPane fixWidth">
                    </div>
                </div>
            </div>
        </div>
    </div>


    <!-- Bottom Pane -->
    <div class="bottomPane">
        <div id="BottomPane" runat="server">
        </div>
    </div>


    <!-- Footer -->
    <!-- Social Media -->
    <div class="row11 socialRow hidden-xs">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="socialWrap">
                        <div>
						    <div class="socialCol">
							    <a class="hidden-xs icon-fb" href="https://www.facebook.com/BJCStCharlesCounty/" target="_blank"></a>
						    </div>
						    <div class="socialCol">
							    <a class="hidden-xs icon-twitter" href="https://twitter.com/BJCStCharlesCo" target="_blank"></a>
						    </div>
						    <%--<div class="socialCol">
							    <a class="hidden-xs icon-youtube" href="#" target="_blank"></a>
						    </div>--%>
                        </div>
                        <%--<div>
                            <div class="socialCol">CONNECT WITH US:</div>
                            <div class="socialCol fbSoc">
                                <a class="visible-xs socialBtn" href="https://www.facebook.com/progresswest"><span class="icon-facebook"></span></a>
                                <div class="hidden-xs fbCss">
                                    <div class="fb-like" data-href="https://www.facebook.com/progresswest" data-layout="button_count" data-action="like" data-show-faces="false" data-share="false"></div>
                                </div>
                            </div>
                            <div class="socialCol twitter">
                                <a class="visible-xs socialBtn" href="http://twitter.com/BJCStCharlesCo"><span class="icon-twitter"></span></a>
                                <div class="hidden-xs twttrCss">
                                    <a href="https://twitter.com/BJCStCharlesCo" class="twitter-follow-button" data-show-count="true" data-size="medium" data-show-screen-name="false">Follow @twitter</a>
                                    <script>!function (d, s, id) { var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https'; if (!d.getElementById(id)) { js = d.createElement(s); js.id = id; js.src = p + '://platform.twitter.com/widgets.js'; fjs.parentNode.insertBefore(js, fjs); } }(document, 'script', 'twitter-wjs');</script>
                                </div>
                            </div>
                        </div>--%>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Phone -->
    <div class="row-phone footerRow1">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-sm-6">
                    <div class="appointNum">
                        <span>Find a doctor or make an appointment: </span>
                        <a href="tel:6369289355">636.928.WELL</a>
                    </div>
                </div>
                <div class="col-md-6 col-sm-6">
                    <div class="genInfoNum"><span>General Information: </span><span><a href="tel:8003920936">800.392.0936</a></span></div>
                </div>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <div class="row-footer copyRow">
        <div class="container">
            <div class="row copyWrap">
                <div class="col-md-12">
                    <div class="footerLogoWrap">
                        <a href="/">
                            <img width="100%" alt="" src="<%= SkinPath %>images/logo-bottom.jpg" /></a>
                    </div>

                    <footer>
                        <div class="col-md-12 col-sm-12 col-xs-12 addresses">
                            <div class="col-md-2 col-sm-1 hidden-xs"></div>
                            <div class="col-md-4 col-sm-5 col-xs-12">
                                <address>
                                    Barnes-Jewish St. Peters Hospital<br>
                                    10 Hospital Drive<br>
                                    St. Peters, Missouri 63376 USA
                                </address>
                            </div>
                            <div class="col-md-4 col-sm-5 col-xs-12">
                                <address>
                                    Progress West Hospital<br>
                                    2 Progress Point Parkway<br>
                                    O'Fallon, Missouri 63368 USA
                                </address>
                            </div>
                            <div class="col-md-2 col-sm-1 hidden-xs"></div>
                        </div>
                
                        <div class="copyright">
                            <dnn:COPYRIGHT ID="dnnCopyright" runat="server" CssClass="copyRight" />
                        </div>
                    </footer>
                </div>
            </div>
            <div class="complianceWrap">
                <div class="complianceSection">
                    <span>Barnes-Jewish St. Peters Hospital and Progress West Hospital complies with applicable federal civil right laws and does not discriminate on the basis of race, color, national origin, age, disability or sex.<br />
                        Atencion: hay servicios de asistencia de idiomas disponibles a su disposición sin costo.<br /> 
                        Llame al 636-916-9000 (TTY: 1-800-735-2966).<br />
                        注意：免費提供語言援助服務。 致電 636-916-9000（TTY: 1-800-735-2966).</span>
                </div>
            </div>
        </div>
    </div>

    <%--Sitemap Row--%>
    <div class="row-sitemap sitemapRow">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <ul class="sitemapMenu">
                        <li><a href="/">Home</a></li>
                        <li>|</li>
                        <li><a href="/our-policies">Our Policies</a></li>
                        <li>|</li>
                        <li><a href="http://www.bjc.org/For-Patients-Visitors/Patient-Privacy" target="_blank">Patient Privacy</a></li>
                        <li>|</li>
                        <li><a href="/sitemap">Sitemap</a></li>
                        <li>|</li>
                        <li><a href="http://www.bjc.org/For-Patients-Visitors/Financial-Assistance" target="_blank">Financial Assistance</a></li>
                        <li>|</li>
                        <li><a href="/joint-commission">Joint Commission</a></li>
                        <li>|</li>
                        <li><a href="/quality-reports">Quality Reports</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <a class="hidden-lg hidden-md" id="topbtn" href="javascript:void(0)"><span>Back to Top</span><span class="icon-arrow-back_to_top"></span></a>

    <%--Bjc HealthCare--%>
    <div class="row-bjc-healthcare">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <a href="http://www.bjc.org" target="_blank"><img src="<%= SkinPath %>images/BJC_HealthCare_REV_16.png" width="220" alt="" /></a>
                </div>
            </div>
        </div>
    </div>
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
<dnn:DnnJsInclude ID="DnnJsInclude4" runat="server" FilePath="js/textsizer.js" PathNameAlias="SkinPath" Priority="27"   />
<dnn:DnnJsInclude ID="DnnJsInclude5" runat="server" FilePath="js/print.js" PathNameAlias="SkinPath" Priority="28"   />
<dnn:DnnJsInclude ID="DnnJsInclude3" runat="server" FilePath="js/global.js" PathNameAlias="SkinPath" Priority="29"  />
