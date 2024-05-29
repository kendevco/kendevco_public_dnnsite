<%@ Control Language="vb" AutoEventWireup="false" Explicit="True" Inherits="DotNetNuke.UI.Skins.Skin" %>
<!--#include file="layout-parts/registers.ascx" -->

<!--#include file="layout-parts/includes-top.ascx" -->

<!-- Header -->
<header role="banner">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="navbar-brand site-logo">
      	    <dnn:Logo ID="dnnLogo" runat="server" />
        </div>
    </nav>
</header>

<!-- Page Content -->
<main role="main">
    <div id="ContentPane" runat="server"></div>
    <div class="container mt-5">
		<div class="row">
			<div class="col-6 col-md-2 text-center">
    			<i class="fas fa-times fa-10x text-muted"></i>
			</div>
			<div class="col-6 col-md-4 pt-3">
			    <h1 class="text-primary"><strong>404</strong></h1>
			    <h2 class="text-secondary">page not found</h2>
			</div>
		</div>
        <br /><br /><br />
    </div>
</main>

<!-- Footer -->
<!--#include file="layout-parts/footer.ascx" -->

<!--#include file="layout-parts/includes-bottom.ascx" -->
