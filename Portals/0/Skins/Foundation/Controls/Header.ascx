<%@ Control Language="C#" AutoEventWireup="true" CodeFile="Header.ascx.cs" Inherits="Portals_0_Skins_Website_Controls_Header" %>
<%@ Register TagPrefix="dnn" TagName="MENU" Src="~/DesktopModules/DDRMenu/Menu.ascx" %>
<%@ Register TagPrefix="dnn" TagName="LOGO" Src="~/Admin/Skins/Logo.ascx" %>
<%@ Register TagPrefix="dnn" TagName="SEARCH" Src="~/Admin/Skins/Search.ascx" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.Client.ClientResourceManagement" Assembly="DotNetNuke.Web.Client" %>
<%@ Register TagPrefix="dnn" TagName="LOGIN" Src="~/Admin/Skins/Login.ascx" %>

<%--Google Search--%>
<% if (String.IsNullOrEmpty(Request.QueryString["Print"]))
   { %>
<script>
    (function () {
        var cx = '010350098472772863304:4ugeh_lyjou';
        var gcse = document.createElement('script');
        gcse.type = 'text/javascript';
        gcse.async = true;
        gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(gcse, s);
    })();
</script>
<% } %>

<!-- Header -->
<!-- Row 1: phone-->
<div class="row1 hidden-xs">
    <div class="container">
        <div class="col-md-6 col-sm-7 row1Left">
            <span>Find A Doctor or Make An Appointment: </span>
            <a class="tel" href="tel:6369169000">636.916.9000</a>
        </div>
        <div class="col-md-6 col-sm-5 row1Right">General Information: <a href="tel:6369289355" class="tel">636.928.WELL</a></div>
    </div>
</div>

<!-- Row 2: Logo & Search-->
<div class="row2 logoRow">
    <div class="container">
        <div class="row grid">
            <div class="col-md-3 col-sm-3 row2Left">
                <div class="row mHeader">
                    <div class="col-xs-1 visible-xs mHeaderL"><a data-toggle=".push" class="mOpen" href="#"><span class="icon-menu"></span><span class="iconLabel">Menu</span> </a></div>
                    <div class="col-sm-12 col-xs-10 mHeaderM">
                        <a href="/Foundation">
                            <img alt="" src="<%= SkinPath %>images/foundation-logo.png"></a>
                    </div>
                    <div class="col-xs-1 visible-xs mHeaderR"><a data-target="#modalContact" data-toggle="modal" class="mCall"><span class="icon-phone"></span><span class="iconLabel">Call</span> </a></div>
                </div>
            </div>
            <div class="col-md-4 col-sm-5 hidden-xs row2mid">
                <%--Nothing--%>
            </div>
            <div class="col-md-5 col-sm-4 row2right">
                <div class="input-group">
                    <input type="search" id="gcse-search" placeholder="Search...">
                    <input type="button" id="search-button" value="Go">
                </div>
                <div class="hidden-xs contactWrap">
                    <a href="/get-directions" style="display: none"><span class="icon-get-directions"></span>&nbsp;Get Directions</a><a href="/Foundation/Contact-Us"><span class="icon-contact"></span>&nbsp;Contact Us</a>
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
                <li class="navItem first" id="physicians">
                    <div class="navdrop">
                        <a href="/Foundation/About"><span class="nav-text">ABOUT</span><span class="icon-arrow-right-generic visible-xs"></span></a>
                        <div class="nav-line">&nbsp;</div>
                    </div>
                    <%= LoadSubPages(177) %>
                    <%--<div class="dropBox">
                        <div class="row">
                            <div class="col-md-4 col-sm-4">
                                <ul>
                                    <li class="line"><a href="/Foundation/About/Annual-Report">
                                        <h4>Annual Report</h4>
                                    </a></li>                                    
                                    <li class="line"><a href="/Foundation/About/Funding-Request">
                                        <h4>Funding Request</h4>
                                    </a></li>
                                </ul>                                
                            </div>
                            <div class="col-md-4 col-sm-4">
                                <ul>                                    
                                    <li class="line"><a href="http://www.bjc.org/About-Us/Vendor-Information" target="_blank">
                                        <h4>Vendor Information</h4>
                                    </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>--%>
                </li>
                <li class="navvert">
                    <div class="vert"></div>
                </li>
                <li class="navItem" id="medicalservices">
                    <div class="navdrop">
                        <a href="/Foundation/Events"><span class="nav-text">EVENTS</span><span class="icon-arrow-right-generic visible-xs"></span></a>                         
                        <div class="nav-line">&nbsp;</div>
                    </div>
                    <%= LoadSubPages(178) %>
                    <%--<div class="dropBox">
                        <div class="row">
                            <div class="col-md-4 col-sm-4">
                                <ul>
                                    <li class="line"><a href="/Foundation/Events/Day-of-Play">
                                        <h4>Day of Play</h4>
                                    </a></li>
                                    <li class="line"><a href="/Foundation/Events/Golf-Tournament">
                                        <h4>Golf Tournament</h4>
                                    </a></li>
                                </ul>
                            </div>
                            <div class="col-md-4 col-sm-4">
                                <ul>
                                    <li class="line"><a href="/Foundation/Events/Health-Healing-and-Hope-Gala">
                                        <h4>Health, Healing + Hope Gala</h4>
                                    </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>--%>
                </li>
                <li class="navvert">
                    <div class="vert"></div>
                </li>
                <li class="navItem" id="patientsvisitors">
                    <div class="navdrop">
                        <a href="/Foundation/Get-Involved"><span class="nav-text">GET INVOLVED</span><span class="icon-arrow-right-generic visible-xs"></span></a>                        
                        <div class="nav-line add">&nbsp;</div>
                    </div>
                    <%= LoadSubPages(184) %>
                </li>
                <li class="navvert">
                    <div class="vert"></div>
                </li>
                <li class="navItem" id="classesandevents">
                    <div class="navdrop">
                        <a href="/Foundation-Home/Meet-Our-Board"><span class="nav-text">MEET OUR BOARD</span><span class="icon-arrow-right-generic visible-xs"></span></a>                        
                        <div class="nav-line">&nbsp;</div>
                    </div>
                    <%= LoadSubPages(180) %>
                </li>
                <li class="navvert">
                    <div class="vert"></div>
                </li>
                <li class="navItem last" id="giving">
                    <div class="navdrop">
                        <a href="/Foundation/Giving" ><span class="nav-text">Giving</span><span class="icon-arrow-right-generic visible-xs"></span></a>
                        <div class="nav-line nav-line-right">&nbsp;</div>
                        <div style="clear: both"></div>
                    </div>
                    <%= LoadSubPages(185) %>
                    <%--<div class="dropBox">
                        <div class="row">
                            <div class="col-md-4 col-sm-4">
                                <ul>
                                    <li class="line"><a href="/Foundation/Giving/Donate-Now">
                                        <h4>Donate Now</h4>
                                    </a></li>
                                </ul>
                            </div>                            
                        </div>
                    </div>--%>
                </li>
            </ul>
            <ul class="visible-xs contactWrapM">
                <li><a href="/Foundation/Contact-Us"><span class="icon-contact"></span><span>Contact Us</span><span class="icon-arrow-right-generic"></span></a></li>
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
                        Find A Doctor or Make<br>
                        An Appointment<br>
                        <div class="phone-number"><a href="tel:6369289355">636.928.WELL</a></div>
                    </div>
                </div>
                <div class="mBtn">
                    <div class="mBtnLeft"><span class="icon-phone"></span></div>
                    <div class="mBtnRight genInfo">
                        General Information<br>
                        <div class="phone-number"><a href="tel:6369169000">636.916.9000</a></div>
                    </div>
                </div>
                <a data-dismiss="modal" class="btnBlue btnMd">Cancel</a>
            </div>
        </div>
    </div>
</div>

<script type="text/javascript">
    $(document).ready(function () {
        var rootId = '<%= RootTabName %>';
        $("#navmenu > li").each(function () {
            if (this.id == rootId) {
                $(this).addClass("active");
            }
        });
    });
</script>
