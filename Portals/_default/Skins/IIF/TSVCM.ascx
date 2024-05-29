<%@ Control Language="C#" AutoEventWireup="false" Inherits="DotNetNuke.UI.Skins.Skin" %>
<%@ Register TagPrefix="TSVCM" TagName="CommonResources" src="controls/CommonResources__TSVCM.ascx" %>
<%@ Register TagPrefix="dnn" TagName="Copyright" Src="~/Admin/Skins/copyright.ascx" %>

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">

<TSVCM:CommonResources runat="server" />

<div class="tsvcm">
	<header class="site--header">
		<div runat="server" id="Banner" class="pane pane__banner"></div>
	</header>
	<main class="site--main">
		<div class="section section__about">
			<div class="container">
	            <div class="row">
	                <div class="row--column">
						<div runat="server" id="ContentPane" class="pane pane__contentpane"></div>
					</div>
				</div>
				<div class="row row__even-columns">
	                <div class="row--column">
	                    <div runat="server" id="TwoColTop1" class="pane pane__twocol"></div>
	                </div>
	                <div class="row--column">
	                    <div runat="server" id="TwoColTop2" class="pane pane__twocol"></div>
	                </div>
	            </div>
			</div>
		</div>
		<div class="section section__publications">
			<div class="container">
	            <div class="row">
	                <div class="row--column">
						<div runat="server" id="Publications" class="pane pane__publications"></div>
					</div>
				</div>
			</div>
		</div>
		<div class="section section__members">
			<div class="container">
	            <div class="row">
	                <div class="row--column">
						<div runat="server" id="Members" class="pane pane__members"></div>
					</div>
				</div>
				<div class="row row__even-columns">
	                <div class="row--column">
	                    <div runat="server" id="TwoCol1" class="pane pane__twocol"></div>
	                </div>
	                <div class="row--column">
	                    <div runat="server" id="TwoCol2" class="pane pane__twocol"></div>
	                </div>
	            </div>

			</div>
		</div>
	</main>
	<footer class="site--footer">
		<ul class="tsvcm-footer-links">
			<li><a href="https://www.iif.com/terms-and-conditions">Terms & Conditions</a></li>
			<li><a href="https://www.iif.com/privacy-policy">Privacy Policy</a></li>
			<li><dnn:Copyright runat="server" id="dnnCopyright" /></li>
		</ul>
	</footer>
</div>