<?xml version="1.0" encoding="utf-8"?>

<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:utils="af:utils">

  <xsl:import href="label.xsl"/>
  <xsl:import href="attr-common.xsl"/>
  <xsl:import href="attr-container.xsl"/>
  <xsl:output method="html" indent="no" omit-xml-declaration="yes" />

  <xsl:template name="ctl-date-flatpickr">
    <xsl:call-template name="ctl-datetime-flatpickr-common">
      <xsl:with-param name="pickerType">date</xsl:with-param>
    </xsl:call-template>
  </xsl:template>

  <xsl:template name="ctl-time-flatpickr">
    <xsl:call-template name="ctl-datetime-flatpickr-common">
      <xsl:with-param name="pickerType">time</xsl:with-param>
    </xsl:call-template>
  </xsl:template>

  <xsl:template name="ctl-datetime-flatpickr">
    <xsl:call-template name="ctl-datetime-flatpickr-common">
      <xsl:with-param name="pickerType">datetime</xsl:with-param>
    </xsl:call-template>
  </xsl:template>


  <xsl:template name="ctl-datetime-flatpickr-common">
    <xsl:param name="pickerType" />

    <!--If label is a column, render it here-->
    <xsl:if test="/Form/Settings/LabelAlign != 'inside' and /Form/Settings/LabelAlign != 'top'">
      <xsl:call-template name="ctl-label" />
    </xsl:if>

    <div>
      <xsl:call-template name="ctl-attr-container">
        <xsl:with-param name="addClasses">
          <!-- add additional container classes here-->
        </xsl:with-param>
      </xsl:call-template>

      <!--If label is top, render it here-->
      <xsl:if test="/Form/Settings/LabelAlign = 'top'">
        <xsl:call-template name="ctl-label" />
      </xsl:if>

      <div load-on-demand="'datetimeflatpickr'">
        <div datetimeflatpickr=""
             update-field="updateField(field, val)"
             register-control="registerControl(control)"
             data-form="form">

          <xsl:attribute name="pickerType">
            <xsl:value-of select="$pickerType"/>
          </xsl:attribute>

          <xsl:call-template name="ctl-attr-common">
            <xsl:with-param name="hasId">yes</xsl:with-param>
            <xsl:with-param name="hasName">yes</xsl:with-param>
            <xsl:with-param name="bind">yes</xsl:with-param>
            <xsl:with-param name="touchEvent">keyup</xsl:with-param>
          </xsl:call-template>

          <xsl:call-template name="ctl-attr-placeholder" />

          <xsl:if test="ShortDescTokenized != '' and /Form/Settings/LabelAlign = 'inside'">
            <xsl:attribute name="title">
              <xsl:value-of select="ShortDescTokenized"/>
            </xsl:attribute>
          </xsl:if>

          <xsl:attribute name="field-id">
            <xsl:value-of select="Name" />
          </xsl:attribute>

          <xsl:attribute name="data-client-format">
            <xsl:value-of select="ClientFormat" />
          </xsl:attribute>

          <xsl:attribute name="aria-describedby">
            <xsl:value-of select="Name" />
            <xsl:text>-</xsl:text>
            <xsl:value-of select="/Form/Settings/ModuleId"/>
          </xsl:attribute>

          <xsl:attribute name="module-id">
            <xsl:value-of select="/Form/Settings/ModuleId"/>
          </xsl:attribute>

          <input data-input=""
                 type="text">

            <xsl:attribute name="class">
              form-control valid-date-<xsl:value-of select="Name"/>
              <xsl:if test="/Form/Settings/ClientSideValidation ='True' and IsRequired='True' and CanValidate = 'True'">required</xsl:if>
            </xsl:attribute>

            <xsl:choose>
              <xsl:when test="IsEnabled != 'True'">
                <xsl:attribute name="disabled">disabled</xsl:attribute>
              </xsl:when>
            </xsl:choose>
          </input>
        </div>
      </div>

    </div>
  </xsl:template>

</xsl:stylesheet>
