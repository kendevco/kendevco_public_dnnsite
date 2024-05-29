<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="CategoryView.ascx.cs" Inherits="Christoc.Modules.EGreetingCard.Controls.CategoryView" %>


<div class="clear"></div>
<asp:ListView ID="categoryListView" runat="server" OnItemDataBound="categoryListView_ItemDataBound">
    <LayoutTemplate>
        <ul class="ecardList row">
            <asp:PlaceHolder ID="itemPlaceholder" runat="server"></asp:PlaceHolder>
        </ul>
    </LayoutTemplate>
    <ItemTemplate>
        <li class="col-md-6 col-sm-6 col-xs-12">
            <asp:LinkButton ID="linkOpenCategory" runat="server" OnClick="linkOpenCategory_Click" CommandArgument='<%# Eval("CategoryId") %>' CssClass="cat-link">
                <div class="cat-item-wrapper">
                    <div class="cat-img-wrapper">
                        <asp:Image ID="imageCategoryThumb" runat="server" />
                    </div>
                    <div class="cat-item-title">
                        <asp:Literal runat="server" ID="lblCategoryName"></asp:Literal></div>
                </div>
            </asp:LinkButton>
        </li>
    </ItemTemplate>
    <EmptyItemTemplate>
        <div>
            There is no category. Please add a category.
        </div>
    </EmptyItemTemplate>
</asp:ListView>
