<%@ Control Language="C#" AutoEventWireup="false" Inherits="Engage.Dnn.Framework.SkinControlBase" %>
<%@ Register TagPrefix="dnn" TagName="META" Src="~/Admin/Skins/Meta.ascx" %>
<%@ Register TagPrefix="dnn" TagName="JQUERY" Src="~/Admin/Skins/jQuery.ascx" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.Client.ClientResourceManagement" Assembly="DotNetNuke.Web.Client" %>
<%@ Register TagPrefix="dnn" TagName="JavaScriptLibraryInclude" src="~/Admin/Skins/JavaScriptLibraryInclude.ascx" %>
<%@ Register TagPrefix="instituteOfInternationalFinanceIif" TagName="SVG" src="SVG.ascx" %>

<dnn:META runat="server" Name="viewport" Content="width=device-width,initial-scale=1" />

<%-- Fonts & Icons --%>
<dnn:DnnCssInclude runat="server" FilePath="https://fonts.googleapis.com/css?family=Lato:400,700,900" />
<dnn:DnnCssInclude runat="server" FilePath="~/Resources/Libraries/fancybox/03_05_07/jquery.fancybox.min.css" />

<%-- Libraries --%>
<dnn:jQuery runat="server" />
<dnn:JavaScriptLibraryInclude runat="server" Name="html5shiv" Version="3.7.3" SpecificVersion="LatestMajor" />
<dnn:JavaScriptLibraryInclude runat="server" Name="respond-minmax" Version="1.4.2" SpecificVersion="LatestMajor" />
<dnn:JavaScriptLibraryInclude runat="server" Name="swiper" Version="4.4.1" SpecificVersion="LatestMajor" />
<dnn:JavaScriptLibraryInclude runat="server" Name="fancybox" Version="3.5.7" SpecificVersion="LatestMajor" />

<%-- Custom Scripts --%>
<dnn:DnnJsInclude runat="server" FilePath="js/theme.min.js" PathNameAlias="SkinPath" ForceProvider="DnnFormBottomProvider" />
<dnn:DnnJsInclude runat="server" FilePath="js/MainNav.min.js" PathNameAlias="SkinPath" ForceProvider="DnnFormBottomProvider" />

<%-- D3.js Data Driven Documents Script --%>
<script src="https://d3js.org/d3.v5.min.js"></script>

<%-- SVG --%>
<instituteOfInternationalFinanceIif:SVG runat="server" />