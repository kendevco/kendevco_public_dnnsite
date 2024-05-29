<!--#include file="Includes/Header.ascx" -->

<div class="main-rows">
  <div id="MessagingPane" runat="server" class="segment"></div>
  
  <%-- Show breadcrumb if current page is not Home or 1st level nav --%>
  <% if (PortalSettings.ActiveTab.BreadCrumbs.Count > 1) { %>
    <%--<div class="ui container">
      <div class="ui basic segment page-title">
        <div class="breadcrumb-wrapper body-copy">
          <dnn:BREADCRUMB runat="server" id="dnnBreadcrumb"
             CssClass="breadcrumb" 
             RootLevel="0" 
             Separator="<span class='separator'>&gt;</span>" 
           />
        </div>
      </div>
    </div>--%>
  <% } %>

  <%-- Show page title if not Home --%>
  <% if (PortalSettings.ActiveTab.TabID != 41) { %>
    <div class="ui container">
      <div class="ui basic segment page-title">
         <% if (PortalSettings.ActiveTab.BreadCrumbs.Count > 1) { %>
        <div class="breadcrumb-wrapper body-copy">
          <dnn:BREADCRUMB runat="server" id="BREADCRUMB1"
             CssClass="breadcrumb" 
             RootLevel="0" 
             Separator="<span class='separator'>&gt;</span>" 
           />
        </div>
         <% } else { %>
        <div class="breadcrumb-wrapper body-copy">
          
        </div>
         <% } %>
      </div>
      <div class="">
        <h1 class="title-text"><%=PortalSettings.ActiveTab.TabName %></h1>
      </div>
    </div>
  <% } %>

  <div class="ui container">
    <div id="ContentPane" runat="server" class="ui basic segment"></div>
    <div id="RowOne" runat="server" class="ui basic segment"></div> 
    <div id="RowTwo" runat="server" class="ui basic segment"></div>
    <div id="RowThree" runat="server" class="ui basic segment"></div>
  </div>

  <div id="RowFour" runat="server" class="segment"></div>
</div>

<!--#include file="Includes/Footer.ascx" -->