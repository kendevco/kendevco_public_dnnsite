<%@ Control Language="C#" AutoEventWireup="true" CodeFile="Header.ascx.cs" Inherits="BJC.Skin.controls.Header" %>
<%@ Register TagPrefix="dnn" TagName="MENU" Src="~/DesktopModules/DDRMenu/Menu.ascx" %>
<%@ Register TagPrefix="dnn" TagName="LOGO" Src="~/Admin/Skins/Logo.ascx" %>
<%@ Register TagPrefix="dnn" TagName="SEARCH" Src="~/Admin/Skins/Search.ascx" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.Client.ClientResourceManagement" Assembly="DotNetNuke.Web.Client" %>


<!-- Header -->
<!-- ============================================= -->
<div class="header-floating header-floating-light menu-fixed-light menu-light-mobiles menu-light menu-border">
    <div class="topbar topbar-transparent mt10 mb0">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <p class="text-2 mb10">

                        <span class="mr10">
                            <!--<i class="icon icon_phone"></i>-->
                            <i class="icon_mail"></i>&nbsp;&nbsp;<a href="/Contact-Us">Contact Us</a></span>
                        <span class="mr30"><i class="icon_question_alt2"></i>&nbsp;&nbsp;<a href="/About-Us/FAQ">FAQ</a></span>
                    </p>
                        <a href="https://www.bjc.org/For-Patients-Visitors/MyChart" class="my-chart-button" target="_blank"><div class="icon"></div> MyChart</a>
                </div>

                <div class="clearfix">
                </div>

            </div>
        </div>
    </div>
    <header class="header-wrapper">
        <div class="main-header">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-med-12 col-lg-12">
                        <div class="menu-wrapper">
                            <div class="logo-wrapper">
                                <a href="/" class="logo">
                                    <img src="<%= SkinPath %>images/logo.png" class="logo-img logo-dark" alt="Logo">
                                </a>
                            </div>
                            <nav class="navbar-right">                            
                                <dnn:MENU ID="ddrMenu" MenuStyle="menu" runat="server"></dnn:MENU>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- END Main-Header -->
    </header>
</div>





