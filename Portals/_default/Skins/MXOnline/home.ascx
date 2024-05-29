<%@ Control Language="vb" AutoEventWireup="false" Explicit="True" Inherits="DotNetNuke.UI.Skins.Skin" %>
<!--#include file="layout-parts/registers.ascx" -->

<!--#include file="layout-parts/includes-top.ascx" -->

<!-- Header -->
<header class="header-home" role="banner">
    <!--#include file="layout-parts/navigation.ascx" -->
    <% If Not Request.QueryString("ctl") = "Terms" And Not Request.QueryString("ctl") = "Privacy" Then %>
    <div class="home-header bg-primary">
    	<div class="container text-center text-light">
            <div id="PageTitle" runat="server"></div>
    	</div>
    </div>
    <% End If %>
</header>

<!-- Page Content -->
<main role="main">
    <div class="container-fluid">
        <div class="row">
            <div id="ContentPane" class="col home-pane-contentpane" runat="server"></div>
        </div>
        <div class="row">
            <div id="TwoCol1" class="col-md home-pane-twocol1" runat="server"></div>
            <div id="TwoCol2" class="col-md home-pane-twocol2" runat="server"></div>
        </div>
        <div class="row">
            <div id="FullWidthBottom" class="col home-pane-fullwidthbottom" runat="server"></div>
        </div>
    </div>
</main>

<!-- Footer -->
<!--#include file="layout-parts/footer.ascx" -->

<!--#include file="layout-parts/includes-bottom.ascx" -->
