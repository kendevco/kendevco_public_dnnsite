<%@ Control Language="C#" AutoEventWireup="true" CodeFile="ChildPageList.ascx.cs" Inherits="Portals_0_Skins_BJH_controls_ChildPageList" %>
<%--From ChildPageList module--%>
<link rel="Stylesheet" href="/DesktopModules/CrossChildPageList/Template/Phanstek/List_Standard.css" type="text/css" />
<script src="/DesktopModules/CrossChildPageList/Template/Phanstek/js/bjh_child_page_list.js" type="text/javascript"></script>

<h2 class="subNavLeftMenuTitle">
    <asp:HyperLink runat="server" ID="lnkTop"></asp:HyperLink>
</h2>

<asp:Literal runat="server" ID="ltrChildPageList"></asp:Literal>

<script type="text/javascript">
    (function ($) {
        $(function () {
            ChildPageList.init();
        });
    })(jQuery);
</script>
