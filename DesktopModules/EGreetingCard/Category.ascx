<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="Category.ascx.cs" Inherits="Christoc.Modules.EGreetingCard.Category" %>
<%@ Register TagPrefix="dnn" TagName="label" Src="~/controls/LabelControl.ascx" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.UI.WebControls" Assembly="DotNetNuke.Web" %>
<link href="<%= ControlPath %>css/jquery-ui.css" rel="stylesheet" />

<script type="text/javascript">
    $(document).ready(function () {
        $('body').on('focus', "#<%= StartDatePicker.ClientID %>", function () {
            $(this).datepicker({
                changeMonth: true,
                changeYear: true
            });
        });
<%--        $('body').on('focus', "#<%= EndDatePicker.ClientID %>", function () {
            $(this).datepicker({
                changeMonth: true,
                changeYear: true
            });
        });--%>
    });
</script>

<div class="ecardNav">
    <asp:Image ID="backImg" runat="server" ImageUrl="~/DesktopModules/EGreetingCard/images/icon-arrow-left.png"
        CssClass="navImg" />
    <asp:LinkButton ID="backLink" runat="server" CssClass="navLink" OnClick="backLink_Click">Back</asp:LinkButton>
    <span class="separator">|</span>
    <asp:Image ID="cardImg" runat="server" ImageUrl="~/DesktopModules/EGreetingCard/images/icon-images.png"
        CssClass="navImg" />
    <asp:LinkButton ID="listLink" runat="server" CssClass="navLink" OnClick="listLink_Click">Category Management</asp:LinkButton>
    <span class="separator">|</span>
    <asp:Image ID="addImg" runat="server" ImageUrl="~/DesktopModules/EGreetingCard/images/icon-images-plus.png"
        CssClass="navImg" />
    <asp:LinkButton ID="addLink" runat="server" CssClass="navLink" OnClick="addLink_Click">New Category</asp:LinkButton>
</div>
<hr />


<asp:MultiView ID="multiView" runat="server">
    <asp:View runat="server" ID="categoryList">
        <div class="ecardGrid">
            <asp:GridView ID="gridView" runat="server" AutoGenerateColumns="false" DataKeyNames="CategoryId"
                PageSize="10" AllowPaging="true" PagerStyle-HorizontalAlign="Center" CssClass="ecardGrid"
                OnPageIndexChanging="gridView_PageIndexChanging" OnRowDeleting="gridView_RowDeleting" OnSelectedIndexChanged="gridView_SelectedIndexChanged" HeaderStyle-CssClass="ecardGridHeader" OnRowCommand="gridView_RowCommand" OnRowDataBound="gridView_RowDataBound">
                <Columns>
                    <asp:BoundField DataField="CategoryId" HeaderText="Id" SortExpression="CategoryId" Visible="true"
                        ItemStyle-HorizontalAlign="Left" HeaderStyle-Width="100px"></asp:BoundField>
                    <asp:ImageField DataImageUrlField="ImageUrl" ControlStyle-Width="150px" HeaderText="Image">
                    </asp:ImageField>
                    <asp:BoundField DataField="CategoryName" HeaderText="Category Name" SortExpression="CategoryName" ItemStyle-HorizontalAlign="Left"
                        HeaderStyle-Width="200px"></asp:BoundField>
                    <asp:BoundField DataField="StartDate" HeaderText="Start Date" SortExpression="StartDate" ItemStyle-HorizontalAlign="Left"
                        HeaderStyle-Width="150px" DataFormatString="{0:MM/dd/yyyy}"></asp:BoundField>
                    <asp:BoundField DataField="EndDate" HeaderText="EndDate" SortExpression="End Date" ItemStyle-HorizontalAlign="Left"
                        HeaderStyle-Width="150px" DataFormatString="{0:MM/dd/yyyy}"></asp:BoundField>
                    <asp:TemplateField HeaderText="No. of ecards" HeaderStyle-Width="100px" ItemStyle-HorizontalAlign="Center">
                        <ItemTemplate>
                            <asp:Literal ID="lblEcardQuantity" runat="server"></asp:Literal>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:BoundField DataField="DisplayOrder" HeaderText="Display Order" SortExpression="DisplayOrder" ItemStyle-HorizontalAlign="Center"
                        HeaderStyle-Width="100px"></asp:BoundField>
                    <asp:CheckBoxField DataField="IsActive" HeaderText="Is Active" SortExpression="IsActive" ItemStyle-HorizontalAlign="Center" />
                    <asp:TemplateField HeaderText="Action" HeaderStyle-Width="300px" ItemStyle-HorizontalAlign="Left">
                        <ItemTemplate>
                            <asp:LinkButton ID="openLink" runat="server" CommandName="Open" CssClass="actionLink" CommandArgument='<%# Eval("CategoryId") %>'>Open</asp:LinkButton>
                            &nbsp;|&nbsp;
                            <asp:LinkButton ID="editLink" runat="server" CommandName="Select" CssClass="actionLink">Edit</asp:LinkButton>
                            &nbsp;|&nbsp;
                            <asp:LinkButton ID="delLink" runat="server" OnClientClick="return confirm('Are you sure you want to delete this e-card?');"
                                CommandName="Delete" CssClass="actionLink">Delete</asp:LinkButton>
                        </ItemTemplate>
                    </asp:TemplateField>
                </Columns>
                <PagerSettings Mode="NumericFirstLast" PageButtonCount="4" FirstPageText="First"
                    LastPageText="Last" />
                <EmptyDataTemplate>
                    No category found. Please add a category.
                </EmptyDataTemplate>
            </asp:GridView>
        </div>
    </asp:View>
    <asp:View runat="server" ID="addNewCategory">
        <div class="dnnForm dnnEditBasicSettings">
            <asp:ValidationSummary ID="validSummary" runat="server" ValidationGroup="server" CssClass="dnnFormMessage dnnFormError"
                ForeColor="Red" />

            <div class="dnnFormItem">
                <dnn:label ID="lblCategoryName" runat="server" />
                <asp:TextBox ID="txtCategoryName" runat="server" />
                <asp:RequiredFieldValidator ID="reqCategory" runat="server" ControlToValidate="txtCategoryName"
                    CssClass="dnnFormMessage dnnFormError" ErrorMessage="Category Name is required." Display="Dynamic" ValidationGroup="client" />
            </div>
            <div class="dnnFormItem">
                <dnn:label ID="lblStartDate" runat="server" />
                <asp:TextBox ID="StartDatePicker" runat="server" />
                <asp:RequiredFieldValidator ID="reqStartDatePicker" runat="server" ControlToValidate="StartDatePicker"
                    CssClass="dnnFormMessage dnnFormError" ErrorMessage="Start Date is required." Display="Dynamic" ValidationGroup="client" />
                <asp:RegularExpressionValidator ID="reqExpValidator"
                    ValidationExpression="^([0-9]|0[1-9]|1[012])\/([0-9]|0[1-9]|[12][0-9]|3[01])\/(19|20)\d\d$"
                    ControlToValidate="StartDatePicker" ErrorMessage="Invalid Format. Use MM/DD/YYYY" runat="server"
                    ValidationGroup="client" CssClass="dnnFormMessage dnnFormError" />
                <%--<dnn:DnnDatePicker runat="server" CssClass="dnnFormInput" ID="StartDatePicker" />
                <asp:RequiredFieldValidator ID="reqStartDate" runat="server" ControlToValidate="StartDatePicker"
                    CssClass="dnnFormMessage dnnFormError" ErrorMessage="Start Date is required." Display="Dynamic" ValidationGroup="client" />--%>
            </div>
            <div class="dnnFormItem">
                <dnn:label ID="lblEndDate" runat="server" />
                <asp:TextBox ID="EndDatePicker" runat="server" />
                <asp:RequiredFieldValidator ID="RequiredEndDatePicker" runat="server" ControlToValidate="EndDatePicker"
                    CssClass="dnnFormMessage dnnFormError" ErrorMessage="To Date is required." Display="Dynamic" ValidationGroup="client" />
                <asp:RegularExpressionValidator ID="RegularExpressionValidator1"
                    ValidationExpression="^([0-9]|0[1-9]|1[012])\/([0-9]|0[1-9]|[12][0-9]|3[01])\/(19|20)\d\d$"
                    ControlToValidate="EndDatePicker" ErrorMessage="Invalid Format. Use MM/DD/YYYY" runat="server"
                    ValidationGroup="client" CssClass="dnnFormMessage dnnFormError" />
                <%-- <dnn:DnnDatePicker runat="server" CssClass="dnnFormInput" ID="EndDatePicker" />
                <asp:RequiredFieldValidator ID="reqEndDate" runat="server" ControlToValidate="EndDatePicker"
                    CssClass="dnnFormMessage dnnFormError" ErrorMessage="End Date is required." Display="Dynamic" ValidationGroup="client" />--%>
            </div>

            <div class="dnnFormItem">
                <dnn:label ID="lblDisplayOrder" runat="server" />
                <asp:TextBox ID="txtDisplayOrder" runat="server" />
                <asp:RequiredFieldValidator ID="reqDisplayOrder" runat="server" ControlToValidate="txtDisplayOrder"
                    CssClass="dnnFormMessage dnnFormError" ErrorMessage="Display Order is required." Display="Dynamic" ValidationGroup="client" />
                <asp:RegularExpressionValidator ID="valDisplayOrder" runat="server"
                    ErrorMessage="Display must be a number." ControlToValidate="txtDisplayOrder"
                    ValidationExpression="^\d+$" CssClass="dnnFormMessage dnnFormError" Display="Dynamic" ValidationGroup="client" />
            </div>
            <div class="dnnFormItem">
                <dnn:label ID="lblThumb" runat="server" />
                <asp:FileUpload ID="thumbFileUpload" runat="server" />
                <asp:Image ID="imgThumb" runat="server" Width="150px" />
            </div>
            <div class="dnnFormItem">
                <dnn:label ID="lblIsActive" runat="server" />
                <asp:CheckBox ID="chbIsActive" runat="server" Checked="true" />
            </div>
            <hr />
            <div class="action-button">
                <asp:LinkButton ID="btnSubmit" runat="server"
                    OnClick="btnSubmit_Click" resourcekey="btnSubmit" CssClass="dnnPrimaryAction" ValidationGroup="client" />
                <asp:LinkButton ID="btnCancel" runat="server"
                    OnClick="btnCancel_Click" resourcekey="btnCancel" CssClass="dnnSecondaryAction" />
            </div>
        </div>
    </asp:View>
</asp:MultiView>