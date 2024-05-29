<!--#include file="Includes/Header.ascx" -->

<div class="main-rows">
  <div id="MessagingPane" runat="server" class="segment"></div>
  
  <%-- Show breadcrumb if current page is not Home or 1st level nav --%>
  <% if (PortalSettings.ActiveTab.BreadCrumbs.Count > 1) { %>
    <div class="ui container">
      <div class="ui basic segment page-title">
        <div class="breadcrumb-wrapper body-copy">
          <dnn:BREADCRUMB runat="server" id="dnnBreadcrumb"
             CssClass="breadcrumb" 
             RootLevel="0" 
             Separator="<span class='separator'>&gt;</span>" 
           />
        </div>
      </div>
    </div>
  <% } %>

  <div class="ui container your-impact">
    <div id="ContentPane" runat="server" class="ui basic segment"></div>
    <div id="RowOne" runat="server" class="ui basic segment row-one"></div> 

    <div class="ui basic segment">
      <div class="Normal">
        <a href="/your-impact" class="ui secondary button back-button">
            &lt; Back to Your Impact
        </a>
      </div>
    </div>
  </div>

  <div id="RowFour" runat="server" class="segment"></div>
</div>

<!--#include file="Includes/Footer.ascx" -->