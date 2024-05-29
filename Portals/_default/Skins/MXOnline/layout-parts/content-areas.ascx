<script runat="server">
    Dim paneClass As String = "{0}-" + PortalSettings.ActiveTab.TabPath.Substring(2).Replace("//", "-").ToLower()
</script>

<div class="pane-fullwidth <%= String.Format(paneClass, "pane-fullwidth") %>">
    <div class="container mt-0">
        <div class="row">
            <div id="FullWidth" class="col" runat="server"></div>
        </div>
    </div>
</div>
<div class="pane-twocol <%= String.Format(paneClass, "pane-twocol") %>">
    <div class="container mt-0">
        <div class="row">
            <div id="TwoCol1" class="col-lg" runat="server"></div>
            <div id="TwoCol2" class="col-lg" runat="server"></div>
        </div>
    </div>
</div>
<div class="pane-contentpane <%= String.Format(paneClass, "pane-contentpane") %>">
    <div class="container mt-0">
        <div class="row">
            <div id="ContentPane" class="col" runat="server"></div>
        </div>
    </div>
</div>
<div class="pane-twocolbottom <%= String.Format(paneClass, "pane-twocolbottom") %>">
    <div class="container mt-0">
        <div class="row">
            <div id="TwoCol1Bottom" class="col-lg" runat="server"></div>
            <div id="TwoCol2Bottom" class="col-lg" runat="server"></div>
        </div>
    </div>
</div>
<div class="pane-fullwidthbottom <%= String.Format(paneClass, "pane-fullwidthbottom") %>">
    <div class="container mt-0">
        <div class="row">
            <div id="FullWidthBottom" class="col" runat="server"></div>
        </div>
    </div>
</div>
