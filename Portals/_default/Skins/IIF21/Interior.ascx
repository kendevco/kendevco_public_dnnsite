<%@ Control Language="C#" AutoEventWireup="false" Inherits="DotNetNuke.UI.Skins.Skin" %>
<%@ Import Namespace="TabInfo=DotNetNuke.Entities.Tabs.TabInfo" %>
<%@ Import Namespace="DotNetNuke.Security.Permissions" %>

<%@ Register TagPrefix="IIF" TagName="CommonResources" src="controls/CommonResources.ascx" %>
<%@ Register TagPrefix="IIF" TagName="Header" src="controls/Header.ascx" %>
<%@ Register TagPrefix="dnn" TagName="BREADCRUMB" Src="~/Admin/Skins/BreadCrumb.ascx" %>
<%@ Register TagPrefix="IIF" TagName="Footer" src="controls/Footer.ascx" %>

<%@ Register TagPrefix="dnn" TagName="MENU" src="~/DesktopModules/DDRMenu/Menu.ascx" %>

<IIF:CommonResources runat="server" />

<div class="iif iif__interior">
    <IIF:Header runat="server" />

    <div class="breadcrumb">
        <div class="breadcrumb--nav">
            <a href="<%= DotNetNuke.Common.Globals.NavigateURL(PortalController.GetCurrentPortalSettings().HomeTabId) %>" class="breadcrumb--home" title="Back to home page"><svg class="icon icon__svg icon__home"><use xlink:href="#icon__home"></use></svg><span class="sr-only">Back to home page</span></a>
            <dnn:BREADCRUMB ID="dnnBreadcrub" runat="server" Separator="" RootLevel="0" UseTitle="false" />
        </div>
    </div>
    
    <main class="site--main">
        <div class="etg-row etg-row__contained">
            <div runat="server" id="ContentPane" class="main-pane etg-row--col"></div>
        </div>

        <div class="etg-row etg-row__contained">
            <div runat="server" id="TwoColLeft" class="content-pane etg-row--col"></div>
            <div runat="server" id="TwoColRight" class="content-pane etg-row--col"></div>
        </div>

        <div runat="server" id="FullWidthPaneCenter" class="content-pane etg-row--col"></div>

        <div class="etg-row etg-row__contained">
            <div runat="server" id="ThreeColLeft" class="content-pane etg-row--col"></div>
            <div runat="server" id="ThreeColCenter" class="content-pane etg-row--col"></div>
            <div runat="server" id="ThreeColRight" class="content-pane etg-row--col"></div>
        </div>

        <div runat="server" id="FullWidthPaneBottom" class="content-pane etg-row--col"></div>

        <div class="etg-row etg-row__promos">
            <div class="etg-row--col">
                <div class="etg-row etg-row__contained">
                    <div runat="server" id="PromoLeft" class="content-pane etg-row--col"></div>
                    <div runat="server" id="PromoRight" class="content-pane etg-row--col"></div>
                </div>
            </div>
        </div>

        <div class="etg-row etg-row__cta">
            <div runat="server" id="CTAPane" class="content-pane"></div>
        </div>
    </main>

    <IIF:Footer runat="server" />

    <div id="backToTop" class="back-to-top">
        <svg class="icon icon__svg icon__arrow-up">
            <use xlink:href="#icon__arrow-up" />
        </svg>
    </div>
</div>