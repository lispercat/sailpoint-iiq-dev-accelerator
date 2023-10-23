import * as fs from 'fs';
var xpath = require('xpath')
import { DOMParser } from '@xmldom/xmldom'
import { XMLSerializer } from '@xmldom/xmldom'

let xml = fs.readFileSync("D:/Dev/sailpoint-iiq-ssd-base/config/Application/TestApp.xml",'utf8');
var doc = new DOMParser().parseFromString(xml)

var node = xpath.select("/Application/Schemas/Schema[@objectType='account']/@objectType", doc)
if(node && node.length){
  node[0].value = "new_file.txt"
  var new_xml = new XMLSerializer().serializeToString(doc)
  new_xml
  // new_xml
}

