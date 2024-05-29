<%@ Control Language="C#" AutoEventWireup="false" Inherits="Engage.Dnn.Framework.SkinControlBase" %>
<%@ Register TagPrefix="dnn" TagName="Login" Src="~/Admin/Skins/login.ascx" %>

<div class="utility-nav">
    <!-- Utility Links -->
    <a href="#" title='Press'>Press</a>
    <a href="#" title='Careers'>Careers</i></a>
    <a href="#" title='About the IIF'>About The IIF</a>
    <dnn:Login runat="server" CssClass="button button__accent" id="dnnLogin" />
    <!--<a href="#" title='Sign In' class="button button__accent">Sign In</a>-->
</div>