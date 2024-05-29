<?xml version="1.0" encoding="utf-8"?>

<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:utils="af:utils">

    <xsl:import href="label.xsl"/>
    <xsl:import href="attr-common.xsl"/>
    <xsl:import href="attr-container.xsl"/>
    <xsl:output method="html" indent="no" omit-xml-declaration="yes" />

    <xsl:template name="ctl-upload">
        <xsl:param name="addclass" />

        <!--If label is a column, render it here-->
        <xsl:if test="/Form/Settings/LabelAlign != 'inside' and /Form/Settings/LabelAlign != 'top'">
            <xsl:call-template name="ctl-label" />
        </xsl:if>


        <div>
            <xsl:call-template name="ctl-attr-container">
                <xsl:with-param name="addClasses">fileupload-root</xsl:with-param>
            </xsl:call-template>

            <!--If label is top, render it here-->
            <xsl:if test="/Form/Settings/LabelAlign = 'top'">
                <xsl:call-template name="ctl-label" />
            </xsl:if>

            <xsl:if test="ShortDescTokenized != '' and /Form/Settings/LabelAlign = 'inside'">
                <xsl:attribute name="title">
                    <xsl:value-of select="ShortDescTokenized"/>
                </xsl:attribute>
            </xsl:if>
          <div data-settings="settings"
                 data-form="form">
            <xsl:attribute name="data-field">
              <xsl:text>settings.Fields['</xsl:text>
              <xsl:value-of select="Name" />
              <xsl:text>']</xsl:text>
            </xsl:attribute>
            <xsl:attribute name="id">
              <xsl:value-of select="/Form/Settings/BaseId"/>
              <xsl:value-of select="Name" />
            </xsl:attribute>
            <xsl:attribute name="data-ng-model">
              <xsl:text>form.fields.</xsl:text>
              <xsl:value-of select="Name"/>
              <xsl:text>.value</xsl:text>
            </xsl:attribute>
            <div data-af-multi-upload=""
                data-settings="settings"
                update-field="updateField(field, val)"
                data-register-control="registerControl(control)"
                data-register-to-event="registerToEvent(eventName, fn)">
              <xsl:attribute name="data-field">
                <xsl:text>settings.Fields['</xsl:text>
                <xsl:value-of select="Name" />
                <xsl:text>']</xsl:text>
              </xsl:attribute>
              <xsl:attribute name="data-file-extensions">
                <xsl:value-of select="FileExt"/>
              </xsl:attribute>
              <xsl:if test="/Form/Settings/ClientSideValidation ='True' and IsRequired='True' and CanValidate = 'True'">
                <xsl:attribute name="is-required">
                  <xsl:text>true</xsl:text>
                </xsl:attribute>
              </xsl:if>
              <xsl:attribute name="SingleFileUpload"></xsl:attribute>
              <xsl:attribute name="data-selection">
                <xsl:text>form.fields.</xsl:text>
                <xsl:value-of select="Name"/>
                <xsl:text>.value</xsl:text>
              </xsl:attribute>
              <xsl:attribute name="is-enabled">
                <xsl:if test="IsEnabled != 'True' and BindEnable = ''">
                    <xsl:text>'</xsl:text>
                    <xsl:value-of select="IsEnabled"/>
                    <xsl:text>'</xsl:text>
                </xsl:if>
                <xsl:if test="BindEnable != ''">
                    <xsl:value-of select="utils:parseAngularJs(BindEnable, 'true')"/>
                </xsl:if>
                <xsl:if test="BindEnable = '' and IsEnabled = 'True'">
                    true
                </xsl:if>
              </xsl:attribute>
            </div>
          </div>
        </div>
    </xsl:template>

</xsl:stylesheet>
