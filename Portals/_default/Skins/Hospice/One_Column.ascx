<%@ Control Language="vb" AutoEventWireup="false" Explicit="True" Inherits="DotNetNuke.UI.Skins.Skin" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.UI.Skins" Assembly="DotNetNuke" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.Client.ClientResourceManagement" Assembly="DotNetNuke.Web.Client" %>
<%@ Register TagPrefix="ctl" TagName="Header" Src="controls/Header.ascx" %>
<%@ Register TagPrefix="ctl" TagName="Footer" Src="controls/Footer.ascx" %>
<%@ Register TagPrefix="dnn" TagName="SEARCH" Src="~/Admin/Skins/Search.ascx" %>
<link href="https://fonts.googleapis.com/css?family=Droid+Sans:400,700|Lato:100,300,400,700,900,100italic,300italic,400italic,700italic,900italic|Droid+Serif:400,700,700italic,400italic|Ultra|Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800" rel="stylesheet" type="text/css">



<!-- Global Wrapper -->
<!-- ============================================= -->
<div id="wrapper" class="animsition">

    <!-- Header -->
    <ctl:Header runat="server" ID="Header" />
    <!-- ============================================= -->


    <div id="BannerPane" runat="server" class="banner-pane">
    </div>

    <section class="section section-medium mt20">
        <div id="ContentPane" runat="server" class="content-pane">
        </div>
    </section>

    <section class="section-bg p0 mt70 sm-mt50 bg-img stellar bg49" data-stellar-background-ratio="0.2">
        <div class="bg-overlay gradient-1"></div>
        <div class="container">
            <div class="row col-p30">
                <div class="col-sm-8 col-md-6">
                    <div class="bg-box light-default br0">
                        <div class="mb12 mt0">
                            <div id="FormPane" runat="server" class="form-pane">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="shadow3"></div>

    <!-- Footer -->
    <!-- ============================================= -->
    <ctl:Footer runat="server" ID="Footer" />



</div>
<!-- END Global Wrapper -->

<!-- ============================================= -->
<!-- Do not remove this -->
<div class="check-media"></div>



