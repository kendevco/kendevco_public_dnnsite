<?xml version="1.0" encoding="utf-8"?>

<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:utils="af:utils">

    <xsl:output method="html" indent="no" omit-xml-declaration="yes" />

    <xsl:template name="ctl-recaptchaV3">
        <div load-on-demand="'recaptchav3'">
            <input style="display: none;" recaptchav3="" data-register-control="registerControl(control)" submit-data="" type="text">
                <xsl:attribute name="id">
                    <xsl:value-of select="/Form/Settings/BaseId"/>
                    <xsl:value-of select="Name"/>
                </xsl:attribute>

                <xsl:attribute name="name">
                    <xsl:value-of select="/Form/Settings/BaseId"/>
                    <xsl:value-of select="Name" />
                </xsl:attribute>

                <xsl:attribute name="data-fieldid">
                    <xsl:value-of select="Id"/>
                </xsl:attribute>

                <xsl:attribute name="data-af-field">
                    <xsl:value-of select="Name"/>
                </xsl:attribute>

                <xsl:attribute name="data-ng-model">
                    <xsl:text>form.fields.</xsl:text>
                    <xsl:value-of select="Name"/>
                    <xsl:text>.value</xsl:text>
                </xsl:attribute>

                <xsl:attribute name="field">
                    <xsl:text>settings.Fields['</xsl:text>
                    <xsl:value-of select="Name" />
                    <xsl:text>']</xsl:text>
                </xsl:attribute>

                <xsl:attribute name="key">
                    '<xsl:value-of select="SiteKey"></xsl:value-of>'
                </xsl:attribute>

            </input>
        </div>
    </xsl:template>

</xsl:stylesheet>
