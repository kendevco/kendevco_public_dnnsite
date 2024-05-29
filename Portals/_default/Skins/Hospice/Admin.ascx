<%@ Control Language="vb" AutoEventWireup="false" Explicit="True" Inherits="DotNetNuke.UI.Skins.Skin" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.UI.Skins" Assembly="DotNetNuke" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.Client.ClientResourceManagement" Assembly="DotNetNuke.Web.Client" %>
<%@ Register TagPrefix="ctl" TagName="Header" Src="controls/Header.ascx" %>
<%@ Register TagPrefix="ctl" TagName="Footer" Src="controls/Footer.ascx" %>
<link href="https://fonts.googleapis.com/css?family=Droid+Sans:400,700|Lato:100,300,400,700,900,100italic,300italic,400italic,700italic,900italic|Droid+Serif:400,700,700italic,400italic|Ultra|Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800" rel="stylesheet" type="text/css">



<!-- Global Wrapper -->
<!-- ============================================= -->
<div id="wrapper" class="animsition static-menu admin">

    <!-- Header -->
    <ctl:Header runat="server" ID="Header" />
    <!-- ============================================= -->
    <section class="section section-medium mt20">
        <div class="container">
            <div id="ContentPane" runat="server" class="content-pane">
            </div>
        </div>
    </section>
    <!-- Footer -->
    <!-- ============================================= -->
    <ctl:Footer runat="server" ID="Footer" />



</div>
<!-- END Global Wrapper -->

<!-- ============================================= -->
<!-- Do not remove this -->
<div class="check-media"></div>

