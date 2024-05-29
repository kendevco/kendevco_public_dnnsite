<%@ Control Language="C#" AutoEventWireup="false" Inherits="Engage.Dnn.Framework.SkinControlBase" %>
<%@ Register TagPrefix="dnn" TagName="SEARCH" Src="~/Admin/Skins/Search.ascx" %>
<%@ Register TagPrefix="dnn" TagName="MENU" src="~/DesktopModules/DDRMenu/Menu.ascx" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.DDRMenu.TemplateEngine" Assembly="DotNetNuke.Web.DDRMenu" %>

<div class="header--navbar  header--navbar__mobile">
    <div class="container">
        <div class="row">
            <div class="row--column navbar--menus ">
                <nav class="header--top-nav" role="navigation">
                    <ul>
                        <li><a href="/press" title="Press">Press</a></li>
                        <li><a href="/careers" title="Careers">Careers</a></li>
                        <li><a href="/about" title="About the IIF">About the IIF</a></li>
                        <li><a href="/ceo-corner" title="CEO Corner">CEO Corner</a></li>
                    </ul>
                </nav>
                <div class="header--search"><dnn:Search runat="server" id="dnnSearch" ShowSite="false" ShowWeb="false" /></div>
                <nav class="header--main-nav"><dnn:MENU runat="server" MenuStyle="menus/mainNav" ExcludeNodes="Theme" /></nav>
            </div>
        </div>
    </div>
</div>

