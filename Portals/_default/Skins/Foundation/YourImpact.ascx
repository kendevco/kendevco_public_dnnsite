<!--#include file="Includes/Header.ascx" -->

<div class="main-rows">
  <div id="MessagingPane" runat="server" class="segment"></div>

  <div class="ui container">
      <div class="breadcrumb-wrapper body-copy">
          
        </div>
    <div class="ui basic segment your-impact-title">
      <h1 class="body-copy"><%=PortalSettings.ActiveTab.TabName %></h1>
    </div>
  </div>

  <div class="ui container">
    <div id="ContentPane" runat="server" class="ui basic segment"></div>

    <ul class="impact-filter-options">
     <li><a data-category="all" class="active" href="#">All</a></li>
     <li><a data-category="cancer" href="#">Cancer</a></li>
     <li><a data-category="heart" href="#">Heart and Vascular</a></li>
     <li><a data-category="organ" href="#">Organ Transplant</a></li>
     <li><a data-category="hospice" href="#">Hospice</a></li>
     <li><a data-category="neurology" href="#">Neurology &amp; Neurosurgery</a></li>
     <li><a data-category="orthopedics" href="#">Orthopedics</a></li>
     <li><a data-category="nursing" href="#">Nursing Scholarships</a></li>
     <li><a data-category="other" href="#">Other</a></li>
    </ul>

    <div class="ui basic segment impact-select-wrapper">
      <div class="body-copy">
        <select id="impact-filter-select">
          <option value="all">All</option>
          <option value="cancer">Cancer</option>
          <option value="heart">Heart and Vascular</option>
          <option value="organ">Organ Transplant</option>
          <option value="hospice">Hospice</option>
          <option value="neurology">Neurology &amp; Neurosurgery</option>
          <option value="orthopedics">Orthopedics</option>
          <option value="nursing">Nursing Scholarships</option>
          <option value="other">Other</option>
        </select>
       </div>
    </div>

    <div id="RowOne" runat="server" class="ui basic segment"></div> 
  </div>
</div>

<!--#include file="Includes/Footer.ascx" -->

