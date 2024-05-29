<%@ Control Language="C#" AutoEventWireup="false" Inherits="Engage.Dnn.Framework.SkinControlBase" %>
<%@ Register TagPrefix="dnn" TagName="META" Src="~/Admin/Skins/Meta.ascx" %>
<%@ Register TagPrefix="dnn" TagName="JQUERY" Src="~/Admin/Skins/jQuery.ascx" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.Client.ClientResourceManagement" Assembly="DotNetNuke.Web.Client" %>
<%@ Register TagPrefix="dnn" TagName="JavaScriptLibraryInclude" src="~/Admin/Skins/JavaScriptLibraryInclude.ascx" %>
<%@ Register TagPrefix="instituteOfInternationalFinanceIif" TagName="SVG" src="SVG.ascx" %>

<dnn:META runat="server" Name="viewport" Content="width=device-width,initial-scale=1" />

<%-- Libraries --%>
<dnn:jQuery runat="server" />
<dnn:JavaScriptLibraryInclude runat="server" Name="html5shiv" Version="3.7.3" SpecificVersion="LatestMajor" />

<%-- Custom Scripts --%>
<dnn:DnnJsInclude runat="server" FilePath="js/theme.min.js" PathNameAlias="SkinPath" ForceProvider="DnnFormBottomProvider" />
<dnn:DnnJsInclude runat="server" FilePath="js/MainNav.min.js" PathNameAlias="SkinPath" ForceProvider="DnnFormBottomProvider" />

<%-- SVG --%>
<instituteOfInternationalFinanceIif:SVG runat="server" />