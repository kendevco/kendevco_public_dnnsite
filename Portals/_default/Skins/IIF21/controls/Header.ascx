<%@ Control Language="C#" AutoEventWireup="false" Inherits="Engage.Dnn.Framework.SkinControlBase" %>
<%@ Register TagPrefix="IIF" TagName="NavGlobal" Src="NavGlobal.ascx" %>
<%@ Register TagPrefix="IIF" TagName="NavUtility" Src="NavUtility.ascx" %>
<%@ Register TagPrefix="dnn" TagName="Logo" Src="~/Admin/Skins/logo.ascx" %>
<%@ Register TagPrefix="dnn" TagName="SEARCH" Src="~/Admin/Skins/Search.ascx" %>
<%@ Register TagPrefix="dnn" TagName="User" Src="~/Admin/Skins/user.ascx" %>
<%@ Register TagPrefix="dnn" TagName="Login" Src="~/Admin/Skins/login.ascx" %>

<header class="site--header">
    <div class="header--container">
        <div class="site--logo">
            <dnn:Logo runat="server" id="dnnLogo" />
        </div>
        <button id="navToggle" class="header--nav-toggle toggle__nav" aria-controls="siteNav" aria-expanded="false">
            <div class="toggle-text">Menu</div>
            <div class="toggle-bars">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </div>
        </button>
        <div id="siteNav" class="site--nav" aria-controlledby="navToggle" aria-hidden="true">
            <div id="dnnSearch">
                <dnn:SEARCH runat="server" ShowSite="false" ShowWeb="false" Submit="Search"/>
            </div>

            <IIF:NavGlobal runat="server" />
            <IIF:NavUtility runat="server" />
        </div>
    </div>
</header>