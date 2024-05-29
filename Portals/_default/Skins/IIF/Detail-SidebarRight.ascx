<%@ Control Language="C#" AutoEventWireup="false" Inherits="DotNetNuke.UI.Skins.Skin" %>
<%@ Import Namespace="TabInfo=DotNetNuke.Entities.Tabs.TabInfo" %>
<%@ Import Namespace="Globals=DotNetNuke.Common.Globals" %>

<%@ Register TagPrefix="dnn" TagName="MENU" src="~/DesktopModules/DDRMenu/Menu.ascx" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.DDRMenu.TemplateEngine" Assembly="DotNetNuke.Web.DDRMenu" %>
<%@ Register TagPrefix="dnn" TagName="Breadcrumb" Src="~/Admin/Skins/BreadCrumb.ascx" %>

<%@ Register TagPrefix="instituteOfInternationalFinanceIif" TagName="CommonResources" src="controls/CommonResources.ascx" %>
<%@ Register TagPrefix="dnn" TagName="LOGO" Src="~/Admin/Skins/Logo.ascx" %>
<%@ Register TagPrefix="dnn" TagName="SEARCH" Src="~/Admin/Skins/Search.ascx" %>
<%@ Register TagPrefix="instituteOfInternationalFinanceIif" TagName="HeaderNavbar" src="controls/HeaderNavbar.ascx" %>
<%@ Register TagPrefix="instituteOfInternationalFinanceIif" TagName="Footer" src="controls/Footer.ascx" %>
<%@ Register TagPrefix="instituteOfInternationalFinanceIif" TagName="TrackingScripts" src="controls/TrackingScripts.ascx" %>

<instituteOfInternationalFinanceIif:CommonResources runat="server" />

<div class="iif iif__interior <% if (Request.IsAuthenticated) { %> iif__logged-in <% } %>">
    <header class="site--header">
        <div class="header--top-bar">
            <button id="navToggle" class="header--nav-toggle toggle__nav" aria-label="Show Menu" aria-controls="MobileNavbar" aria-expanded="false">
                <span class="navbar-toggler-icon">
                    <svg class="icon icon__svg icon__bars">
                        <use xlink:href="#icon__bars" />
                    </svg>
                </span>
            </button>
            <div class="collapse navbar-collapse" id="MobileNavbar" aria-hidden="true" data-current-level="0">
                <div class="container">
                    <div class="row row__even-columns row__sign-in">
                        <div class="row--column sign-in--register">
                            <span>You may be an IIF member: <a href="/membership">learn more</a> or <a href="/Home/Create-New-User-Account">register for access</a>.</span>
                        </div>
                        <div class="row--column sign-in--login">
                            <div runat="server" id="LoginPane"></div>
                            <div runat="server" id="LoggedInPane"></div>
                        </div>
                    </div>
                    <div class="header--navbar  header--navbar__mobile">
                        <div class="container">
                            <div class="row">
                                <div class="row--column navbar--menus ">
                                    <nav class="header--top-nav" role="navigation">
                                        <ul>
                                            <li><a href="/press" title="Press">Press</a></li>
                                            <li><a href="/careers" title="Careers">Careers</a></li>
                                            <li><a href="/about-us" title="About the IIF">About the IIF</a></li>
                                        </ul>
                                    </nav>
                                    <div class="header--search"><div runat="server" id="SearchPaneMobile"></div></div>
                                    <nav class="header--main-nav"><dnn:MENU runat="server" MenuStyle="menus/mainNav" ExcludeNodes="Theme" /></nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="header--navbar  header--navbar__desktop">
            <div class="container">
                <div class="row">
                    <div class="row--column navbar--logo">
                        <h1><dnn:LOGO runat="server" /></h1>
                    </div>
                    <div class="row--column navbar--utility">
                        <nav class="header--top-nav" role="navigation">
                            <ul>
                                <li><a href="/press" title="Press">Press</a></li>
                                <li><a href="/careers" title="Careers">Careers</a></li>
                                <li><a href="/about-us" title="About the IIF">About the IIF</a></li>
                            </ul>
                        </nav>
                        <div class="header--search"><div runat="server" id="SearchPaneDesktop"></div></div>
                    </div>
                    <div class="row--column navbar--menus">
                        <nav class="header--main-nav"><dnn:MENU runat="server" MenuStyle="menus/mainNav" ExcludeNodes="Theme" /></nav>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <main class="site--main">
        <div class="interior-nav">
            <nav class="container">
                <dnn:MENU runat="server" MenuStyle="menus/mainNav" NodeSelector="RootChildren" />
            </nav>
        </div>
        <div class="container">
            <nav class="breadcrumb">
                <span class="home-link"><a href="<%:Globals.NavigateURL(PortalSettings.HomeTabId)%>">Home</a></span>
                <dnn:Breadcrumb runat="server" id="dnnBreadcrumb" Separator="»" />
            </nav>
            <div><h1><%= PortalSettings.ActiveTab.TabName%></h1></div>
            <div runat="server" id="ContentPane" class="pane"></div>
            <div class="row row__sidebar-right">
                <div class="row--column row--column">
                    <div runat="server" id="TwoCol__content" class="pane"></div>
                </div>
                <div class="row--column row--column__sidebar">
                    <div runat="server" id="TwoCol__sidebar" class="pane"></div>
                </div>
            </div>
            <div class="row row__even-columns">
                <div class="row--column">
                    <div runat="server" id="TwoCol1" class="pane"></div>
                </div>
                <div class="row--column">
                    <div runat="server" id="TwoCol2" class="pane"></div>
                </div>
            </div>
            <div class="row row__even-columns">
                <div class="row--column">
                    <div runat="server" id="TwoCol2_1" class="pane"></div>
                </div>
                <div class="row--column">
                    <div runat="server" id="TwoCol2_2" class="pane"></div>
                </div>
            </div>
            <div runat="server" id="Fullwidth"></div>
            <div class="row row__even-columns">
                <div class="row--column">
                    <div runat="server" id="ThreeCol1" class="pane"></div>
                </div>
                <div class="row--column">
                    <div runat="server" id="ThreeCol2" class="pane"></div>
                </div>
                <div class="row--column">
                    <div runat="server" id="ThreeCol3" class="pane"></div>
                </div>
            </div>
            <div class="row row__even-columns">
                <div class="row--column">
                    <div runat="server" id="ThreeCol2_1" class="pane"></div>
                </div>
                <div class="row--column">
                    <div runat="server" id="ThreeCol2_2" class="pane"></div>
                </div>
                <div class="row--column">
                    <div runat="server" id="ThreeCol2_3" class="pane"></div>
                </div>
            </div>
            <div runat="server" id="Fullwidth2" class="pane"></div>
        </div>
    </main>
    <footer class="site--footer">
        <div class="container">
            <div runat="server" id="FooterPane" class="pane"></div>
            <div class="row row__addresses">
                <div class="row--column">
                    <p><strong>IIF Headquarters</strong><br>
                    <strong>1333 H St NW, Suite 800E</strong><br>
                    <strong>Washington, DC 20005-4770</strong><br>
                    Tel: +1 202 857-3600<br>
                    Fax: +1 202 775-1430<br>
                    Email: <a href="mailto:info@iif.com">info@iif.com</a></p>
                </div>
                <div class="row--column">
                    <p>IIF Middle East and Africa<br>
                    Regional Office<br>
                    DIFC, The Gate Building,<br>
                    Level 15<br>
                    P.O. Box 121208<br>
                    Dubai, United Arab<br>
                    Emirates<br>
                    Tel: +971 4401 9651</p>
                </div>
                <div class="row--column">
                    <p>IIF Asia Pacific<br>
                    Regional Office - Beijing<br>
                    Winland International Finance Centre<br>
                    Suite F920, 9F<br>
                    No.7 Jinrong Avenue<br>
                    Xicheng District, Beijing<br>
                    100032, PRC<br>
                    Tel: +86 10 5836 9100<br>
                    Fax: +86 10 5836 9300</p>
                </div>
                <div class="row--column">
                    <p>IIF Asia Pacific<br>
                    Regional Office - Singapore<br>
                    50 Raffles Place<br>
                    #22-06 Singapore Land<br>
                    Tower<br>
                    Singapore 048623<br>
                    Tel: +65 6592 5089</p>
                </div>
                <div class="row--column">
                    <p>IIF European<br>
                    Representative Office<br>
                    Square de Meeûs 23<br>
                    14th Floor<br>
                    1000 Brussels<br>
                    Belgium<br>
                    Tel: +32 2 430 37 08</p>
                </div>
                <!--
                <div class="row--column">
                    <p>IIF Regional Office<br>
                    10 Upper Bank St.<br>
                    London E14 5NP<br>
                    Tel: +44 207 006 4173</p>
                </div>
                -->
            </div>
            <div class="row row__links">
                <div class="row--column">
                    <div class="social-media">
                        <ul>
                            <li><span>Follow:</span></li>
                            <li>
                                <a href="https://twitter.com/iif" title="Twitter">
                                    <svg class="icon icon__svg icon__social icon__twitter">
                                        <use xlink:href="#icon__twitter" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/channel/UCWU5JLMmxGx6DN_gmx6lRQQ">
                                    <svg class="icon icon__svg icon__social icon__youtube">
                                        <use xlink:href="#icon__youtube" />
                                    </svg>
                                </a>
                            </li>

                            <li>
                                <a href="https://www.linkedin.com/company/institute-of-international-finance">
                                    <svg class="icon icon__svg icon__social icon__linkedin">
                                        <use xlink:href="#icon__linkedin" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="row--column">
                    <nav class="footer-nav">
                        <ul>
                            <li><a href="/membership" title="Membership">Membership</a></li>
                            <li><a href="/press" title="Press">Press</a></li>
                            <li><a href="/careers" title="Careers">Careers</a></li>
                            <li><a href="/about-us" title="About the IIF">About the IIF</a></li>
                            <li><a href="/terms-and-conditions" title="Terms & Conditions">Terms &amp; Conditions</a></li>
                            <li><a href="/privacy-policy" title="Privacy">Privacy</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </footer>
</div>
<instituteOfInternationalFinanceIif:TrackingScripts runat="server" />