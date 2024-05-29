<%@ Control Language="C#" AutoEventWireup="true" CodeFile="List.ascx.cs" Inherits="Cross.Modules.ChildPageList.List" %>

<link rel="Stylesheet" href="/DesktopModules/CrossChildPageList/Template/KenDev/List_Standard.css" type="text/css" media="screen"/>
<%--<link rel="Stylesheet" href="/DesktopModules/CrossChildPageList/Template/BJH/List_Standard_Mobile.css" type="text/css" />--%>
<script src="/DesktopModules/CrossChildPageList/Template/BJH/js/bjh_child_page_list.js" type="text/javascript"></script>

<h2 class="subNavLeftMenuTitle">
	<a href='<%= DotNetNuke.Common.Globals.NavigateURL(ParentTab.TabID) %>'><%= ParentTab.TabName %></a>
</h2>

<div class="subNavLeftMenu">
	<asp:Repeater ID="rptSubTabList" runat="server">
		<HeaderTemplate>
			<ul>
		</HeaderTemplate>
		<ItemTemplate>		
			<%# RenderTabItem((DotNetNuke.Entities.Tabs.TabInfo)Container.DataItem)%>
		</ItemTemplate>
		<FooterTemplate>
			</ul>
		</FooterTemplate>
	</asp:Repeater>
</div>

<script type="text/javascript">
	(function ($) {
		$(function () {
			ChildPageList.init();
		});
	})(jQuery);
</script>
