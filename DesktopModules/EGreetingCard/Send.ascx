<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="Send.ascx.cs" Inherits="Christoc.Modules.EGreetingCard.Send" %>

<script type="text/javascript">
   $(document).ready(function () {
        var cardID = window.location.pathname.split('/')[<%= CustomCardSplit %>];
        var max = 200; //385
        var maxSenderField = 20;
        var maxsendername = 40;
        var $Message = $('#<%= txtMessage.ClientID %>');
        var $FirstNameCountNumber = $(".first-count-number");
        var $PatientFirstName = $('#<%= txtPatientFirstName.ClientID %>');
        var $PatientLastName = $('#<%= txtPatientLastName.ClientID %>');
       var $RoomNumber = $('#<%= txtRoomNumber.ClientID %>');
        var $SenderFirstName = $('#<%= txtSenderFirstName.ClientID %>');
        var $SenderLastName = $('#<%= txtSenderLastName.ClientID %>');
        var $CountNumber = $(".count-number");
        var $SecondNameCountNumber = $(".second-count-number");
        var $PatientFirstNameCountNumber = $(".Patientfirst-count-number");
        var $PatientSecondNameCountNumber = $(".Patientsecond-count-number");
        $CountNumber.html(max.toString());
        $FirstNameCountNumber.html(maxsendername.toString());
        $SecondNameCountNumber.html(maxSenderField.toString());

        if (cardID == "<%= CustomCardID %>") {
            $("#divimg").show();
            document.getElementById("<%=EgreetingValidator.ClientID %>").enabled = true;
        }
        $Message.keyup(function (e) {

            if (this.value.length == max) {
                e.preventDefault();
            } else if (this.value.length > max) {
                // Maximum exceeded
               this.value = this.value.substring(0, max);

            }
            $CountNumber.text(max - $(this).val().length);
        });

        $Message.keyup(function (e) {
            $("#fMessage").html($(this).val());
        });

        $PatientFirstName.keyup(function (e) {
            SetPatientName();
            if (this.value.length == maxSenderField) {
                e.preventDefault();
            } else if (this.value.length > maxSenderField) {
                // Maximum exceeded
                this.value = this.value.substring(0, maxSenderField);
            }
            $PatientFirstNameCountNumber.text(maxSenderField - $(this).val().length);
        });
        $PatientLastName.keyup(function (e) {
            SetPatientName();
            if (this.value.length == maxSenderField) {
                e.preventDefault();
            } else if (this.value.length > maxSenderField) {
                // Maximum exceeded
                this.value = this.value.substring(0, maxSenderField);
            }

            if ($(this).val().length + $SenderFirstName.val().length > 40) {
                $("#fFrom").attr("style", "font-size: 11px");
            }
            $PatientSecondNameCountNumber.text(maxSenderField - $(this).val().length);
        });

        $SenderFirstName.keyup(function (e) {
            debugger
            SetSenderName();
            if (this.value.length == maxsendername) {
                e.preventDefault();
            } else if (this.value.length > maxsendername) {
                // Maximum exceeded
                this.value = this.value.substring(0, maxSenderField);
            }
            $FirstNameCountNumber.text(maxsendername - $(this).val().length);
        });

        $RoomNumber.keyup(function (e) {
            $("#fRoom").html($(this).val());
        });

        function SetPatientName() {
            var patientName = $PatientFirstName.val() + " " + $PatientLastName.val();
            $("#fTo").html(patientName);
        }
        function SetSenderName() {
            var senderName = "- " + $SenderFirstName.val();
            $("#fFrom").html(senderName);
        }

        $('#<%=imgInp.ClientID%>').change(function () {
            debugger
            var array = ['jpg', 'jpeg', 'png'];
            var xyz = document.getElementById("<%=imgInp.ClientID%>");
            var Extension = xyz.value.substring(xyz.value.lastIndexOf('.') + 1).toLowerCase();
            if (array.indexOf(Extension) <= -1) {
                //alert("Please Upload only jpg, jpeg and png flle");
                $('#<%=imgInp.ClientID%>').val('');
                return false;
            }
            else {

               // $('#customheader').css("background-color", "White")
                readURL(this);
                //$('#blah').show();
            }
        })

        function readURL(input) {
            debugger
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
 			
                    $("#divEgreeting").css("background-image", 'url(' + e.target.result + ')');
                }
                reader.readAsDataURL(input.files[0]); // convert to base64 string
            }
        }


        $('#<%=rblcategory.ClientID%>').change(function () {
            var selectedOption = $('#<%=rblcategory.ClientID %> option:selected').text();
            var selectedvalue = $('#<%=rblcategory.ClientID %> option:selected').val();
            $("#fFrom").html('');
            $FirstNameCountNumber.text('40');
            $('#<%=txtSenderFirstName.ClientID%>').val('');
            if (selectedOption.toLowerCase() == "myself") {
                $('#senderName').text(' Full Name');
                $('#firstname').addClass('required');
                $('#lastname').addClass('required');
                document.getElementById("<%=reqPatientFirstName.ClientID %>").enabled = true;
                document.getElementById("<%=reqPatientLastName.ClientID %>").enabled = true;
            }
            else if (selectedOption.toLowerCase() == "business") {
                $('#senderName').text('Organization Name');
                $('#firstname').removeClass('required');
                $('#lastname').removeClass('required');
                document.getElementById("<%=reqPatientFirstName.ClientID %>").enabled = false;
                document.getElementById("<%=reqPatientLastName.ClientID %>").enabled = false;
            }
            else if (selectedOption.toLowerCase() == "select") {
                $('#senderName').text('Sender Name');
                $('#firstname').removeClass('required');
                $('#lastname').removeClass('required');
                document.getElementById("<%=reqPatientFirstName.ClientID %>").enabled = false;
                document.getElementById("<%=reqPatientLastName.ClientID %>").enabled = false;
            }
            else {
                $('#senderName').text(selectedOption + " " + 'Name');
                $('#firstname').removeClass('required');
                $('#lastname').removeClass('required');
                document.getElementById("<%=reqPatientFirstName.ClientID %>").enabled = false;
                document.getElementById("<%=reqPatientLastName.ClientID %>").enabled = false;
            }

        })

    });

</script>

<style>
    .gcontainer{
        position: relative;
        width: 100%;
        padding-top: 75%;
    }
    .gcontent{
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
.button{
                width: 68px;
                font-size: 14px;
                padding: 10px 0;
                margin: 0 10px;
                text-align: center;
                color: #fff !important;
                text-decoration: none !important;
                display: inline-block;
                background-color: #00529B;
            }

.button:hover {
                    background-color: #1A6CB5;
                    -webkit-transition: all 0.3s ease;
                    -moz-transition: all 0.3s ease;
                    -o-transition: all 0.3s ease;
                    transition: all 0.3s ease;
                }
</style>

<h1 class="pageTitle">
    <asp:Literal runat="server" ID="lblEcardName"></asp:Literal>
</h1>


<p class="description">
    Please complete the form below to send your e-greeting. Messages are hand delivered
    Monday - Friday from 8 a.m. to 5 p.m. If you submit a message outside this time
    or on the weekend, we will deliver your message during the next delivery window.
</p>
<br />

<div class="ecard-module send-view">
    <div class="send-ecard-wrapper">
        <div class="greeting-wrapper">
        </div>
        <div class="ecard-content-wrapper">
            <div class="send-ecard clearfix">
                <div class="row">
                  <!--  <img src="<%= ImageURL %>" alt="" class="visible-xs img-responsive" />
                     Left Column --> 
                    <div  class="col-md-8 col-sm-12 col-xs-12 col left-col" >
                        <div id="divEgreeting" class="gcontainer" style="background-image: url('<%= ImageURL %>') ; background-repeat: no-repeat; background-size: 100% 100%;">
                            <div id="customheader" class="row gcontent" >
				<div style="background-color: #FFF; height: 45px !important">
                                <div class="col-md-4 col-sm-4" >
                                    <div class="" style="text-align: left; height: 30px !important">
                                        <img alt="logo" src="<%= Logo_URL.Trim('~') %>" style="height: 30px !important; ">
                                    </div>
                                </div>
                                <div class="col-md-8 col-sm-8" style="font-size: 13px; text-align: left; padding: 1px ; ">
                                    <div class="fLabel" style="font-size: 13px; text-align: left;">
                                        <span style="color: #000">To:</span> <span id="fTo" class="fValue"></span>
                                    </div>
                                    <div class="fLabel" id="lblRoom">
                                        <span style="color: #000">Room:</span> <span id="fRoom" class="fValue"></span>
                                    </div>
                                    <div class="fLabel" id="lblCategory" style="display: none">
                                        <span style="color: #000">Category:</span> <span id="fCategory" class="fValue">
                                        </span>
                                    </div>
                                </div>
				</div>
                            </div>
                            <div class="row gcontent" >
                                <div class="col-md-12 col-sm-12" style="top: 75% !important; bottom: 5% !important;  background-color: rgba(255,255,255, .8) !important; border-top: 2px solid #FFF; border-bottom: 2px solid #FFF; min-height:20px;">
                                    <div style="color: #000; font-size: 13px; text-align: left !important; padding: 5px 15px; ">
                                        <span id="fMessage" style="word-wrap: break-word;"></span>
                                    </div>
                                    <div class="fLabel" style="color: #000 !important; font-size: 13px !important; text-align: right">
                                        <span id="fFrom" class="fValue"></span>
                                    </div>
                                </div>
                                <%--<div class="col-md-2 col-sm-2" style="text-align: left">
                                    <div class="small-logo">
                                        <img id="blah" src="#" alt="your image" style="display: none; width: 90px; height: 90px !important;
                                        border-radius: 15px; margin-top: 0px;" />
                                    </div>
                                </div>--%>
                            </div>
                        </div>
                    </div>
                    <!-- Right Column -->

                    <asp:UpdatePanel ID="FormUpdatePanel" runat="server">
                        <ContentTemplate>

                            <div class="col-md-4 col-sm-12 col-xs-12 col right-col">
                                <asp:ValidationSummary ID="validSummary" runat="server" ValidationGroup="Submit"
                                                       CssClass="dnnFormMessage dnnFormError" ForeColor="Red" />
                                <!--Category-->
                                <div class="col-md-12 col-sm-6 col-xs-12">
                                    <div class="row" id="divimg" style="display:none">
                                        <div class="col-md-12 col-sm-12 col-xs-12" style="text-align: left">

                                            <label class="cardlabel pb0 required">
                                                Upload E-Greeting card
                                            </label>
                                            <asp:FileUpload ID="imgInp" runat="server" accept=".png,.jpg,.jpeg,.gif" CssClass="cardControl" />
                                            <div id="firstName-count">
                                                (An image with dimension 1100 x 850 is expected)
                                            </div>
                                            <asp:RequiredFieldValidator runat="server" ID="EgreetingValidator" ControlToValidate="imginp"
                                                                        Display="None" ErrorMessage="E-Greeting card is required." ValidationGroup="Submit"
                                                                        CssClass="red" Enabled=false />
                                            <asp:RegularExpressionValidator ID="regularexpressionvalidator7" runat="server" ErrorMessage="Upload only jpg, jpeg and png flle."
                                                                            ControlToValidate="imginp" ValidationExpression="(.*?)\.(jpg|jpeg|png|JPG|JPEG|PNG|)$"
                                                                            ValidationGroup="submit" CssClass="red" Display="dynamic"></asp:RegularExpressionValidator>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <input type="hidden" id="hdnvalue" value="" />
                                    <div class="col-md-12 col-sm-6 col-xs-12">
                                        <p class="group-title"> </p>
                                        <div class="row">
                                            <div class="col-md-12 col-sm-12 col-xs-12" style="text-align: left">
                                                <label class="cardlabel  pb0 required">
                                                    I'm sending this card on behalf of :
                                                </label>
                                                <asp:DropDownList ID="rblcategory" CssClass="cardControl" runat="server">
                                                    <asp:ListItem Enabled="true" Text="Select" Value="-1"></asp:ListItem>
                                                    <asp:ListItem Text="Business" Value="4"></asp:ListItem>
                                                    <asp:ListItem Text="Church" Value="1"></asp:ListItem>
                                                    <asp:ListItem Text="Myself" Value="2"></asp:ListItem>
                                                    <asp:ListItem Text="School" Value="3"></asp:ListItem>
                                                </asp:DropDownList>
                                                <asp:RequiredFieldValidator runat="server" ID="RequiredFieldValidator1" ControlToValidate="rblcategory"
                                                                            Display="None" InitialValue="-1" ErrorMessage="E-greeting on behalf is required"
                                                                            ValidationGroup="Submit" CssClass="red" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 col-sm-6 col-xs-12">
                                        <p class="group-title">
                                            Sender Information
                                        </p>
                                        <!-- Sender Name-->
                                        <div class="row" id="rowsenderfirstname">
                                            <div class="col-md-12 col-sm-12 col-xs-12" style="text-align: left">
                                                <label class="cardlabel required pb0" id="senderName">
                                                    Full Name
                                                </label>
                                                <asp:TextBox ID="txtSenderFirstName" runat="server" CssClass="cardControl" MaxLength="40"></asp:TextBox>
                                                <div id="firstName-count">
                                                    (Characters left: <span class="first-count-number">40</span>)
                                                </div>
                                                <asp:RequiredFieldValidator runat="server" ID="reqSenderFirstName" ControlToValidate="txtSenderFirstName"
                                                                            Display="None" ErrorMessage="Sender Name is required." ValidationGroup="Submit"
                                                                            CssClass="red" />
                                            </div>
                                        </div>
                                        <div class="row" id="rowsenderlastname" style="display: none">
                                            <div class="col-md-5 col-sm-4 col-xs-12">
                                                <div class="cardlabel required pb0">
                                                    Last Name
                                                </div>
                                                <div id="Div2">
                                                    (Characters left: <span class="second-count-number">20</span>)
                                                </div>
                                            </div>
                                            <div class="col-md-7 col-sm-8 col-xs-12">
                                                <asp:TextBox ID="txtSenderLastName" runat="server" CssClass="cardControl" MaxLength="20"></asp:TextBox>
                                                <asp:RequiredFieldValidator runat="server" ID="reqSenderLastName" ControlToValidate="txtSenderLastName"
                                                                            Display="None" ErrorMessage="Sender Last Name is required." ValidationGroup="Submit"
                                                                            CssClass="red" Enabled="false" />
                                            </div>
                                        </div>
                                        <!-- Sender Email-->
                                        <div class="row">
                                            <div class="col-md-12 col-sm-12 col-xs-12" style="text-align: left">
                                                <label class="cardlabel required pb0" id="Label1">
                                                    Email
                                                </label>
                                                <asp:TextBox ID="txtSenderEmail" runat="server" CssClass="cardControl"></asp:TextBox>
                                                <br />
                                                <asp:RequiredFieldValidator runat="server" ID="reqSenderEmail" ControlToValidate="txtSenderEmail"
                                                                            Display="None" ErrorMessage="Sender Email is required." ValidationGroup="Submit"
                                                                            CssClass="red" />
                                                <asp:RegularExpressionValidator ID="regExpEmail" runat="server" ErrorMessage="Invalid email."
                                                                                ControlToValidate="txtSenderEmail" ValidationExpression="\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*"
                                                                                ValidationGroup="Submit" CssClass="red" Display="None"></asp:RegularExpressionValidator>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style="border-top: 1px solid #ccc; margin: 15px">
                                </div>
                                <div style="margin: 0px 5px">
                                    <!-- Sender Name-->
                                    <div class="row" id="Div1" style="display: none">
                                        <div class="col-md-12 col-sm-12 col-xs-12" style="text-align: left">
                                            <label class="cardlabel required pb0">
                                                Whom do you want to Share E-greeting card with
                                            </label>
                                            <asp:DropDownList ID="subCategory" CssClass="cardControl" runat="server">
                                                <asp:ListItem Enabled="true" Text="Select" Value="-1"></asp:ListItem>
                                                <asp:ListItem Text="Doctor" Value="1"></asp:ListItem>
                                                <asp:ListItem Text="Hospital" Value="2"></asp:ListItem>
                                                <asp:ListItem Text="Nurse" Value="3"></asp:ListItem>
                                                <asp:ListItem Text="Patient" Value="4"></asp:ListItem>
                                            </asp:DropDownList>
                                            <asp:RequiredFieldValidator runat="server" ID="RequiredFieldValidator3" ControlToValidate="subCategory"
                                                                        Display="None" InitialValue="-1" ErrorMessage="E-greeting recipient required"
                                                                        ValidationGroup="Submit" CssClass="red" Enabled="false" />
                                        </div>
                                    </div>
                                    <p class="group-title first" id="pinfo" style="margin-top: 15px">
                                        Recipient Information
                                    </p>
                                    <!-- Patient First Name-->
                                    <div class="row">
                                        <div class="col-md-12 col-sm-12 col-xs-12" style="text-align: left">
                                            <label class="cardlabel pb0" id="firstname">
                                                Patient First Name
                                            </label>
                                            <asp:TextBox ID="txtPatientFirstName" runat="server" MaxLength="20" CssClass="cardControl"></asp:TextBox>
                                            <div id="firstName-count">
                                                (Characters left: <span class="Patientfirst-count-number">20</span>)
                                            </div>
                                            <asp:RequiredFieldValidator runat="server" ID="reqPatientFirstName" ControlToValidate="txtPatientFirstName"
                                                                        Display="None" ErrorMessage="Patient First Name is required." ValidationGroup="Submit"
                                                                        CssClass="red" Enabled="false" />
                                        </div>
                                    </div>
                                    <div class="row" id="rowlastname">
                                        <div class="col-md-12 col-sm-12 col-xs-12" style="text-align: left">
                                            <label class="cardlabel pb0" id="lastname">
                                                Patient Last Name
                                            </label>
                                            <asp:TextBox ID="txtPatientLastName" runat="server" CssClass="cardControl" MaxLength="20"></asp:TextBox>
                                            <div id="lastName-count">
                                                (Characters left: <span class="Patientsecond-count-number">20</span>)
                                            </div>
                                            <asp:RequiredFieldValidator runat="server" ID="reqPatientLastName" ControlToValidate="txtPatientLastName"
                                                                        Display="None" ErrorMessage="Patient Last Name is required." ValidationGroup="Submit"
                                                                        CssClass="red" Enabled="false" />
                                        </div>
                                    </div>
                                    <!-- Patient Room Number-->
                                    <div class="row" id="rowroomno">
                                        <div class="col-md-12 col-sm-12 col-xs-12" style="text-align: left">
                                            <label class="cardlabel pb0">
                                                Patient Room Number
                                            </label>
                                            <asp:TextBox ID="txtRoomNumber" runat="server" CssClass="cardControl" MaxLength="20"></asp:TextBox>
                                        </div>
                                    </div>
                                    <!-- Message-->
                                    <div class="row" id="txtmessage">
                                        <div class="col-md-5 col-sm-4 col-xs-12">
                                        </div>
                                        <div class="col-md-12 col-sm-12 col-xs-12 dnnFormItem" style="text-align: left">
                                            <label class="cardlabel required pb0">
                                                Message
                                            </label>
                                            <asp:TextBox ID="txtMessage" runat="server" MaxLength="200" Rows="3" Width="100%"
                                                         TextMode="MultiLine" CssClass="cardControl"></asp:TextBox>
                                            <div id="character-count">
                                                (Characters left: <span class="count-number">200</span>)
                                            </div>
                                            <asp:RequiredFieldValidator runat="server" ID="reqMessage" ControlToValidate="txtMessage"
                                                                        Display="None" ErrorMessage="Message is required." ValidationGroup="Submit" CssClass="red" />
                                        </div>
                                    </div>
                                    <!-- Submit-->
                                    <div class="row">

                                        <asp:LinkButton class="button" ID="btnSend" runat="server" ValidationGroup="Submit" OnClick="btnSend_Click">Send</asp:LinkButton>
                                        <asp:LinkButton class="button" ID="btnCancel" runat="server" OnClick="btnCancel_Click">Cancel</asp:LinkButton>

                                    </div>                        
                                    </div>
                                </div>
                        </ContentTemplate>
                        <Triggers>
                            <asp:PostBackTrigger ControlID="btnSend" />
                        </Triggers>
                    </asp:UpdatePanel>

                </div>
            </div>
        </div>
    </div>
</div>
