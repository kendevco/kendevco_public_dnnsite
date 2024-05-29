<%@ Control Language="C#" AutoEventWireup="false" Inherits="DotNetNuke.UI.Skins.Skin" %>
<%@ Import Namespace="TabInfo=DotNetNuke.Entities.Tabs.TabInfo" %>
<%@ Import Namespace="DotNetNuke.Security.Permissions" %>
<%@ Register TagPrefix="IIF" TagName="CommonResources" src="controls/CommonResources.ascx" %>
<%@ Register TagPrefix="IIF" TagName="Header" src="controls/Header.ascx" %>
<%@ Register TagPrefix="IIF" TagName="Waves" src="controls/Waves.ascx" %>
<%@ Register TagPrefix="IIF" TagName="FooterUtility" src="controls/FooterUtility.ascx" %>
<%@ Register TagPrefix="IIF" TagName="GoogleTranslate" src="controls/GoogleTranslate.ascx" %>

<IIF:CommonResources runat="server" />

<div class="iif iif__404">
   <IIF:Header runat="server" />

    <main class="site--main">
        <div class="etg-row etg-row__contained etg-row__404">
            <div runat="server" id="ContentPane" class="main-pane"></div>
        </div>
        <cpi:Waves runat="server" />
    </main>

    <footer class="site--footer">
        <div runat="server" id="FooterPartnersPane" class="footer-pane footer-pane__partners"></div>
        <div class="footer--content">
            <div class="etg-row">
                <div class="etg-row--col">
                    <div runat="server" id="FooterPaneA" class="footer-pane"></div>
                </div>
                <div class="etg-row--col">
                    <div runat="server" id="FooterPaneB" class="footer-pane"></div>
                </div>
                <div class="etg-row--col">
                    <div runat="server" id="FooterPaneC" class="footer-pane"></div>
                </div>
            </div>
        </div>
        <IIF:FooterUtility runat="server" />
    </footer>
</div>

</div>