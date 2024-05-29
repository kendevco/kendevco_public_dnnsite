<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="Status.ascx.cs" Inherits="Christoc.Modules.EGreetingCard.Status" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.UI.WebControls" Assembly="DotNetNuke.Web" %>
<%@ Register TagName="label" TagPrefix="dnn" Src="~/controls/labelcontrol.ascx" %>


<%--<asp:MultiView ID="multiView" runat="server">
    <asp:View runat="server" ID="ExportData">
        <div class="dnnForm status-grid" id="form-demo">
            <h1 class="title">E-Greeting Cards Status</h1>
            <asp:ValidationSummary ID="errorSummary" runat="server" CssClass="dnnFormMessage dnnFormValidationSummary" ValidationGroup="error" />
            <table>
                <tr>
                    <td class="label-col">
                        <asp:Label ID="lblFromDate" runat="server" CssClass="dnnFormLabel" AssociatedControlID="FromDatePicker" Text="From Date" /></td>
                    <td class="control-col">
                        <dnn:DnnDatePicker runat="server" CssClass="dnnFormInput" ID="FromDatePicker" />
                    </td>
                    <td class="label-col">
                        <asp:Label ID="lblToDate" runat="server" CssClass="dnnFormLabel" AssociatedControlID="ToDatePicker" Text="To Date" /></td>
                    <td class="control-col">
                        <dnn:DnnDatePicker runat="server" CssClass="dnnFormInput" ID="ToDatePicker" />
                    </td>
                    <td>
                        <asp:LinkButton ID="btnSubmit" runat="server" CssClass="dnnPrimaryAction" Text="View" OnClick="btnSubmit_Click" />
                    </td>
                </tr>
            </table>

            <asp:GridView ID="gridView" runat="server" AutoGenerateColumns="false" DataKeyNames="Id"
                PageSize="20" AllowPaging="true" PagerStyle-HorizontalAlign="Center" CssClass="ecardGrid"
                OnPageIndexChanging="gridView_PageIndexChanging">
                <Columns>
                    <asp:BoundField DataField="Id" HeaderText="Id" SortExpression="Id" Visible="true"
                        ItemStyle-HorizontalAlign="Center" HeaderStyle-Width="50px"></asp:BoundField>
                    <asp:ImageField DataImageUrlField="Ecard_Image.ImageUrl" ControlStyle-Width="150px" HeaderText="Images">
                    </asp:ImageField>
                    <asp:BoundField DataField="Ecard_Image.Title" HeaderText="Title" SortExpression="Title" ItemStyle-HorizontalAlign="Left"
                        HeaderStyle-Width="200px"></asp:BoundField>
                    <asp:BoundField DataField="Ecard_Category.CategoryName" HeaderText="Category" SortExpression="Title" ItemStyle-HorizontalAlign="Left"
                        HeaderStyle-Width="200px"></asp:BoundField>
                    <asp:BoundField DataField="RecipientName" HeaderText="Patient Name" SortExpression="RecipientName" ItemStyle-HorizontalAlign="Center"
                        HeaderStyle-Width="200px"></asp:BoundField>
                    <asp:BoundField DataField="PatientRoomNumber" HeaderText="Room Number" SortExpression="PatientRoomNumber" ItemStyle-HorizontalAlign="Center"
                        HeaderStyle-Width="200px"></asp:BoundField>
                    <asp:BoundField DataField="SenderName" HeaderText="Sender Name" SortExpression="SenderName" ItemStyle-HorizontalAlign="Center"
                        HeaderStyle-Width="200px"></asp:BoundField>
                    <asp:BoundField DataField="SenderEmail" HeaderText="Sender Email" SortExpression="SenderEmail" ItemStyle-HorizontalAlign="Center"
                        HeaderStyle-Width="200px"></asp:BoundField>                    
                </Columns>
                <PagerSettings Mode="NumericFirstLast" PageButtonCount="4" FirstPageText="First"
                    LastPageText="Last" />
                <EmptyDataTemplate>
                    No ecard found.
                </EmptyDataTemplate>
            </asp:GridView>
        </div>
    </asp:View>
    <asp:View runat="server" ID="TopSending">
        <h1 class="title">E-Greeting Card Status</h1>

    </asp:View>
</asp:MultiView>--%>