<%@ Control Language="C#" AutoEventWireup="false" Inherits="Engage.Dnn.Framework.SkinControlBase" %>
<%@ Import Namespace="DotNetNuke.Web.Client" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.Client.ClientResourceManagement" Assembly="DotNetNuke.Web.Client" %>

<%-- Font Awesome 5 Pro --%>
<dnn:DnnCssInclude runat="server" FilePath="fontawesome/css/all.min.css" PathNameAlias="SkinPath" Name="font-awesome" Version="5.11.2" Priority="<%#FileOrder.Css.DefaultCss + 1%>" />
<dnn:DnnCssInclude runat="server" FilePath="fontawesome/css/v4-shims.min.css" PathNameAlias="SkinPath" Name="font-awesome.v4-shims" Version="5.11.2" Priority="<%#FileOrder.Css.DefaultCss + 2%>" />
<dnn:DnnCssInclude runat="server" FilePath="fontawesome/css/solid.min.css" PathNameAlias="SkinPath" Name="font-awesome.solid" Version="5.11.2" Priority="<%#FileOrder.Css.DefaultCss + 2%>" />