<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="DetailView.ascx.cs" Inherits="Christoc.Modules.EGreetingCard.Controls.DetailView" %>



<div class="clear"></div>
<asp:ListView ID="ecardListView" runat="server" OnItemDataBound="ecardListView_ItemDataBound"
    OnPagePropertiesChanging="ecardListView_PagePropertiesChanging"
    OnDataBound="ecardListView_DataBound">
    <LayoutTemplate>
        <ul class="ecardList row">
            <asp:PlaceHolder ID="itemPlaceholder" runat="server"></asp:PlaceHolder>
        </ul>
    </LayoutTemplate>
    <ItemTemplate>
        <li class="col-md-6 col-sm-12 col-xs-12">
            <div class="item-wrapper" style="width:280px !important" >



                <asp:LinkButton ID="linkButton" runat="server" OnClick="linkButton_Click" CommandArgument='<%# Eval("Id") %>'>                     
                        <div class="ecard-img" style="background-image: url('<%# ((string)Eval("ImageUrl")).Replace("~","") %>')"></div>
                </asp:LinkButton>

            </div>
          <%--  <div class="cat-item-title"><%# Eval("Title") %></div>--%>
        </li>
    </ItemTemplate>
    <EmptyItemTemplate>
        <div>
            There is no e-card. 
        </div>
    </EmptyItemTemplate>
</asp:ListView>
<div class="clear"></div>
<div class="pagerWrapper clearfix">
    <div class="pagerContainer">
        <asp:DataPager ID="ecardPager" runat="server" PagedControlID="ecardListView" PageSize="10">
            <Fields>
                <asp:NextPreviousPagerField FirstPageText="&laquo;" PreviousPageText="&lsaquo;" ShowFirstPageButton="True"
                    ShowPreviousPageButton="true" ShowNextPageButton="false" ButtonCssClass="page-btn" />
                <asp:NumericPagerField NumericButtonCssClass="page-number" CurrentPageLabelCssClass="active" ButtonCount="4" />
                <asp:NextPreviousPagerField LastPageText="&raquo;" NextPageText="&rsaquo;" ShowLastPageButton="True" ShowNextPageButton="true" ShowPreviousPageButton="false" ButtonCssClass="page-btn" />
            </Fields>
        </asp:DataPager>
    </div>
</div>
