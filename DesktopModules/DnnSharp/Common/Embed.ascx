<%@ Control Language="c#" AutoEventWireup="false" Explicit="True" Inherits="DotNetNuke.UI.Skins.Skin" %>
<%@ Register TagPrefix="paa" Namespace="DotNetNuke.Web.Client.ClientResourceManagement" Assembly="DotNetNuke.Web.Client" %>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
<paa:DnnCssInclude ID="Bootstrap5CSS" runat="server" FilePath="~/DesktopModules/DnnSharp/Common/static/bootstrap5/css/bootstrap.min.css" Priority="12" />
<paa:DnnJsInclude ID="Bootstrap5JS" runat="server" FilePath="~/DesktopModules/DnnSharp/Common/static/bootstrap5/js/bootstrap.bundle.min.js" />

<style>
    body {
        font-family: Mulish;
        padding: 20px;
    }
</style>

<div id="ContentPane" class="contentPane" runat="server" style="width: 100%; height: 100%;"></div>
