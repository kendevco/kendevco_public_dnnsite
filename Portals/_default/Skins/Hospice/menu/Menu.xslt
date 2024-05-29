<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html"/>
  <xsl:param name="ControlID" />
  <xsl:param name="Options" />
  <xsl:param name="subMenuColumns">1</xsl:param>
  <xsl:param name="subpointer"><![CDATA[&raquo;&nbsp;]]></xsl:param>
  <xsl:param name="pointer"><![CDATA[&nbsp;&raquo;]]></xsl:param>
  <xsl:param name="startUl"><![CDATA[<ul>]]></xsl:param>
  <xsl:param name="endUl"><![CDATA[</ul>]]></xsl:param>
  <xsl:template match="/*">
    <xsl:apply-templates select="root" />
  </xsl:template>
  <xsl:template match="root">
    <script type="text/javascript">
      jQuery(document).ready(function() {
      splitSubMenu(<xsl:value-of select="$subMenuColumns"/>);
      });
    </script>
    <ul class="menu">
      <li class="toggle-menu pull-right">MENU</li>
      <xsl:apply-templates select="node">
        <xsl:with-param name="level" select="0"/>
      </xsl:apply-templates>
    </ul>
  </xsl:template>
  <xsl:template match="node">
    <xsl:param name="level" />
    <xsl:choose>
      <xsl:when test="$level=0">
        <li>
          <xsl:choose>
            <xsl:when test="@text = 'Donate'">
              <xsl:attribute name="class">
                <xsl:value-of select="'specialbg'"/>
              </xsl:attribute>
            </xsl:when>
          </xsl:choose>
          <a>
            <xsl:attribute name="class">
              <xsl:if test="@breadcrumb = 1">current</xsl:if>
            </xsl:attribute>
            <xsl:choose>
              <xsl:when test="@enabled = 1">
                <xsl:attribute name="href">
                  <xsl:value-of select="@url"/>
                </xsl:attribute>
              </xsl:when>
              <xsl:otherwise>
                <xsl:attribute name="href">#</xsl:attribute>
                <xsl:attribute name="onclick">return false</xsl:attribute>
              </xsl:otherwise>
            </xsl:choose>
            <xsl:value-of select="@text" />
          </a>
          <xsl:if test="node">
            <ul class="submenu">
              <xsl:apply-templates select="node">
                <xsl:with-param name="level" select="$level + 1" />
              </xsl:apply-templates>
            </ul>
          </xsl:if>
        </li>

        <xsl:choose>
          <xsl:when test="position() = last()">
            <li class="li-icon">
              <a href="#" id="search-trigger">
                <i class="icon icon_search"></i>
                <span class="li-visible-mobile">Search</span>
              </a>
              <div class="megamenu">
                <div class="row">
                  <div class="col-12">
                    <!--<form action="#" class="menu-search">-->
                    <div class="menu-search">
                      <input type="text" placeholder="type and hit enter" id="txtSearch" autocomplete="off" />
                      <a href="javascript:void(0)" class="btn-search" id="btnSearch">
                        <i class="icon icon_search"></i>
                      </a>
                    </div>
                    <!--</form>-->
                  </div>
                </div>
              </div>
            </li>
          </xsl:when>
        </xsl:choose>

      </xsl:when>
      <xsl:when test="$level=1">
        <li>
          <xsl:choose>
            <xsl:when test="node">
              <xsl:attribute name="class">has-child</xsl:attribute>
            </xsl:when>
          </xsl:choose>
          <a>
            <xsl:choose>
              <xsl:when test="@enabled = 1">
                <xsl:attribute name="href">
                  <xsl:value-of select="@url"/>
                </xsl:attribute>
              </xsl:when>
              <xsl:otherwise>
                <xsl:attribute name="href">#</xsl:attribute>
                <xsl:attribute name="onclick">return false</xsl:attribute>
              </xsl:otherwise>
            </xsl:choose>
            <xsl:choose>
              <xsl:when test="@target != ''">
                <xsl:attribute name="target">
                  <xsl:value-of select="@target"/>
                </xsl:attribute>
              </xsl:when>
              <xsl:otherwise>
              </xsl:otherwise>
            </xsl:choose>
            <xsl:value-of select="@text" />

          </a>
          <xsl:if test="node">
            <ul class="submenu">
              <xsl:apply-templates select="node">
                <xsl:with-param name="level" select="$level + 1" />
              </xsl:apply-templates>
            </ul>
          </xsl:if>
        </li>
      </xsl:when>

      <xsl:when test="$level=2">
        <li>
          <a>
            <xsl:choose>
              <xsl:when test="@enabled = 1">
                <xsl:attribute name="href">
                  <xsl:value-of select="@url"/>
                </xsl:attribute>
              </xsl:when>
              <xsl:otherwise>
                <xsl:attribute name="href">#</xsl:attribute>
                <xsl:attribute name="onclick">return false</xsl:attribute>
              </xsl:otherwise>
            </xsl:choose>
            <xsl:choose>
              <xsl:when test="@target != ''">
                <xsl:attribute name="target">
                  <xsl:value-of select="@target"/>
                </xsl:attribute>
              </xsl:when>
              <xsl:otherwise>
              </xsl:otherwise>
            </xsl:choose>
            <xsl:value-of select="@text" />
          </a>
        </li>
        <!--<xsl:if test="node">
          <xsl:apply-templates select="node">
            <xsl:with-param name="level" select="$level + 1" />
          </xsl:apply-templates>
        </xsl:if>-->
      </xsl:when>

      <xsl:otherwise>
        <li class="sublink">
          <a>
            <xsl:choose>
              <xsl:when test="@enabled = 1">
                <xsl:attribute name="href">
                  <xsl:value-of select="@url"/>
                </xsl:attribute>
              </xsl:when>
              <xsl:otherwise>
                <xsl:attribute name="href">#</xsl:attribute>
                <xsl:attribute name="onclick">return false</xsl:attribute>
              </xsl:otherwise>
            </xsl:choose>
            <xsl:choose>
              <xsl:when test="@target != ''">
                <xsl:attribute name="target">
                  <xsl:value-of select="@target"/>
                </xsl:attribute>
              </xsl:when>
              <xsl:otherwise>
              </xsl:otherwise>
            </xsl:choose>
            <span>
              <xsl:value-of select="$subpointer" disable-output-escaping="yes"/>
            </span>
            <xsl:value-of select="@text" />
          </a>
        </li>
        <!--<xsl:if test="node">
          <xsl:apply-templates select="node">
            <xsl:with-param name="level" select="$level + 1" />
          </xsl:apply-templates>
        </xsl:if>-->
      </xsl:otherwise>
    </xsl:choose>
  </xsl:template>
</xsl:stylesheet>
