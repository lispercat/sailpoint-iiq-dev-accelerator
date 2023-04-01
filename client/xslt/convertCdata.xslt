<xsl:transform version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="xml" indent="yes" omit-xml-declaration="yes" encoding="UTF-8"/>
    <xsl:template match="@*|node()">
        <xsl:copy>
            <xsl:apply-templates select="@*|node()" />
        </xsl:copy>
    </xsl:template>

    <xsl:template match="Source">
        <xsl:copy>
            <xsl:apply-templates select="@*" />
            <xsl:text disable-output-escaping="yes">&lt;![CDATA[</xsl:text>
            <xsl:value-of disable-output-escaping="yes" select="./text()"/>
            <xsl:text disable-output-escaping="yes">]]&gt;</xsl:text>
        </xsl:copy>
    </xsl:template>
</xsl:transform>