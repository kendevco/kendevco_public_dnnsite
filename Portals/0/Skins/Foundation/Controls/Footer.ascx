<%@ Control Language="C#" AutoEventWireup="true" CodeFile="Footer.ascx.cs" Inherits="Portals_0_Skins_Website_Controls_Footer" %>
<%@ Register TagPrefix="dnn" TagName="COPYRIGHT" Src="~/Admin/Skins/Copyright.ascx" %>

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
                    </div>
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
                    <a href="tel:8003920936">800.392.0936</a>
                </div>
            </div>
            <div class="col-md-6 col-sm-6">
                <div class="genInfoNum"><span>General Information: </span><span><a href="tel:6369289355">636.928.WELL</a></span></div>
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
            <div class="col-md-12" style="padding: 0px;">
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
                    <li>|</li>
                    <li><a href="/About-Us/Community-Health-Needs-Assessment">Community Health Needs Assessment</a></li>
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
                <a href="http://www.bjc.org" target="_blank"><img src="/Portals/0/Skins/SCC/images/bjc_healthcare-white.svg" alt="BJC HealthCare" width="220"></a>
            </div>
        </div>
    </div>
</div>