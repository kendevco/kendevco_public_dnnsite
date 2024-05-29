<%@ Control Language="C#" AutoEventWireup="true" CodeFile="Header.ascx.cs" Inherits="Portals_0_Skins_Website_Controls_Header" %>
<%@ Register TagPrefix="dnn" TagName="MENU" Src="~/DesktopModules/DDRMenu/Menu.ascx" %>
<%@ Register TagPrefix="dnn" TagName="LOGO" Src="~/Admin/Skins/Logo.ascx" %>
<%@ Register TagPrefix="dnn" TagName="SEARCH" Src="~/Admin/Skins/Search.ascx" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.Client.ClientResourceManagement" Assembly="DotNetNuke.Web.Client" %>
<%@ Register TagPrefix="dnn" TagName="LOGIN" Src="~/Admin/Skins/Login.ascx" %>

<%--Google Search--%>
<% if (String.IsNullOrEmpty(Request.QueryString["Print"]))
   { %>

<script src="https://iqapp.inquicker.com/assets/hold_my_place.js"></script>

<script>
    (function () {
        var cx = '005103968578414331976:rygjrawyaio';
        var gcse = document.createElement('script');
        gcse.type = 'text/javascript';
        gcse.async = true;
        gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
            '//cse.google.com/cse.js?cx=' + cx;
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(gcse, s);
    })();
</script>
<% } %>

<!-- Header -->
<!-- Keeping Yourself Safe Bar -->
<div id="coronavirus-bar"><a href="https://www.bjc.org/coronavirus" target="_blank">CORONAVIRUS (COVID-19):  CHECK HERE FOR UPDATES AND A FREE RISK SCREENING ></a></div>

<!-- Row 1: phone-->
<div class="row1 hidden-xs">
    <div class="container">
        <div class="col-md-6 col-sm-7 row1Left">
            <span>Find a doctor or make an appointment: </span>
            <a href="tel:6369289355" class="tel">636.928.WELL</a>
        </div>
        <div class="col-md-6 col-sm-5 row1Right">General Information: <a class="tel" href="tel:8003920936">800.392.0936</a></div>
    </div>
</div>

<!-- Row 2: Logo & Search-->
<div class="row2 logoRow">
    <div class="container">
        <div class="row grid">
            <div class="col-md-3 col-sm-3 row2Left">
                <div class="row mHeader">
                    <div class="col-sm-12 col-xs-12 mHeaderM">
                        <a href="/">
                            <img width="100%" alt="" src="<%= SkinPath %>images/logo.jpg"></a>
                    </div>
                </div>
                <div class="row mHeader secondary-menu">
                    <div class="col-xs-4 visible-xs mobile-icon-container">
                        <a href="https://www.bjc.org/For-Patients-Visitors/MyChart" target="_blank" class="flex mychart">
                            <div class="icon-mychart"></div>
                            <span class="iconLabel">MyChart</span></a>
                    </div>
                    <div class="col-xs-4 visible-xs mobile-icon-container">
                        <a data-target="#modalContact" data-toggle="modal" class="flex">
                            <span class="icon-phone"></span>
                            <span class="iconLabel">Call</span> </a>
                    </div>
                    <div class="col-xs-4 visible-xs mobile-icon-container">
                        <a id="mobile-search-icon" class="flex search">
                            <div class="icon-search"></div>
                            <span class="iconLabel">Search</span></a>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-5 hidden-xs row2mid">
                <%--Nothing--%>
            </div>
            <div class="col-md-5 col-sm-7 hidden-xs row2right">
                <div class="my-chart-container">
                        <a href="https://www.bjc.org/For-Patients-Visitors/MyChart" class="my-chart-button" target="_blank"><div class="icon"></div> MyChart</a>
                </div>
                <div class="input-group">
                    <input type="search" id="gcse-search" placeholder="Search...">
                    <input type="button" id="search-button" value="Go">
                </div>
                <div class="hidden-xs contactWrap">
                    <a href="/get-directions"><span class="icon-get-directions"></span>&nbsp;Get Directions</a><a href="/contact-us"><span class="icon-contact"></span>&nbsp;Contact Us</a>
                </div>
            </div>
            </div>
        </div>
    </div>
</div>

<!-- Row 3: Top Menu -->
<div class="mainHeader">
    <div class="container">
        <nav id="mainNav">
            <ul id="navmenu">
                <li class="navItem first" id="bjsph">
                    <div class="navdrop">
                        <a href="http://www.bjsph.org/" target="_blank"><span class="nav-text">Barnes-Jewish St. Peters Hospital</span><span class="icon-arrow-right-generic visible-xs"></span></a>
                        <div class="nav-line bjsph">&nbsp;</div>
                    </div>
                </li>
                <li class="navvert">
                    <div class="vert"></div>
                </li>
                <li class="navItem" id="pwh">
                    <div class="navdrop">
                        <a href="http://www.progresswest.org/" target="_blank"><span class="nav-text">Progress West Hospital</span><span class="icon-arrow-right-generic visible-xs"></span></a>                         
                        <div class="nav-line pwh">&nbsp;</div>
                    </div>
                </li>
                <li class="navvert">
                    <div class="vert"></div>
                </li>
                <li class="navItem" id="community-events">
                    <div class="navdrop">
                        <a href="/Events"><span class="nav-text">Community Events</span><span class="icon-arrow-right-generic visible-xs"></span></a>                        
                        <div class="nav-line community-events">&nbsp;</div>
                    </div>
                </li>
                <li class="navvert">
                    <div class="vert"></div>
                </li>
                <li class="navItem last" id="giving">
                    <div class="navdrop">
                        <a href="/Foundation"><span class="nav-text">Giving</span><span class="icon-arrow-right-generic visible-xs"></span></a>                        
                        <div class="nav-line nav-line-right">&nbsp;</div>
                    </div>
                </li>
            </ul>
            <ul class="visible-xs contactWrapM">
                <li><a href="/About/Directions-and-Campus-Maps"><span class="icon-get-directions"></span><span>Get Directions</span><span class="icon-arrow-right-generic"></span></a></li>
                <li><a href="/Contact-Us"><span class="icon-contact"></span><span>Contact Us</span><span class="icon-arrow-right-generic"></span></a></li>
            </ul>
        </nav>
    </div>
</div>

<%--Mobile Push Overlay--%>
<div class="overlay"></div>

<!-- Modal Contact Box on mobile-->
<div aria-hidden="false" aria-labelledby="modalContact" role="dialog" tabindex="-1" id="modalContact" class="modal">
    <div class="modal-contact">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Call Us</h4>
            </div>
            <div class="modal-body">
                <div class="mBtn">
                    <div class="mBtnLeft"><span class="icon-phone"></span></div>
                    <div class="mBtnRight">
                        Find a Doctor or Make<br>
                        an Appointment<br>
                        <div class="phone-number"><a href="tel:6369289355">636.928.WELL</a></div>
                    </div>
                </div>
                <div class="mBtn">
                    <div class="mBtnLeft"><span class="icon-phone"></span></div>
                    <div class="mBtnRight genInfo">
                        General Information<br>
                        <div class="phone-number"><a href="tel:8003920936">800.392.0936</a></div>
                    </div>
                </div>
                <a data-dismiss="modal" class="btnBlue btnMd">Cancel</a>
            </div>
        </div>
    </div>
</div>

<!-- Row 3: Top Menu -->

