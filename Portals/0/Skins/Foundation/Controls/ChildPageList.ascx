<%@ Control Language="C#" AutoEventWireup="true" CodeFile="ChildPageList.ascx.cs" Inherits="Portals_0_Skins_BJH_controls_ChildPageList" %>
<%--From ChildPageList module--%>
<link rel="Stylesheet" href="/DesktopModules/CrossChildPageList/Template/Phanstek/List_Standard.css" type="text/css" />
<script src="/DesktopModules/CrossChildPageList/Template/Phanstek/js/bjh_child_page_list.js" type="text/javascript"></script>

<h2 class="subNavLeftMenuTitle">
    <asp:HyperLink runat="server" ID="lnkTop"></asp:HyperLink>
    <%--<a href='http://bjhtest.bjc.org/MedicalServices/Clinics'>Clinics</a>--%>
</h2>

<asp:Literal runat="server" ID="ltrChildPageList"></asp:Literal>

<%--<div class="subNavLeftMenu">
    <ul>

        <li class='menuLevel1 ' tabid='435' parenttabid='0'><a href='http://bjh.localhost.com/Medical-Services/Clinics/Center-for-Outpatient-Health' target=''>Center for Outpatient Health</a></li>

        <li class='menuLevel1 ' tabid='436' parenttabid='0'><a href='http://bjh.localhost.com/Medical-Services/Clinics/Obstetrics-and-Gynecology-Clinic' target=''>Obstetrics and Gynecology Clinic</a></li>

        <li class='menuLevel1 ' tabid='437' parenttabid='0'><a href='http://bjh.localhost.com/Medical-Services/Clinics/Primary-Care-Medicine-Clinic' target=''>Primary Care Medicine Clinic</a></li>

        <li class='menuLevel1 hasChild' tabid='438' parenttabid='0'><a href='http://bjh.localhost.com/Medical-Services/Clinics/Psychiatry-Clinic' target=''>Psychiatry Clinic</a><span class='expanded plusSign blue'>&nbsp;</span></li>

        <li class='menuLevel2 hasChild' tabid='444' parenttabid='438'><a href='http://bjh.localhost.com/Medical-Services/Clinics/Psychiatry-Clinic/Sub-Page-3' target=''>Sub Page 3</a><span class='expanded plusSign'>&nbsp;</span></li>

        <li class='menuLevel3 selected ' tabid='445' parenttabid='444'><a href='http://bjh.localhost.com/Medical-Services/Clinics/Psychiatry-Clinic/Sub-Page-3/Sub-Sub-Page' target=''>Sub Sub Page</a></li>

        <li class='menuLevel1 ' tabid='442' parenttabid='0'><a href='http://bjh.localhost.com/Medical-Services/Clinics/Test-Sub-page-1' target=''>Test Sub page 1</a></li>

        <li class='menuLevel1 ' tabid='443' parenttabid='0'><a href='http://bjh.localhost.com/Medical-Services/Clinics/Sub-Page-2' target=''>Sub Page 2</a></li>

        <li class='menuLevel1 ' tabid='439' parenttabid='0'><a href='http://bjh.localhost.com/Medical-Services/Clinics/Specialty-Care-Clinic' target=''>Specialty Care Clinic</a></li>

        <li class='menuLevel1 hasChild' tabid='440' parenttabid='0'><a href='http://bjh.localhost.com/Medical-Services/Clinics/Surgical-and-Wound-Care-Clinic' target=''>Surgical and Wound Care Clinic</a><span class='expanded plusSign green'>&nbsp;</span></li>

        <li class='menuLevel2 ' tabid='441' parenttabid='440'><a href='http://bjh.localhost.com/Medical-Services/Clinics/Surgical-and-Wound-Care-Clinic/-Hyperbaric-Oxygen-Therapy' target=''>Hyperbaric Oxygen Therapy</a></li>

    </ul>
</div>--%>

<script type="text/javascript">
    (function ($) {
        $(function () {
            ChildPageList.init();
        });
    })(jQuery);
</script>
