<%@ Control Language="vb" AutoEventWireup="false" Explicit="True" Inherits="DotNetNuke.UI.Skins.Skin" %>
<%@ Register TagPrefix="dnn" TagName="STYLES" Src="~/Admin/Skins/Styles.ascx" %>
<%@ Register TagPrefix="dnn" TagName="CURRENTDATE" Src="~/Admin/Skins/CurrentDate.ascx" %>
<%@ Register TagPrefix="dnn" TagName="LANGUAGE" Src="~/Admin/Skins/Language.ascx" %>
<%@ Register TagPrefix="dnn" TagName="LOGO" Src="~/Admin/Skins/Logo.ascx" %>
<%@ Register TagPrefix="dnn" TagName="SEARCH" Src="~/Admin/Skins/Search.ascx" %>
<%@ Register TagPrefix="dnn" TagName="USER" Src="~/Admin/Skins/User.ascx" %>
<%@ Register TagPrefix="dnn" TagName="LOGIN" Src="~/Admin/Skins/Login.ascx" %>
<%@ Register TagPrefix="dnn" TagName="PRIVACY" Src="~/Admin/Skins/Privacy.ascx" %>
<%@ Register TagPrefix="dnn" TagName="TERMS" Src="~/Admin/Skins/Terms.ascx" %>
<%@ Register TagPrefix="dnn" TagName="BREADCRUMB" Src="~/Admin/Skins/BreadCrumb.ascx" %>
<%@ Register TagPrefix="dnn" TagName="COPYRIGHT" Src="~/Admin/Skins/Copyright.ascx" %>
<%@ Register TagPrefix="dnn" TagName="LINKTOMOBILE" Src="~/Admin/Skins/LinkToMobileSite.ascx" %>
<%@ Register TagPrefix="dnn" TagName="META" Src="~/Admin/Skins/Meta.ascx" %>
<%@ Register TagPrefix="dnn" TagName="MENU" Src="~/DesktopModules/DDRMenu/Menu.ascx" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.Client.ClientResourceManagement" Assembly="DotNetNuke.Web.Client" %>
<%@ Register TagPrefix="dnn" TagName="jQuery" Src="~/Admin/Skins/jQuery.ascx" %>

<dnn:META ID="META1" runat="server" Name="viewport" Content="width=device-width,initial-scale=1" />

<!--[if lt IE 9]>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js"></script>
<![endif]-->

<div id="siteWrapper" class="landing-page">

	<div class="site-banner-container"><div id="SiteBanner" class="container" runat="server"></div></div>
	<div id="VideoBanner" runat="server"></div>
	<div class="text-banner-container"><div id="TextBanner" class="container" runat="server"></div></div>
  <div class="main-content-container"><div id="ContentPane" class="container" runat="server"></div></div>
	<div class="content-sidebar-container"><div id="ContentSidebar" class="container" runat="server"></div></div>
	<div class="find-doctor-container"><div id="FindDoctorBanner" class="container" runat="server"></div></div>
	<div class="website-banner-container"><div id="WebsiteBanner" class="container" runat="server"></div></div>

	<!-- Social Media -->
<div class="row11 socialRow hidden-xs">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="socialWrap">
                    <div>
						<div class="socialCol">
							<a class="hidden-xs icon-google-plus" href="https://plus.google.com/104092093883110038757/posts" target="_blank"></a>
						</div>
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
                        <div class="socialCol">
                            <a class="visible-xs socialBtn" href="#"><span class="icon-google_plus"></span></a>
                            <div class="hidden-xs gaCss">
                                <div class="g-plusone" data-href="https://plus.google.com/+BarnesJewishHospitalStLouis"></div>
                            </div>
                        </div>
                        <div class="socialCol">
                            <div class="g-follow" data-annotation="none" data-height="24" data-href="https://plus.google.com/103340642989271330961" data-rel="publisher"></div>
                        </div>
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
<!-- /.SiteWrapper -->

<%-- CSS & JS includes --%>
<!--#include file="Common/AddFiles.ascx"-->