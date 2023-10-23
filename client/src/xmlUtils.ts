import * as SaxonJs from 'saxon-js';



function appendXmlDeclaration(xml: string, className: string): string {
    const resultXml = `<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE ${className} PUBLIC "sailpoint.dtd" "sailpoint.dtd">\n` + xml;
    return resultXml;
}

/**
 *
 * @param sourceXml XML in string
 * @param xslt must be in stylesheet export file (SEF). To compile the XSLT, run the command "npm run xslt3" and use the content of the .sef.json files
 * @param className
 * @returns transformed XML as a string
 */
function applyXslt(sourceXml: string, xslt: string, className: string): string {

    const result = SaxonJs.transform({
        stylesheetText: xslt,
        sourceText: sourceXml,
        destination: "serialized",
        outputProperties: {
            method: "xml"
        }

    });
    return result.principalResult;
}

/**
 * Note: this transform removes the XML declaration.
 * @param sourceXml
 * @param className
 * @returns
 */
function removeIds(sourceXml: string, className: string): string {
    const xslt = '{"N":"package","version":"10","packageVersion":"1","saxonVersion":"SaxonJS 2.5","target":"JS","targetVersion":"2","name":"TOP-LEVEL","relocatable":"false","buildDateTime":"2023-09-30T14:28:30.918-04:00","ns":"xml=~ xsl=~","C":[{"N":"co","id":"0","binds":"0","C":[{"N":"mode","onNo":"TC","flags":"","patternSlots":"0","prec":"","C":[{"N":"templateRule","rank":"0","prec":"0","seq":"0","ns":"xml=~ xsl=~","minImp":"0","flags":"s","slots":"200","baseUri":"file://D:/Dev/iiq-dev-accelerator/client/xslt/removeIds.xslt","line":"3","module":"removeIds.xslt","expand-text":"false","match":"TaskResult/@id","prio":"0.5","matches":"NA nQ{}id","C":[{"N":"p.withUpper","role":"match","axis":"parent","sType":"1NA nQ{}id","ns":"= xml=~ fn=~ xsl=~ ","C":[{"N":"p.nodeTest","test":"NA nQ{}id"},{"N":"p.nodeTest","test":"NE nQ{}TaskResult"}]},{"N":"att","name":"id","sType":"1NA ","role":"action","line":"4","C":[{"N":"fn","name":"string-join","role":"select","C":[{"N":"first","C":[{"N":"forEach","sType":"*AS ","C":[{"N":"data","sType":"*A ","C":[{"N":"mergeAdj","C":[{"N":"valueOf","sType":"1NT ","flags":"l","line":"5","C":[{"N":"fn","name":"string-join","role":"select","C":[{"N":"first","C":[{"N":"forEach","sType":"*AS ","C":[{"N":"data","sType":"*A ","C":[{"N":"mergeAdj","C":[{"N":"dot","sType":"1NA nQ{}id","ns":"= xml=~ fn=~ xsl=~ ","role":"select","line":"5"}]}]},{"N":"fn","name":"string","sType":"1AS ","C":[{"N":"dot"}]}]}]},{"N":"str","sType":"1AS ","val":" "}]}]}]}]},{"N":"fn","name":"string","sType":"1AS ","C":[{"N":"dot"}]}]}]},{"N":"str","sType":"1AS ","val":""}]}]}]},{"N":"templateRule","rank":"1","prec":"0","seq":"1","ns":"xml=~ xsl=~","minImp":"0","flags":"s","slots":"200","baseUri":"file://D:/Dev/iiq-dev-accelerator/client/xslt/removeIds.xslt","line":"9","module":"removeIds.xslt","expand-text":"false","match":"@created|@id|@modified|@assignmentId|@targetId|@identityId|@policyId","prio":"0","matches":"NA nQ{}created","C":[{"N":"p.nodeTest","role":"match","test":"NA nQ{}created","sType":"1NA nQ{}created"},{"N":"empty","sType":"0 ","role":"action"}]},{"N":"templateRule","rank":"2","prec":"0","seq":"1","ns":"xml=~ xsl=~","minImp":"0","flags":"s","slots":"200","baseUri":"file://D:/Dev/iiq-dev-accelerator/client/xslt/removeIds.xslt","line":"9","module":"removeIds.xslt","expand-text":"false","match":"@created|@id|@modified|@assignmentId|@targetId|@identityId|@policyId","prio":"0","matches":"NA nQ{}id","C":[{"N":"p.nodeTest","role":"match","test":"NA nQ{}id","sType":"1NA nQ{}id"},{"N":"empty","sType":"0 ","role":"action"}]},{"N":"templateRule","rank":"3","prec":"0","seq":"1","ns":"xml=~ xsl=~","minImp":"0","flags":"s","slots":"200","baseUri":"file://D:/Dev/iiq-dev-accelerator/client/xslt/removeIds.xslt","line":"9","module":"removeIds.xslt","expand-text":"false","match":"@created|@id|@modified|@assignmentId|@targetId|@identityId|@policyId","prio":"0","matches":"NA nQ{}modified","C":[{"N":"p.nodeTest","role":"match","test":"NA nQ{}modified","sType":"1NA nQ{}modified"},{"N":"empty","sType":"0 ","role":"action"}]},{"N":"templateRule","rank":"4","prec":"0","seq":"1","ns":"xml=~ xsl=~","minImp":"0","flags":"s","slots":"200","baseUri":"file://D:/Dev/iiq-dev-accelerator/client/xslt/removeIds.xslt","line":"9","module":"removeIds.xslt","expand-text":"false","match":"@created|@id|@modified|@assignmentId|@targetId|@identityId|@policyId","prio":"0","matches":"NA nQ{}assignmentId","C":[{"N":"p.nodeTest","role":"match","test":"NA nQ{}assignmentId","sType":"1NA nQ{}assignmentId"},{"N":"empty","sType":"0 ","role":"action"}]},{"N":"templateRule","rank":"5","prec":"0","seq":"1","ns":"xml=~ xsl=~","minImp":"0","flags":"s","slots":"200","baseUri":"file://D:/Dev/iiq-dev-accelerator/client/xslt/removeIds.xslt","line":"9","module":"removeIds.xslt","expand-text":"false","match":"@created|@id|@modified|@assignmentId|@targetId|@identityId|@policyId","prio":"0","matches":"NA nQ{}targetId","C":[{"N":"p.nodeTest","role":"match","test":"NA nQ{}targetId","sType":"1NA nQ{}targetId"},{"N":"empty","sType":"0 ","role":"action"}]},{"N":"templateRule","rank":"6","prec":"0","seq":"1","ns":"xml=~ xsl=~","minImp":"0","flags":"s","slots":"200","baseUri":"file://D:/Dev/iiq-dev-accelerator/client/xslt/removeIds.xslt","line":"9","module":"removeIds.xslt","expand-text":"false","match":"@created|@id|@modified|@assignmentId|@targetId|@identityId|@policyId","prio":"0","matches":"NA nQ{}identityId","C":[{"N":"p.nodeTest","role":"match","test":"NA nQ{}identityId","sType":"1NA nQ{}identityId"},{"N":"empty","sType":"0 ","role":"action"}]},{"N":"templateRule","rank":"7","prec":"0","seq":"1","ns":"xml=~ xsl=~","minImp":"0","flags":"s","slots":"200","baseUri":"file://D:/Dev/iiq-dev-accelerator/client/xslt/removeIds.xslt","line":"9","module":"removeIds.xslt","expand-text":"false","match":"@created|@id|@modified|@assignmentId|@targetId|@identityId|@policyId","prio":"0","matches":"NA nQ{}policyId","C":[{"N":"p.nodeTest","role":"match","test":"NA nQ{}policyId","sType":"1NA nQ{}policyId"},{"N":"empty","sType":"0 ","role":"action"}]},{"N":"templateRule","rank":"8","prec":"0","seq":"2","ns":"xml=~ xsl=~","minImp":"0","flags":"s","slots":"200","baseUri":"file://D:/Dev/iiq-dev-accelerator/client/xslt/removeIds.xslt","line":"11","module":"removeIds.xslt","expand-text":"false","match":"@*|node()","prio":"-0.5","matches":"NA","C":[{"N":"p.nodeTest","role":"match","test":"NA","sType":"1NA"},{"N":"copy","sType":"1NA ","flags":"cin","role":"action","line":"12","C":[{"N":"applyT","sType":"* ","line":"13","mode":"#unnamed","bSlot":"0","C":[{"N":"docOrder","sType":"*N u[NT,NP,NC,NE]","role":"select","line":"13","C":[{"N":"union","op":"|","sType":"*N u[NT,NP,NC,NE]","ns":"= xml=~ fn=~ xsl=~ ","C":[{"N":"axis","name":"attribute","nodeTest":"*NA"},{"N":"axis","name":"child","nodeTest":"*N u[NT,NP,NC,NE]"}]}]}]}]}]},{"N":"templateRule","rank":"9","prec":"0","seq":"2","ns":"xml=~ xsl=~","minImp":"0","flags":"s","slots":"200","baseUri":"file://D:/Dev/iiq-dev-accelerator/client/xslt/removeIds.xslt","line":"11","module":"removeIds.xslt","expand-text":"false","match":"@*|node()","prio":"-0.5","matches":"N u[NT,NP,NC,NE]","C":[{"N":"p.nodeTest","role":"match","test":"N u[NT,NP,NC,NE]","sType":"1N u[NT,NP,NC,NE]"},{"N":"copy","sType":"1N u[1NT ,1NP ,1NC ,1NE ] ","flags":"cin","role":"action","line":"12","C":[{"N":"applyT","sType":"* ","line":"13","mode":"#unnamed","bSlot":"0","C":[{"N":"docOrder","sType":"*N u[NT,NP,NC,NE]","role":"select","line":"13","C":[{"N":"union","op":"|","sType":"*N u[NT,NP,NC,NE]","ns":"= xml=~ fn=~ xsl=~ ","C":[{"N":"axis","name":"attribute","nodeTest":"*NA"},{"N":"axis","name":"child","nodeTest":"*N u[NT,NP,NC,NE]"}]}]}]}]}]}]}]},{"N":"overridden"},{"N":"output","C":[{"N":"property","name":"Q{http://saxon.sf.net/}stylesheet-version","value":"10"},{"N":"property","name":"method","value":"xml"},{"N":"property","name":"encoding","value":"UTF-8"},{"N":"property","name":"indent","value":"yes"},{"N":"property","name":"omit-xml-declaration","value":"yes"}]},{"N":"decimalFormat"}],"Σ":"1a7e3109"}';
    const resultXml = applyXslt(sourceXml, xslt, className);
    return resultXml;
};

/**
 * Note: this transform removes the XML declaration.
 * @param sourceXml
 * @param className
 * @returns
 */
function convertSourceCDATA(sourceXml: string, className: string): string {
    const xslt = '{"N":"package","version":"20","packageVersion":"1","saxonVersion":"SaxonJS 2.5","target":"JS","targetVersion":"2","name":"TOP-LEVEL","relocatable":"false","buildDateTime":"2023-03-22T18:46:52.548+01:00","ns":"xml=~ xsl=~","C":[{"N":"co","id":"0","binds":"0","C":[{"N":"mode","onNo":"TC","flags":"","patternSlots":"0","prec":"","C":[{"N":"templateRule","rank":"0","prec":"0","seq":"1","ns":"xml=~ xsl=~","minImp":"0","flags":"s","slots":"200","baseUri":"file://C:/dev/sailpoint-iiq-dev-accelerator/client/xslt/convertCdata.xslt","line":"9","module":"convertCdata.xslt","expand-text":"false","match":"Source","prio":"0","matches":"NE nQ{}Source","C":[{"N":"p.nodeTest","role":"match","test":"NE nQ{}Source","sType":"1NE nQ{}Source","ns":"= xml=~ fn=~ xsl=~ "},{"N":"copy","sType":"1NE nQ{}Source ","flags":"cin","role":"action","line":"10","C":[{"N":"sequence","sType":"* ","C":[{"N":"applyT","sType":"* ","line":"11","mode":"#unnamed","bSlot":"0","C":[{"N":"axis","name":"attribute","nodeTest":"*NA","sType":"*NA","ns":"= xml=~ fn=~ xsl=~ ","role":"select","line":"11"}]},{"N":"valueOf","sType":"1NT ","flags":"d","C":[{"N":"str","sType":"1AS ","val":"<![CDATA["}]},{"N":"valueOf","flags":"d","sType":"1NT ","line":"13","C":[{"N":"fn","name":"string-join","role":"select","C":[{"N":"forEach","sType":"*AS ","C":[{"N":"data","sType":"*A ","C":[{"N":"mergeAdj","C":[{"N":"docOrder","sType":"*NT","role":"select","line":"13","C":[{"N":"slash","op":"/","sType":"*NT","ns":"= xml=~ fn=~ xsl=~ ","C":[{"N":"dot"},{"N":"axis","name":"child","nodeTest":"*NT"}]}]}]}]},{"N":"fn","name":"string","sType":"1AS ","C":[{"N":"dot"}]}]},{"N":"str","sType":"1AS ","val":" "}]}]},{"N":"valueOf","sType":"1NT ","flags":"d","C":[{"N":"str","sType":"1AS ","val":"]]>"}]}]}]}]},{"N":"templateRule","rank":"1","prec":"0","seq":"0","ns":"xml=~ xsl=~","minImp":"0","flags":"s","slots":"200","baseUri":"file://C:/dev/sailpoint-iiq-dev-accelerator/client/xslt/convertCdata.xslt","line":"3","module":"convertCdata.xslt","expand-text":"false","match":"@*|node()","prio":"-0.5","matches":"NA","C":[{"N":"p.nodeTest","role":"match","test":"NA","sType":"1NA"},{"N":"copy","sType":"1NA ","flags":"cin","role":"action","line":"4","C":[{"N":"applyT","sType":"* ","line":"5","mode":"#unnamed","bSlot":"0","C":[{"N":"docOrder","sType":"*N u[NT,NP,NC,NE]","role":"select","line":"5","C":[{"N":"union","op":"|","sType":"*N u[NT,NP,NC,NE]","ns":"= xml=~ fn=~ xsl=~ ","C":[{"N":"axis","name":"attribute","nodeTest":"*NA"},{"N":"axis","name":"child","nodeTest":"*N u[NT,NP,NC,NE]"}]}]}]}]}]},{"N":"templateRule","rank":"2","prec":"0","seq":"0","ns":"xml=~ xsl=~","minImp":"0","flags":"s","slots":"200","baseUri":"file://C:/dev/sailpoint-iiq-dev-accelerator/client/xslt/convertCdata.xslt","line":"3","module":"convertCdata.xslt","expand-text":"false","match":"@*|node()","prio":"-0.5","matches":"N u[NT,NP,NC,NE]","C":[{"N":"p.nodeTest","role":"match","test":"N u[NT,NP,NC,NE]","sType":"1N u[NT,NP,NC,NE]"},{"N":"copy","sType":"1N u[1NT ,1NP ,1NC ,1NE ] ","flags":"cin","role":"action","line":"4","C":[{"N":"applyT","sType":"* ","line":"5","mode":"#unnamed","bSlot":"0","C":[{"N":"docOrder","sType":"*N u[NT,NP,NC,NE]","role":"select","line":"5","C":[{"N":"union","op":"|","sType":"*N u[NT,NP,NC,NE]","ns":"= xml=~ fn=~ xsl=~ ","C":[{"N":"axis","name":"attribute","nodeTest":"*NA"},{"N":"axis","name":"child","nodeTest":"*N u[NT,NP,NC,NE]"}]}]}]}]}]}]}]},{"N":"overridden"},{"N":"output","C":[{"N":"property","name":"Q{http://saxon.sf.net/}stylesheet-version","value":"20"},{"N":"property","name":"method","value":"xml"},{"N":"property","name":"indent","value":"yes"},{"N":"property","name":"omit-xml-declaration","value":"yes"},{"N":"property","name":"encoding","value":"UTF-8"}]},{"N":"decimalFormat"}],"Σ":"13354282"}';
    const resultXml = applyXslt(sourceXml, xslt, className);
    return resultXml;
};

/**
 * Remove Ids and transform source code into CDATA sections. It adds the XML declaration and DTD declaration as well
 * @param sourceXml
 * @param className
 * @returns
 */
export function beautifyIIQObject(sourceXml: string, className: string): string {
    let xml = removeIds(sourceXml, className);
    xml = convertSourceCDATA(xml, className);
    xml = appendXmlDeclaration(xml, className);
    return xml
}

/**
 * Replaces "illegal" characters (anything other than alphanumeric characters, dots, or hyphens) with underscores in the name of an IIQ Object.
 * "Illegal" characters are defined as such in the documentation for the Sailpoint-provided XML Object Exporter Task. 
 * @param objectName
 * @returns object name with problematic characters changed to underscores
 */
export function sanitizeIIQObjectName(objectName: string): string {
    return objectName.replace(/[^-a-zA-Z0-9_.]+/g, "_")
}