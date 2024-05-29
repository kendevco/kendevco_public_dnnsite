<%@ Control Language="C#" AutoEventWireup="true" CodeFile="Footer.ascx.cs" Inherits="BJC.Skin.controls.Footer" %>
<%@ Register TagPrefix="dnn" TagName="COPYRIGHT" Src="~/Admin/Skins/Copyright.ascx" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.UI.Skins" Assembly="DotNetNuke" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.Client.ClientResourceManagement" Assembly="DotNetNuke.Web.Client" %>
<!-- Footer -->
<!-- ============================================= -->
<footer class="footer-wrapper footer-small">
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <div class="pull-center">
                    <div class="clearfix">
                        <ul class="footer-links">
                            <li><a href="/">Home</a></li>
                            <li><a href="https://www.bjc.org/For-Patients-Visitors/Patient-Rights-Responsibilities" target="_blank">Patient Rights</a></li>
                            <li><a href="https://www.bjc.org/About-Us/Quality" target="_blank">Quality</a></li>
                            <li><a href="https://www.bjc.org/For-Patients-Visitors/Patient-Privacy" target="_blank">Privacy</a></li>
                            <li><a href="/Our-Policies">Our Policies</a></li>
                            <li><a href="/Joint-Commission">Joint Commission</a></li>
                            <li><a href="/About-Us/Careers">Careers</a></li>
                            <li><a href="/Sitemaps">Site Map</a></li>
                            <li><a href="https://www.bjc.org/About-Us/Vendor-Information" target="_blank">Vendor Information</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="br-bottom-center mt20 mb30"></div>
        <div class="row">
            <div class="col-sm-12">
                <div class="pull-center">
                    <a href="http://www.bjc.org" target="_blank"><img src="/Portals/0/Skins/Hospice/images/bjc_healthcare-white.svg" alt="BJC HealthCare" style="max-width: 210px;"></a>
                    <div class="divider d3"></div>
                    <div class="footer-widget mt30">
                        <div class="clearfix">
                            <ul class="footer-social">
                                <li><a href="https://www.youtube.com/bjchealthcare" target="_blank"><i class="icon social_youtube"></i></a></li>
                                <li><a href="https://www.facebook.com/bjchealthcare" target="_blank"><i class="icon social_facebook"></i></a></li>
                                <li><a href="https://www.pinterest.com/bjchealthcare/bjc-hospice/" target="_blank"><i class="icon social_pinterest"></i></a></li>
                            </ul>
                        </div>
                        <div class="mb30"></div>
                        <a href="/Donate" class="btn-e">Make a Donation</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="row address-copyright">
            <div class="footer-logo">
                <a href="/">
                    <img src="<%= SkinPath %>images/footer-logo.png" style="width: 200px" />
                </a>
            </div>
            <address>
                1935 Beltway Drive<br />
                St. Louis, Missouri 63114<br />
                <a href="tel:3148725050">Phone: 314.872.5050</a><br />
                <a href="tel:8772278718">Toll-Free: 877.227.8718</a>
            </address>
			<!--
            <small>
                <span id="dnn_Footer_dnnCopyright_lblCopyright" class="copyRight">
				Copyright © 1997- 2020 BJC HealthCare. All Rights Reserved.</span>
            </small>
			-->
			<div class="copyright">
                  <font color="white"   <dnn:COPYRIGHT ID="dnnCopyright" runat="server" CssClass="copyRight" /></font>
             </div>
        </div>
    </div>
</footer>

<!-- CSS -->
<dnn:DnnCssInclude ID="DnnCssInclude1" runat="server" FilePath="libs/bootstrap/css/bootstrap.min.css" PathNameAlias="SkinPath" Priority="17" />
<dnn:DnnCssInclude ID="DnnCssInclude2" runat="server" FilePath="fonts/elegant_font/html_css/style.css" PathNameAlias="SkinPath" Priority="18" />
<dnn:DnnCssInclude ID="DnnCssInclude3" runat="server" FilePath="fonts/font-awesome/css/font-awesome.min.css" PathNameAlias="SkinPath" Priority="19" />
<dnn:DnnCssInclude ID="DnnCssInclude5" runat="server" FilePath="libs/rs-plugin/css/settings.css" PathNameAlias="SkinPath" Priority="21" />
<dnn:DnnCssInclude ID="DnnCssInclude6" runat="server" FilePath="libs/owl-carousel/owl.carousel.css" PathNameAlias="SkinPath" Priority="22" />
<dnn:DnnCssInclude ID="DnnCssInclude8" runat="server" FilePath="libs/magnific-popup/magnific-popup.css" PathNameAlias="SkinPath" Priority="23" />
<dnn:DnnCssInclude ID="DnnCssInclude7" runat="server" FilePath="css/main.css" PathNameAlias="SkinPath" Priority="24" />
<dnn:DnnCssInclude ID="DnnCssInclude4" runat="server" FilePath="css/custom.css" PathNameAlias="SkinPath" Priority="25" />

<!-- JS -->
<dnn:DnnJsInclude ID="DnnJsInclude1" runat="server" FilePath="libs/bootstrap/js/bootstrap.min.js" PathNameAlias="SkinPath" Priority="26" />
<dnn:DnnJsInclude ID="DnnJsInclude2" runat="server" FilePath="js/plugins.min.js" PathNameAlias="SkinPath" Priority="27" />
<dnn:DnnJsInclude ID="DnnJsInclude3" runat="server" FilePath="libs/rs-plugin/js/revolution-slider.js" PathNameAlias="SkinPath" Priority="28" />
<dnn:DnnJsInclude ID="DnnJsInclude4" runat="server" FilePath="libs/owl-carousel/owl.carousel.min.js" PathNameAlias="SkinPath" Priority="29" />
<dnn:DnnJsInclude ID="DnnJsInclude7" runat="server" FilePath="libs/magnific-popup/jquery.magnific-popup.min.js" PathNameAlias="SkinPath" Priority="30" />
<dnn:DnnJsInclude ID="DnnJsInclude5" runat="server" FilePath="js/main.js" PathNameAlias="SkinPath" Priority="31" />
<dnn:DnnJsInclude ID="DnnJsInclude6" runat="server" FilePath="js/custom.js" PathNameAlias="SkinPath" Priority="32" />
