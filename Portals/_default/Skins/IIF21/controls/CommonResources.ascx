<%@ Control Language="C#" AutoEventWireup="false" Inherits="Engage.Dnn.Framework.SkinControlBase" %>
<%@ Register TagPrefix="dnn" TagName="META" Src="~/Admin/Skins/Meta.ascx" %>
<%@ Register TagPrefix="dnn" TagName="JQUERY" Src="~/Admin/Skins/jQuery.ascx" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.Client.ClientResourceManagement" Assembly="DotNetNuke.Web.Client" %>
<%@ Import Namespace="FileOrder=DotNetNuke.Web.Client.FileOrder" %>
<%@ Register TagPrefix="dnn" TagName="JavaScriptLibraryInclude" src="~/Admin/Skins/JavaScriptLibraryInclude.ascx" %>
<%@ Register TagPrefix="IIF" TagName="SVG" src="SVG.ascx" %>
<%@ Register TagPrefix="IIF" TagName="FontAwesome" src="../fontawesome/FontAwesome.ascx" %>

<dnn:META runat="server" Name="viewport" Content="width=device-width,initial-scale=1" />

<dnn:DnnCssInclude runat="server"
    FilePath="~/resources/shared/stylesheets/dnndefault/8.0.0/default.css"
    Priority="<%#FileOrder.Css.DefaultCss%>"
    Name="dnndefault"
    Version="8.0.0" />

<%-- Fonts & Icons --%>
<dnn:DnnCssInclude runat="server" FilePath="https://fonts.googleapis.com/css2?family=Martel:wght@300;400;700;900&amp;display=swap" />
<IIF:FontAwesome runat="server" />

<%-- Libraries --%>
<dnn:jQuery runat="server" />
<dnn:JavaScriptLibraryInclude runat="server" Name="html5shiv" Version="3.7.3" SpecificVersion="LatestMajor" />
<dnn:JavaScriptLibraryInclude runat="server" Name="swiper" Version="5.3.7" SpecificVersion="LatestMajor" />

<%-- Custom Scripts --%>
<dnn:DnnJsInclude runat="server" FilePath="js/theme.min.js" PathNameAlias="SkinPath" ForceProvider="DnnFormBottomProvider"/>

<%-- SVG --%>
<IIF:SVG runat="server" />

<script runat="server">
    protected override void OnInit(EventArgs e) {
        base.OnInit(e);

        AddGoogleFontsResourceHints();
    }

    private void AddGoogleFontsResourceHints() {
        this.Response.Headers.Add("Link", "<https://fonts.googleapis.com>; rel=preconnect,<https://fonts.gstatic.com>; rel=preconnect");
    }
</script>
