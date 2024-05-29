<footer class="ui">
    <div class="ui segments">
        <div class="ui segment center aligned basic phone">
          <p class="stay-connected" style="display: flex; align-items: center; justify-content: center; margin-bottom: 5px;">
            <span style="padding-right: 10px;">Stay Connected:</span> <a href="https://www.facebook.com/FoundationBarnesJewish/" target="_blank" style="color: #FFFFFF; margin-right: 5px;"><i class="fab fa-facebook" style="color: #FFFFFF; font-size: 25px;"></i></a> &nbsp;&nbsp; <a href="https://www.youtube.com/channel/UC-NOev7kRNpPqwjf6UmWztA" target="_blank" style="color: #FFFFFF;"><i class="fab fa-youtube-square" style="color: #FFFFFF; font-size: 25px;"></i></a>
          </p>
          <p class="general-information">General Information: 314.286.0600</p>
        </div>
        
        <div class="ui segment basic address">
          <img class="footer-logo" src="<%=SkinPath %>/images/logos/FBJH_25yr_anniversary_logo.svg" style="max-width: 420px; margin-bottom: 15px;"/>
          
          1001 Highlands Plaza Drive West, Suite 140<br />
          St. Louis, MO 63110-1337 <br />
          <dnn:COPYRIGHT runat="server" id="dnnCopyright" />

          <div class="ui centered grid menu-wrapper">
            <div class="ui secondary menu">
              <a class="item" href="/">Home</a>
              <a class="item" href="/privacy" target="_blank">Privacy</a>
              <a class="item" href="/sitemaps">Sitemap</a>
            </div>
          </div>
        </div>
        
      <div class="ui segment basic logo">
        <div class="ui container">
          <a href="http://www.bjc.org" target="_blank"><img src="/Portals/_default/Skins/FoundationBJH/images/logos/bjc_healthcare-white.svg" alt="BJC HealthCare" height="27"></a>
         </div>
      </div>
    </div>
</footer>

<%--Removing unnecessary <meta> tags--%>
<script runat="server">
  protected override void OnLoad(EventArgs e)
  {
      var metatagsToKeep = new[] { "Content-Type","DESCRIPTION", "ROBOTS", "REVISIT-AFTER", "Viewport" };

      var metaTags = (
        from headerControl in this.Page.Header.Controls.OfType<HtmlControl>()
        let cont = headerControl
        where !metatagsToKeep.Contains(cont.Attributes["name"]) && !metatagsToKeep.Contains(cont.Attributes["http-equiv"])
        select headerControl
      )
      .Cast<Control>().ToList();

      foreach (var metaTag in metaTags)
      {
          this.Page.Header.Controls.Remove(metaTag);
      }
  }
</script>