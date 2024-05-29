<%@ Control Language="C#" AutoEventWireup="false" Inherits="Engage.Dnn.Framework.SkinControlBase" %>
<%@ Register TagPrefix="dnn" TagName="COPYRIGHT" Src="~/Admin/Skins/Copyright.ascx" %>


<footer class="site--footer">
	<!-- Offices -->
	<div class="footer--offices">
		<div class="footer--container">
			<!-- Headquarters -->
			<div itemscope itemtype="https://schema.org/parentOrganization">
				<span itemprop="name">IIF Headquarters</span>
				<div itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
					<span itemprop="streetAddress">1333 H St NW, Suite 800E</span>
					<span itemprop="addressLocality">Washington, DC</span>
					<span itemprop="postalCode">20005-4770</span>
				</div>
				<div>Tel:<span itemprop="telephone"><a href="tel:+12028573600">+1 202 857-3600</a></span>,</div>
				<div>Fax:<span itemprop="faxNumber">+1 202 775-1430</span>,</div>
				<div>E-mail: <span itemprop="email"><a href="mailto:info@iif.com">info(at)iif.com</a></span></div>
			</div>
			<!-- Middle East and Africa -->
			<div itemscope itemtype="https://schema.org/subOrganization">
				<span itemprop="name">IIF Middle East and Africa</span>
				<span>Regional Office</span>
				<div itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
					<span itemprop="streetAddress">
						<span>DIFC, The Gate Building,</span>
						<span>Level 15</span>
						<span>P.O. Box 121208</span>
					<span itemprop="addressLocality">Dubai, United Arab Emirates</span>
					<span itemprop="postalCode">20005-4770</span>
				</div>
				<div>Tel:<span itemprop="telephone"><a href="tel:+97144019651">+971 4401 9651</a></span></div>
			</div>
			<!-- Asia Pacific -->
			<div itemscope itemtype="https://schema.org/subOrganization">
				<span itemprop="name">IIF Asia Pacific</span>
				<span>Regional Office - Beijing</span>
				<div itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
					<span itemprop="streetAddress">
						<span>Winland International Finance Centre</span>
						<span>Suite F920, 9F</span>
						<span>No.7 Jinrong Avenue</span>
					<span itemprop="addressLocality">Xicheng District, Beijing</span>
					<span itemprop="postalCode">100032, PRC</span>
				</div>
				<div>Tel:<span itemprop="telephone"><a href="tel:+861058369100">+86 10 5836 9100</a></span>,</div>
				<div>Fax:<span itemprop="faxNumber">+86 10 5836 9300</span></div>
			</div>
			<!-- Asia Pacific -->
			<div itemscope itemtype="https://schema.org/subOrganization">
				<span itemprop="name">IIF Asia Pacific</span>
				<span>Regional Office - Singapore</span>
				<div itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
					<span itemprop="streetAddress">
						<span>50 Raffles Place</span>
						<span>#22-06 Singapore Land Tower</span>
					<span itemprop="addressLocality">Singapore</span>
					<span itemprop="postalCode">048623</span>
				</div>
				<div>Tel:<span itemprop="telephone"><a href="tel:+6565925089">+65 6592 5089</a></span></div>
			</div>
			<!-- European -->
			<div itemscope itemtype="https://schema.org/subOrganization">
				<span itemprop="name">IIF European</span>
				<span>Representative Office</span>
				<div itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
					<span itemprop="streetAddress">
						<span>Square de Meeûs 23</span>
						<span>14th Floor</span>
						<span>1000 Brussels</span>
					<span itemprop="addressLocality">Belgium</span>
				</div>
				<div>Tel:<span itemprop="telephone"><a href="tel:+3224303708">+32 2 430 37 08</a></span></div>
			</div>
		</div>
	</div>

	<!-- Copyright & Social -->
	<div class="footer--info">
		<div class="footer--container">
			<dnn:COPYRIGHT runat="server" />
			<ul class="social-media">
				<li>
					<a href="https://twitter.com/iif" title="IIF on Twitter" target="_blank">
						<svg class="icon icon__svg icon__social icon__twitter">
							<use xlink:href="#icon__twitter" />
						</svg>
					</a>
				</li>
				<li>
					<a href="https://www.youtube.com/channel/UCWU5JLMmxGx6DN_gmx6lRQQ" title="IIF on YouTube" target="_blank">
						<svg class="icon icon__svg icon__social icon__youtube">
							<use xlink:href="#icon__youtube" />
						</svg>
					</a>
				</li>
				<li>
					<a href="https://www.linkedin.com/company/institute-of-international-finance" title="IIF on LinkedIn" target="_blank">
						<svg class="icon icon__svg icon__social icon__linkedin">
							<use xlink:href="#icon__linkedin" />
						</svg>
					</a>
				</li>
			</ul>
		</div>
	</div>
</footer>
