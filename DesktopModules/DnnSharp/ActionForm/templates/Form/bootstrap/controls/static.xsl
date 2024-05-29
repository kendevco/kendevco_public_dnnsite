<?xml version="1.0" encoding="utf-8"?>

<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:utils="af:utils">

    <xsl:import href="attr-common.xsl"/>
    <xsl:import href="attr-container.xsl"/>
    <xsl:import href="label.xsl"/>
    <xsl:output method="html" indent="no" omit-xml-declaration="yes" />

    <xsl:template name="ctl-static">
    
        <div>
            <xsl:call-template name="ctl-attr-container" >
                <xsl:with-param name="withLabelColumn">false</xsl:with-param>
                <xsl:with-param name="addClasses">
                    <xsl:choose>
                        <xsl:when test="Align = 'left'">btnc-left</xsl:when>
                        <xsl:when test="Align = 'center'">btnc-center</xsl:when>
                        <xsl:when test="Align = 'right'">btnc-right</xsl:when>
                    </xsl:choose>
                </xsl:with-param>
            </xsl:call-template>
            
            <xsl:if test="CssStyles != ''">
                <xsl:attribute name="style">
                    <xsl:value-of select="utils:tokenize(CssStyles)"/>
                </xsl:attribute>
            </xsl:if>
                
            <input type="text" aria-hidden="true" aria-label="hidden input of static text" style="width:0!important;height:0!important;opacity:0!important;position:absolute!important;" tabindex="-1">
                <xsl:attribute name="ng-model">
                    <xsl:text>form.fields.</xsl:text>
                    <xsl:value-of select="Name"/>
                    <xsl:text>.value</xsl:text>
                </xsl:attribute>
                <xsl:attribute name="name">
                    <xsl:value-of select="/Form/Settings/BaseId"/>
                    <xsl:value-of select="Name"/>
                </xsl:attribute>

                <xsl:attribute name="id">
                    <xsl:value-of select="/Form/Settings/BaseId"/>
                    <xsl:value-of select="Name"/>
                </xsl:attribute>

                <xsl:attribute name="data-fieldid">
                    <xsl:value-of select="Id"/>
                </xsl:attribute>
                <xsl:attribute name="data-af-field">
                    <xsl:value-of select="Name"/>
                </xsl:attribute>

                <xsl:choose>
                    <xsl:when test="BindValue != ''">
                        <xsl:attribute name="af-bindvalue">
                            <xsl:value-of select="utils:parseAngularJs(BindValue, 'true')" />
                        </xsl:attribute>
                    </xsl:when>
                    <xsl:otherwise>

                        <xsl:attribute name="value">
                            <xsl:text>{{$sce.trustAsHtml(form.fields.</xsl:text>
                            <xsl:value-of select="Name"/>
                            <xsl:text>.value)}}</xsl:text>
                        </xsl:attribute>
                    </xsl:otherwise>
                </xsl:choose>
            </input>

            <p>
              <xsl:attribute name="class">
                <xsl:value-of select="utils:tokenize(CssClass)"/>
              </xsl:attribute>
              
                <xsl:attribute name="name">
                    <xsl:value-of select="/Form/Settings/BaseId"/>
                    <xsl:value-of select="Name" />
                </xsl:attribute>

                <xsl:if test="ShortDescTokenized != '' and /Form/Settings/LabelAlign = 'inside'">
                    <xsl:attribute name="title">
                        <xsl:value-of select="ShortDescTokenized"/>
                    </xsl:attribute>
                </xsl:if>
                               
                <xsl:choose>
                    <xsl:when test="BindValue != ''">
                        <xsl:attribute name="af-bindvalue">
                            <xsl:value-of select="utils:parseAngularJs(BindValue, 'true')" />
                        </xsl:attribute>

                        <xsl:attribute name="ng-model">
                            <xsl:text>form.fields.</xsl:text>
                            <xsl:value-of select="Name"/>
                            <xsl:text>.value</xsl:text>
                        </xsl:attribute>
                    </xsl:when>
                    <xsl:otherwise>
                        <xsl:attribute name="af-bind-html">
                            <xsl:text>form.fields.</xsl:text>
                            <xsl:value-of select="Name"/>
                            <xsl:text>.value</xsl:text>
                        </xsl:attribute>
                        <xsl:attribute name="ng-bind-html">
                            <xsl:text>afBoundHtml</xsl:text>
                        </xsl:attribute>
                    </xsl:otherwise>
                </xsl:choose>
                
            </p>
        </div>
    </xsl:template>

</xsl:stylesheet>
