<%@ Control Language="C#" AutoEventWireup="false" Inherits="Engage.Dnn.Framework.SkinControlBase" %>
<%@ Register TagPrefix="dnn" TagName="LOGO" Src="~/Admin/Skins/Logo.ascx" %>
<%@ Register TagPrefix="dnn" TagName="SEARCH" Src="~/Admin/Skins/Search.ascx" %>
<%@ Register TagPrefix="dnn" TagName="MENU" src="~/DesktopModules/DDRMenu/Menu.ascx" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.DDRMenu.TemplateEngine" Assembly="DotNetNuke.Web.DDRMenu" %>

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
                        <li><a href="/about" title="About the IIF">About the IIF</a></li>
                        <li><a href="/ceo-corner" title="CEO Corner">CEO Corner</a></li>
                    </ul>
                </nav>
                <div class="header--search"><dnn:Search runat="server" id="dnnSearch" ShowSite="false" ShowWeb="false" /></div>
            </div>
            <div class="row--column navbar--menus">
                <nav class="header--main-nav"><dnn:MENU runat="server" MenuStyle="menus/mainNav" ExcludeNodes="Theme" /></nav>
            </div>
        </div>
    </div>
</div>

