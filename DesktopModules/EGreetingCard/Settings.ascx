<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="Settings.ascx.cs" Inherits="Christoc.Modules.EGreetingCard.Settings" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.UI.WebControls" Assembly="DotNetNuke.Web" %>
<%@ Register TagPrefix="dnn" TagName="label" Src="~/controls/LabelControl.ascx" %>
<%@ Register TagPrefix="dnn" TagName="TextEditor" Src="~/controls/TextEditor.ascx" %>
<%@ Register TagPrefix="dnn" TagName="UrlControl" Src="~/controls/UrlControl.ascx" %>


<h2 id="categoryIntro" class="dnnFormSectionHead"><a href="#">Category View Intro Text</a></h2>
<fieldset class="dnnClear">
    <div class="dnnFormItem">
        <dnn:label ID="lblCategoryIntro" runat="server" />
        <dnn:TextEditor ID="txtCategoryIntro" runat="server" Width="100%" />
    </div>
</fieldset>
<h2 id="DetailIntro" class="dnnFormSectionHead"><a href="#">Detail View Intro Text</a></h2>
<fieldset class="dnnClear">
    <div class="dnnFormItem">
        <dnn:label ID="lblDetailIntro" runat="server" />
        <dnn:TextEditor ID="txtDetailIntro" runat="server" Width="100%" />
    </div>
</fieldset>
<h2 id="volunteer" class="dnnFormSectionHead"><a href="#">Email to Volunteers</a></h2>
<fieldset class="dnnClear">
    <div class="dnnFormItem">
        <dnn:label ID="lblFromEmailAddress" runat="server" />
        <asp:TextBox ID="txtFromEmailAddress" runat="server" />
        <asp:RequiredFieldValidator runat="server" ID="reqFromEmailAddress" ControlToValidate="txtFromEmailAddress"
            Display="Dynamic" ErrorMessage="<< required." ValidationGroup="Submit" CssClass="red" />
    </div>
    <div class="dnnFormItem">
        <dnn:label ID="lblToEmailAddress" runat="server" />
        <asp:TextBox ID="txtToEmailAddress" runat="server" />
        <asp:RequiredFieldValidator runat="server" ID="reqSenderEmail" ControlToValidate="txtToEmailAddress"
            Display="Dynamic" ErrorMessage="<< required." ValidationGroup="Submit" CssClass="red" />        
    </div>
    <div class="dnnFormItem">
        <dnn:label ID="lblEmailSubject" runat="server" />
        <asp:TextBox ID="txtEmailSubject" runat="server" />
        <asp:RequiredFieldValidator runat="server" ID="reqEmailSubject" ControlToValidate="txtEmailSubject"
            Display="Dynamic" ErrorMessage="<< required." ValidationGroup="Submit" CssClass="red" />
    </div>
</fieldset>

<h2 id="sender" class="dnnFormSectionHead"><a href="#">Email to Sender</a></h2>
<fieldset class="dnnClear">
    <div class="dnnFormItem">
        <dnn:label ID="lblSenderSubject" runat="server" />
        <asp:TextBox ID="txtSenderSubject" runat="server" />
        <asp:RequiredFieldValidator runat="server" ID="reqSenderSubject" ControlToValidate="txtSenderSubject"
            Display="Dynamic" ErrorMessage="<< required." ValidationGroup="Submit" CssClass="red" />
    </div>
    <div class="dnnFormItem">
        <dnn:label ID="lblSenderBody" runat="server" />
        <dnn:TextEditor ID="txtSenderBody" runat="server" Width="100%" />
    </div>
</fieldset>

<h2 id="thankyou" class="dnnFormSectionHead"><a href="#">Thank You Message Options</a></h2>
<fieldset class="dnnClear">
    <div class="dnnFormItem">
        <dnn:label ID="lblThankYouMessage" runat="server" />
        <dnn:TextEditor ID="txtThankYouMessage" runat="server" Width="100%" HtmlEncode="false"/>
    </div>
</fieldset>

<h2 id="option" class="dnnFormSectionHead"><a href="#">General Options</a></h2>
<fieldset class="dnnClear">
<%--    <div class="dnnFormItem">
        <dnn:label ID="lblMessage" runat="server" />
        <dnn:TextEditor ID="txtMessage" runat="server" Width="100%" />
    </div>--%>

    <div class="dnnFormItem">
        <dnn:label ID="lblThumbPageSize" runat="server" />
        <asp:TextBox ID="txtThumbPageSize" runat="server" />
        <asp:RegularExpressionValidator ID="reqThumbPageSize" runat="server" ErrorMessage=" << Please enter only numbers"
            ValidationExpression="^\d+$" ControlToValidate="txtThumbPageSize" CssClass="red"></asp:RegularExpressionValidator>
    </div>
    <div class="dnnFormItem">
        <dnn:label ID="lblLogoURL" runat="server" />
        <asp:TextBox ID="txtLogoURL" runat="server" />
    </div>
     <div class="dnnFormItem">
        <dnn:label ID="lblCustomCardId" runat="server" />
        <asp:TextBox ID="txtCustomCardId" runat="server" />
    </div>
    <div class="dnnFormItem">
        <dnn:label ID="lblCustomCardSplit" runat="server" />
        <asp:TextBox ID="txtCustomCardSplit" runat="server" />
    </div>
    <div class="dnnFormItem">
        <dnn:label ID="lblCustomCardColor" runat="server" />
        <asp:TextBox ID="txtCustomCardColor" runat="server" />
    </div>

    <div class="dnnFormItem">
        <dnn:label ID="lblSetupImages" runat="server" />
        <asp:button ID="btnCopyImages" runat="server" OnClick="btnCopyImages_Click" text="Copy Image Files to Portal Directory"/>
    </div>
</fieldset>



