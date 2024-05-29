<?xml version="1.0" encoding="utf-8"?>

<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:utils="af:utils">

    <xsl:import href="label.xsl"/>
    <xsl:import href="attr-common.xsl"/>
    <xsl:import href="attr-container.xsl"/>
    <xsl:output method="html" indent="no" omit-xml-declaration="yes" />

    <xsl:template name="ctl-textarea">
        <xsl:param name="addclass" />

        <!--If label is a column, render it here-->
        <xsl:if test="/Form/Settings/LabelAlign != 'inside' and /Form/Settings/LabelAlign != 'top' and /Form/Settings/FloatingLabels = 'False'">
            <xsl:call-template name="ctl-label" />
        </xsl:if>

        <div>
            <xsl:call-template name="ctl-attr-container">
                <xsl:with-param name="addClasses">
                    <!-- add additional container classes here-->
                    <xsl:if test="/Form/Settings/FloatingLabels != 'False'">has-float-label</xsl:if>
                </xsl:with-param>
            </xsl:call-template>

            <!--If label is top, render it here-->
            <xsl:if test="/Form/Settings/LabelAlign = 'top' and /Form/Settings/FloatingLabels = 'False'">
                <xsl:call-template name="ctl-label" />
            </xsl:if>
            
            <textarea>
              <xsl:call-template name="ctl-attr-common">
                <xsl:with-param name="cssclass">
                    <xsl:text>form-control </xsl:text>
                    <xsl:if test="/Form/Settings/ClientSideValidation ='True' and IsRequired='True' and CanValidate = 'True'">required-dnnsf </xsl:if>
                    <xsl:value-of select="$addclass"/>
                </xsl:with-param>
                <xsl:with-param name="hasId">yes</xsl:with-param>
                <xsl:with-param name="hasName">yes</xsl:with-param>
                <xsl:with-param name="bind">yes</xsl:with-param>
                <xsl:with-param name="touchEvent">keyup</xsl:with-param>
              </xsl:call-template>
                
              <xsl:choose>
                <xsl:when test="/Form/Settings/FloatingLabels = 'False'">
                    <xsl:call-template name="ctl-attr-placeholder" />
                </xsl:when>

                <xsl:otherwise>
                    <xsl:attribute name="placeholder">
                        <xsl:value-of select="TitleTokenized"/>
                    </xsl:attribute>
                </xsl:otherwise>
              </xsl:choose>

              <xsl:attribute name="rows">
                <xsl:if test="Rows and Rows != ''">
                  <xsl:value-of select="Rows"/>
                </xsl:if>

                <xsl:if test="not(Rows) or Rows = ''">
                  <xsl:text>10</xsl:text>
                </xsl:if>
                
              </xsl:attribute>
              
                <xsl:if test="ShortDescTokenized != '' and /Form/Settings/LabelAlign = 'inside'">
                    <xsl:attribute name="title">
                        <xsl:value-of select="ShortDescTokenized"/>
                    </xsl:attribute>
                </xsl:if>
                       
                <xsl:if test="IsEnabled != 'True'">
                    <xsl:attribute name="disabled">disabled</xsl:attribute>
                </xsl:if>
                <xsl:if test="$addclass = 'richedit'">
                    <xsl:attribute name="data-af-richedit"></xsl:attribute>
                </xsl:if>
                <xsl:value-of select="Value"/>
            </textarea>
            <xsl:if test="/Form/Settings/FloatingLabels = 'True'">
                <label>
                    <xsl:attribute name="for">
                        <xsl:value-of select="/Form/Settings/BaseId"/>
                        <xsl:value-of select="Name"/>
                    </xsl:attribute>
                    <xsl:attribute name="name">
                        <xsl:value-of select="Name"/>
                    </xsl:attribute>
                    <xsl:value-of select="TitleTokenized" disable-output-escaping="yes" />
                </label>
            </xsl:if>
        </div>
    </xsl:template>

</xsl:stylesheet>
