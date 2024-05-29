<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="Report.ascx.cs" Inherits="Christoc.Modules.EGreetingCard.Report" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.UI.WebControls" Assembly="DotNetNuke.Web" %>
<%@ Register TagName="label" TagPrefix="dnn" Src="~/controls/labelcontrol.ascx" %>
<link href="<%= ControlPath %>css/jquery-ui.css" rel="stylesheet" />


<script type="text/javascript">
    $(document).ready(function () {
        $('body').on('focus', "#<%= FromDatePicker.ClientID %>", function () {
            $(this).datepicker({
                changeMonth: true,
                changeYear: true
            });
        });
        $('body').on('focus', "#<%= ToDatePicker.ClientID %>", function () {
            $(this).datepicker({
                changeMonth: true,
                changeYear: true
            });
        });
    });
</script>

<div class="ecardNav">
    <asp:Image ID="backImg" runat="server" ImageUrl="~/DesktopModules/EGreetingCard/images/icon-arrow-left.png"
        CssClass="navImg" />
    <asp:LinkButton ID="linkBack" runat="server" CssClass="navLink" OnClick="linkBack_Click">Back</asp:LinkButton>
    <span class="separator">|</span>
    <asp:Image ID="cardImg" runat="server" ImageUrl="~/DesktopModules/EGreetingCard/images/export.png"
        CssClass="navImg" />
    <asp:LinkButton ID="linkExport" runat="server" CssClass="navLink" OnClick="linkExport_Click">Export Data</asp:LinkButton>
    <span class="separator">|</span>
    <asp:Image ID="addImg" runat="server" ImageUrl="~/DesktopModules/EGreetingCard/images/sending.png"
        CssClass="navImg" />
    <asp:LinkButton ID="linkSend" runat="server" CssClass="navLink" OnClick="linkSend_Click">Top Sending</asp:LinkButton>
    <%--<span class="separator">|</span>

    <asp:LinkButton ID="lnkLogoSetting" runat="server" CssClass="navLink" OnClick="lnkLogoSetting_Click">Logo Setting</asp:LinkButton>--%>
</div>

<asp:MultiView ID="multiView" runat="server">
    <asp:View runat="server" ID="ExportData">
        <div class="dnnForm export-form" id="form-demo">
            <h1 class="title">Export</h1>
            <asp:ValidationSummary ID="errorSummary" runat="server" CssClass="dnnFormMessage dnnFormValidationSummary" ValidationGroup="error" />
            <table>
                <tr>
                    <td class="label-col">
                        <asp:Label ID="lblFromDate" runat="server" CssClass="dnnFormLabel" AssociatedControlID="FromDatePicker" Text="From Date" /></td>
                    <td class="control-col">
                        <asp:TextBox ID="FromDatePicker" runat="server" />
                        <asp:RequiredFieldValidator ID="reqFromDatePicker" runat="server" ControlToValidate="FromDatePicker"
                            CssClass="dnnFormMessage dnnFormError" ErrorMessage="Start Date is required." Display="Dynamic" ValidationGroup="client" />
                        <asp:RegularExpressionValidator ID="reqExpValidator"
                            ValidationExpression="^([0-9]|0[1-9]|1[012])\/([0-9]|0[1-9]|[12][0-9]|3[01])\/(19|20)\d\d$"
                            ControlToValidate="FromDatePicker" ErrorMessage="Invalid Format. Use MM/DD/YYYY" runat="server"
                            ValidationGroup="client" CssClass="dnnFormMessage dnnFormError" Display="Dynamic" />
                        <%--<dnn:DnnDatePicker runat="server" CssClass="dnnFormInput" ID="FromDatePicker" />--%>
                    </td>
                    <td class="label-col">
                        <asp:Label ID="lblToDate" runat="server" CssClass="dnnFormLabel" AssociatedControlID="ToDatePicker" Text="To Date" /></td>
                    <td class="control-col">
                        <asp:TextBox ID="ToDatePicker" runat="server" />
                        <asp:RequiredFieldValidator ID="RequiredToDatePicker" runat="server" ControlToValidate="ToDatePicker"
                            CssClass="dnnFormMessage dnnFormError" ErrorMessage="To Date is required." Display="Dynamic" ValidationGroup="client" />
                        <asp:RegularExpressionValidator ID="RegularExpressionValidator1"
                            ValidationExpression="^([0-9]|0[1-9]|1[012])\/([0-9]|0[1-9]|[12][0-9]|3[01])\/(19|20)\d\d$"
                            ControlToValidate="ToDatePicker" ErrorMessage="Invalid Format. Use MM/DD/YYYY" runat="server"
                            ValidationGroup="client" CssClass="dnnFormMessage dnnFormError" Display="Dynamic" />
                        <%--<dnn:DnnDatePicker runat="server" CssClass="dnnFormInput" ID="ToDatePicker" />--%>
                    </td>
                    <td>
                        <asp:LinkButton ID="btnSubmit" runat="server" CssClass="dnnPrimaryAction" Text="Export" OnClick="btnSubmit_Click" />
                    </td>
                </tr>
            </table>
        </div>
    </asp:View>
    <asp:View runat="server" ID="TopSending">
        <h1 class="title">Top Sending</h1>
        <div class="ecardGrid topSendGrid">
            <asp:GridView ID="gridView" runat="server" AutoGenerateColumns="false" DataKeyNames="Id"
                PageSize="10" AllowPaging="true" PagerStyle-HorizontalAlign="Center" CssClass="ecardGrid"
                OnPageIndexChanging="gridView_PageIndexChanging">
                <Columns>
                    <asp:BoundField DataField="Id" HeaderText="Id" SortExpression="Id" Visible="true"
                        ItemStyle-HorizontalAlign="Center" HeaderStyle-Width="50px"></asp:BoundField>
                    <asp:ImageField DataImageUrlField="ImageUrl" ControlStyle-Width="150px" HeaderText="Images">
                    </asp:ImageField>
                    <asp:BoundField DataField="Title" HeaderText="Title" SortExpression="Title" ItemStyle-HorizontalAlign="Left"
                        HeaderStyle-Width="200px"></asp:BoundField>
                    <asp:BoundField DataField="Ecard_Category.CategoryName" HeaderText="Category" SortExpression="Title" ItemStyle-HorizontalAlign="Left"
                        HeaderStyle-Width="200px"></asp:BoundField>
                    <asp:BoundField DataField="SendCount" HeaderText="Send Count" SortExpression="Send Count" ItemStyle-HorizontalAlign="Center"
                        HeaderStyle-Width="200px"></asp:BoundField>
                    <asp:CheckBoxField DataField="IsActive" HeaderText="Is Active" SortExpression="IsActive" ItemStyle-HorizontalAlign="Center" />
                </Columns>
                <PagerSettings Mode="NumericFirstLast" PageButtonCount="4" FirstPageText="First"
                    LastPageText="Last" />
                <EmptyDataTemplate>
                    No ecard found.
                </EmptyDataTemplate>
            </asp:GridView>
        </div>
    </asp:View>


    <%--<asp:View runat="server" ID="Logo" OnLoad="Logo_Load">
        <div class="dnnForm">
            <asp:Label ID="lblMessage" runat="server" Text="Update successfully. Please refresh the browser or clear your cache." CssClass="bg-success logo-success"></asp:Label>
            <asp:ValidationSummary ID="ValidationSummary1" runat="server" CssClass="dnnFormMessage dnnFormValidationSummary" ValidationGroup="logo" />
            <div class="dnnFormItem padding10">
                <dnn:label ID="lblStamp" runat="server" />
                <asp:FileUpload ID="uploadStamp" runat="server" />
                <asp:Image ID="imgStamp" runat="server" Width="150px" />
            </div>
            <div class="dnnFormItem padding10">
                <dnn:label ID="lblLogo" runat="server" />
                <asp:FileUpload ID="uploadLogo" runat="server" />
                <asp:Image ID="imgLogo" runat="server" Width="150px" />
            </div>
        </div>
        <br />
        <br/>
        <div class="action-button">
            <asp:LinkButton ID="lnkLogoSubmit" runat="server"
                OnClick="lnkLogoSubmit_Click" resourcekey="btnSubmit" CssClass="dnnPrimaryAction" ValidationGroup="client" />
            <asp:LinkButton ID="lnkLogoCancel" runat="server"
                OnClick="lnkLogoCancel_Click" resourcekey="btnCancel" CssClass="dnnSecondaryAction" />
        </div>
    </asp:View>--%>
</asp:MultiView>




