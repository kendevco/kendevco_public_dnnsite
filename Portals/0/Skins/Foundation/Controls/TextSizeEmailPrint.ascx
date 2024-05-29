<%@ Control Language="C#" AutoEventWireup="true" CodeFile="TextSizeEmailPrint.ascx.cs" Inherits="BJH.Skin.controls.TextSizeEmailPrint" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.Client.ClientResourceManagement" Assembly="DotNetNuke.Web.Client" %>


<div class="globalprinemail printemailcolum" id="GlobalPrintEmailControl">	
    <div class="printEmailWrap">
    <div class="printPage"><a href="javascript:void(printSpecial('PrintReady'));"><span class="icon-print"></span></a></div>
    <div class="emailPage"><a id="email" href="javascript:void();"><span class="icon-contact"></span></a></div>
    </div>
    <div class="txtSizeWrap">
    <div class="txtSml"><a href="javascript:ts('PrintReady', -1);"><span class="icon-text-size-down"></span></a></div>
    <div class="txtLg"><a href="javascript:ts('PrintReady', +1);"><span class="icon-text-size-up"></span></a></div>
    </div>
</div>