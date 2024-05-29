<%@ page language="C#" autoeventwireup="true" inherits="avt.ActionForm.ManageNew" CodeBehind="Manage.aspx.cs" enabletheming="false" stylesheettheme="" theme="" %>

<%@ import namespace="avt.ActionForm.Core" %>
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml" data-ng-app="ActionForm" class="bstrap30 bstrap3-material">
<head runat="server">
    <title><%# Module.ModuleTitle %> | Manage Form</title>
    <meta name="robots" content="noindex">
    <link type="text/css" rel="stylesheet" href='<%# ResolveCommonInclude("fonts/mulish/mulish.css") %>' />
    <link type="text/css" rel="stylesheet" href='<%# ResolveCommonInclude("fonts/material-icons/material-icons.css") %>' />

    <link type="text/css" rel="stylesheet" href="<%# ResolveCommonInclude("/bootstrap-material/css/bootstrap.min.css") %>" />

    <link type="text/css" rel="stylesheet" href="<%= ResolveCommonInclude("/angular15/textAngular.css") %>" />
    <link type="text/css" rel="stylesheet" href="<%= ResolveCommonInclude("/font-awesome/css/font-awesome.css") %>" />
    <link type="text/css" rel="stylesheet" href="<%= ResolveCommonInclude("/bs-date-time/bootstrap-timepicker.css") %>" />
    <link type="text/css" rel="stylesheet" href="<%= ResolveCommonInclude("/bs-date-time/bootstrap-datepicker.css") %>" />
    <link type="text/css" rel="stylesheet" href="<%= ResolveCommonInclude("/dnnsf/css/tpl-common.css") %>" />
    <link type="text/css" rel="stylesheet" href="<%= ResolveCommonInclude("/codemirror/codemirror.min.css") %>" />
    <link type="text/css" rel="stylesheet" href="<%= ResolveCommonInclude("/plant-an-app/css/papp-admin.min.css", "/plant-an-app/css/papp-admin.css")%>" />
    <link type="text/css" rel="stylesheet" href="<%= ResolveInclude("/admin.min.css", "/admin.css") %>" />

    <script>
        var g_resourceVersion = '<%# AppInfo.Build %>';
    </script>
</head>
<body class="papp-admin" data-spy="scroll" data-target=".navbar" data-offset="0">
    <form id="form1" runat="server">
        <asp:PlaceHolder ID="BodySCRIPTS" runat="server" />

        <div data-ng-controller="FormCtrl">
            <div data-ng-include="'static/settings/main.html?v=' + sharedData.resourceVersion"></div>
        </div>

        <asp:PlaceHolder runat="server" ID="ClientResourcesFormBottom" />
    </form>


    <%-- Scripts needed by DNN ServicesFramework --%>
    <script type="text/javascript" src='<%= ResolvePageUrl("~/js/MicrosoftAjax.js") %>'></script>
    <script type="text/javascript" src='<%= ResolvePageUrl("~/js/dnn.js") %>'></script>
    <script type="text/javascript" src='<%= ResolvePageUrl("~/js/dnn.servicesframework.js") %>'></script>
    <%-- END Scripts needed by DNN ServicesFramework --%>

    <script type="text/javascript" src='<%= ResolveCommonInclude("/polyfills/es6-promise.auto.min.js") %>'></script>
    <script type="text/javascript" src='<%= ResolveCommonInclude("/angular15/angular.min.js") %>'></script>
    <script type="text/javascript" src='<%= ResolveCommonInclude("/angular15/textAngular-rangy.min.js") %>'></script>
    <script type="text/javascript" src='<%= ResolveCommonInclude("/angular15/textAngular-sanitize.min.js") %>'></script>
    <script type="text/javascript" src='<%= ResolveCommonInclude("/angular15/textAngularSetup.js") %>'></script>
    <script type="text/javascript" src='<%= ResolveCommonInclude("/angular15/textAngular.min.js") %>'></script>
    <script type="text/javascript" src='<%= ResolveCommonInclude("/angular15/angular-animate.min.js") %>'></script>
    <script type="text/javascript" src='<%= ResolveCommonInclude("/jquery/jquery-ui.interactions.min.js") %>'></script>
    <script type="text/javascript" src='<%= ResolveCommonInclude("/bootstrap-material/js/bootstrap.min.js") %>'></script>
    <script type="text/javascript" src='<%= ResolveCommonInclude("/angular15/angular-sortable.min.js") %>'></script>
    <script type="text/javascript" src='<%= ResolveCommonInclude("/angular15/angular-spanresize.js") %>'></script>
    <script type="text/javascript" src='<%= ResolveCommonInclude("/angular15/bootstrap-select.min.js") %>'></script>
    <script type="text/javascript" src='<%= ResolveCommonInclude("/tinymce/tinymce.min.js") %>'></script>
    <script type="text/javascript" src='<%= ResolveCommonInclude("/angular15/angular-tinymce.js") %>'></script>
    <script type="text/javascript" src='<%= ResolveCommonInclude("/angular15/angular-dragdrop.js") %>'></script>
    <script type="text/javascript" src='<%= ResolveCommonInclude("/angular15/angular-strap.min.js") %>'></script>
    <script type="text/javascript" src='<%= ResolveCommonInclude("/bs-date-time/bootstrap-datepicker.js") %>'></script>
    <script type="text/javascript" src='<%= ResolveCommonInclude("/bs-date-time/bootstrap-timepicker.js") %>'></script>
    <script type="text/javascript" src='<%= ResolveCommonInclude("/js/lodash.min.js") %>'></script>
    <script type="text/javascript" src='<%= ResolveCommonInclude("/dnnsf/dnnsf.js") %>'></script>
    <script type="text/javascript" src='<%= ResolveCommonInclude("/dnnsf/dnnsf.admin.js") %>'></script>
    <script type="text/javascript" src='<%= ResolveInclude("/constants.js") %>'></script>
    <script type="text/javascript" src='<%= ResolveCommonInclude("/dnnsf/dnnsf.components.js") %>'></script>
    <script type="text/javascript" src='<%= ResolveCommonInclude("/codemirror/codemirror.min.js") %>'></script>
    <script type="text/javascript" src='<%= ResolveCommonInclude("/angular15/angular-codemirror.js") %>'></script>
    <script type="text/javascript" src='<%= ResolveInclude("/admin.js") %>'></script>


</body>
</html>
