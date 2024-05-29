<?xml version="1.0" encoding="utf-8"?>

<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:utils="af:utils">

  <xsl:import href="label.xsl"/>
  <xsl:import href="attr-common.xsl"/>
  <xsl:import href="attr-container.xsl"/>
  <xsl:output method="html" indent="no" omit-xml-declaration="yes" />

  <xsl:template name="ctl-currency-v2-placeholder">
    <xsl:param name="addclass" />

    <!--If label is a column, render it here-->
    <xsl:if test="/Form/Settings/LabelAlign != 'inside' and /Form/Settings/LabelAlign != 'top'">
      <xsl:call-template name="ctl-label" />
    </xsl:if>

    <div>
      <xsl:call-template name="ctl-attr-container" />

      <!--If label is top, render it here-->
      <xsl:if test="/Form/Settings/LabelAlign = 'top'">
        <xsl:call-template name="ctl-label" />
      </xsl:if>
      The new currency field is not supported by the obsolete templates. Please use the new Bootstrap 5 templates.
    </div>

  </xsl:template>

</xsl:stylesheet>
