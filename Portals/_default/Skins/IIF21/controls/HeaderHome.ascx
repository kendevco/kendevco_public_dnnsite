<%@ Control Language="C#" AutoEventWireup="false" Inherits="Engage.Dnn.Framework.SkinControlBase" %>
<%@ Register TagPrefix="IIF" TagName="NavGlobal" Src="NavGlobal.ascx" %>
<%@ Register TagPrefix="IIF" TagName="NavUtility" Src="NavUtility.ascx" %>
<%@ Register TagPrefix="dnn" TagName="Logo" Src="~/Admin/Skins/logo.ascx" %>
<%@ Register TagPrefix="dnn" TagName="SEARCH" Src="~/Admin/Skins/Search.ascx" %>
<%@ Register TagPrefix="dnn" TagName="User" Src="~/Admin/Skins/user.ascx" %>
<%@ Register TagPrefix="dnn" TagName="Login" Src="~/Admin/Skins/login.ascx" %>

<header class="site--header site--header__home">
    <div class="header--container">
        <div class="site--logo">
            <a href="/" title="IIF Home Page"><img src="/Portals/_default/Skins/IIF21/images/logos/logo-white.png" alt="IIF Logo" /></a>
        </div>
        <button id="navToggle" class="header--nav-toggle toggle__nav" aria-controls="siteNav" aria-expanded="false">
            <div class="toggle-bars">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </div>
        </button>
        <div id="siteNav" class="site--nav" aria-controlledby="navToggle" aria-hidden="true">
            <IIF:NavGlobal runat="server" />
        </div>
    </div>
</header>