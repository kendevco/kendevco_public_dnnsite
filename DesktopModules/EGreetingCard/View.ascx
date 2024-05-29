<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="View.ascx.cs" Inherits="Christoc.Modules.EGreetingCard.View" %>
<%@ Register Src="Controls/CategoryView.ascx" TagName="CategoryView" TagPrefix="uc" %>
<%@ Register Src="Controls/DetailView.ascx" TagName="DetailView" TagPrefix="uc" %>
<%@ Register Src="Send.ascx" TagName="SendView" TagPrefix="uc" %>

<div class="ecard-module clearfix">

    <asp:MultiView ID="multiView" runat="server">
        <!-- Category View -->
        <asp:View runat="server" ID="categoryView">
            <h1 class="pageTitle">Send an E-Greeting</h1>
            <asp:Literal runat="server" ID="lblCategoryViewIntro"></asp:Literal>
            <uc:CategoryView ID="ucCategoryView" runat="server" />
        </asp:View>

        <!-- Ecards Items View -->
        <asp:View runat="server" ID="detailView">
            <h1 class="pageTitle">Select an e-Greeting Design</h1>
            <asp:Literal runat="server" ID="lblDetailViewIntro" ></asp:Literal>
            <uc:DetailView ID="ucDetailView" runat="server" />
        </asp:View>

        <!-- Send View -->
        <asp:View runat="server" ID="sendView">
            <h1 class="pageTitle">Send your E-Greeting</h1>
            <asp:Literal runat="server" ID="lblSendIntro" ></asp:Literal>
            <uc:SendView ID="ucSendView" runat="server" />
        </asp:View>

        <asp:View ID="thankyouView" runat="server">
            <asp:Literal ID="lblThankYouMessage" runat="server"></asp:Literal>
            <asp:Image ID="imgCard" runat="server" />
        </asp:View>

        <asp:View ID="errorView" runat="server">
            <asp:Literal ID="lblError" runat="server"></asp:Literal>
        </asp:View>

    </asp:MultiView>
</div>
