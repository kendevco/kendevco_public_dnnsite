﻿<?xml version="1.0" encoding="utf-8"?>

<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:utils="af:utils">
  <xsl:output method="html" indent="no" omit-xml-declaration="yes" />

  <xsl:template name="ctl-dynamic-field-container">

    <input type="hidden">
      <xsl:attribute name="name">
        <xsl:value-of select="/Form/Settings/BaseId"/>
        <xsl:value-of select="Name" />
      </xsl:attribute>

      <xsl:attribute name="id">
          <xsl:value-of select="/Form/Settings/BaseId"/>
          <xsl:value-of select="Name" />
      </xsl:attribute>

      <xsl:attribute name="data-fieldid">
        <xsl:value-of select="Id"/>
      </xsl:attribute>
      <xsl:attribute name="data-af-field">
        <xsl:value-of select="Name"/>
      </xsl:attribute>


      <xsl:attribute name="value">
        <xsl:value-of select="Value" />
      </xsl:attribute>

      <xsl:attribute name="data-ng-model">
        <xsl:text>form.fields.</xsl:text>
        <xsl:value-of select="Name"/>
        <xsl:text>.value</xsl:text>
      </xsl:attribute>

      <xsl:if test="BindValue != ''">
        <xsl:attribute name="data-af-bindvalue">
          <xsl:value-of select="utils:parseAngularJs(BindValue, 'true')" />
        </xsl:attribute>
      </xsl:if>

    </input>

  </xsl:template>

</xsl:stylesheet>
