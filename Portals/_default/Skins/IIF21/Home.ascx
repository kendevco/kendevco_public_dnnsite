<%@ Control Language="C#" AutoEventWireup="false" Inherits="DotNetNuke.UI.Skins.Skin" %>
<%@ Import Namespace="TabInfo=DotNetNuke.Entities.Tabs.TabInfo" %>
<%@ Import Namespace="DotNetNuke.Security.Permissions" %>

<%@ Register TagPrefix="IIF" TagName="CommonResources" src="controls/CommonResources.ascx" %>
<%@ Register TagPrefix="IIF" TagName="NavGlobal" Src="controls/NavGlobal.ascx" %>
<%@ Register TagPrefix="dnn" TagName="LOGIN" Src="~/Admin/Skins/Login.ascx" %>
<%@ Register TagPrefix="IIF" TagName="Footer" src="controls/Footer.ascx" %>

<IIF:CommonResources runat="server" />

<div class="iif iif__home">
    <header class="site--header site--header__home">
        <div class="header--container">
            <div class="site--logo">
                <a href="/" title="IIF Home Page"><img src="/Portals/_default/Skins/IIF21/images/logos/logo-white.png" alt="IIF Logo" /></a>
            </div>
            <div class="site--utility">
                <dnn:Login runat="server" CssClass="button button__accent button__small" id="dnnLogin" />
                <button id="navToggle" class="header--nav-toggle toggle__nav" aria-controls="siteNav" aria-expanded="false">
                    <div class="toggle-bars">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </div>
                </button>
            </div>
            <div id="siteNav" class="site--nav" aria-controlledby="navToggle" aria-hidden="true">
                <IIF:NavGlobal runat="server" />
            </div>
        </div>
        <div runat="server" id="HeaderPane" class="header-pane" ContainerType="G" ContainerName="IIF21" ContainerSrc="No Title.ascx"></div>
    </header>

    <main class="site--main">
        <div class="etg-row etg-row__intro">
            <div runat="server" id="IntroPane" class="etg-row--col intro-pane"></div>
        </div>

        <div class="etg-row etg-row__contained">
            <div runat="server" id="ContentPane" class="etg-row--col content-pane"></div>
        </div>

        <div class="etg-row etg-row__contained">
            <div runat="server" id="TwoColPaneLeft" class="etg-row--col content-pane"></div>
            <div runat="server" id="TwoColPaneRight" class="etg-row--col content-pane"></div>
        </div>

        <div class="etg-row etg-row__contained">
            <div runat="server" id="ContentPaneCenter" class="etg-row--col content-pane"></div>
        </div>

        <div class="etg-row etg-row__contained">
            <div runat="server" id="ThreeColPaneLeft" class="etg-row--col content-pane"></div>
            <div runat="server" id="ThreeColPaneCenter" class="etg-row--col content-pane"></div>
            <div runat="server" id="ThreeColPaneRight" class="etg-row--col content-pane"></div>
        </div>

        <div class="etg-row etg-row__contained etg-row__tiles">
            <div class="etg-row--col etg-row--col__25">
                <div runat="server" id="LeftSidebar" class="content-pane"></div>
            </div>
            <div class="etg-row--col etg-row--col__75">
                <div class="etg-row">
                    <div runat="server" id="HighlightedContent" class="etg-row--col content-pane"></div>
                </div>
                <div class="etg-row">
                    <div runat="server" id="TileMiddleLeft" class="etg-row--col etg-row--col__60 content-pane"></div>
                    <div runat="server" id="TileMiddleRight" class="etg-row--col etg-row--col__40 content-pane"></div>
                </div>
            </div>
            
        </div>

        <div class="etg-row etg-row__contained">
            <div runat="server" id="ContentPaneBottom" class="etg-row--col content-pane"></div>
        </div>

        <div class="etg-row etg-row__cta">
            <div runat="server" id="CTAPane" class="content-pane"></div>
        </div>

        <div class="etg-row etg-row__promos">
            <div class="etg-row--col">
                <div class="etg-row etg-row__contained">
                    <div runat="server" id="PromoLeft" class="content-pane etg-row--col"></div>
                    <div runat="server" id="PromoRight" class="content-pane etg-row--col"></div>
                </div>
            </div>
        </div>
    </main>

    <IIF:Footer runat="server" />

    <div id="backToTop" class="back-to-top">
        <svg class="icon icon__svg icon__arrow-up">
            <use xlink:href="#icon__arrow-up" />
        </svg>
    </div>
</div>