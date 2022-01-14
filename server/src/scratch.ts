import * as xml2js from 'xml2js';
import * as fs from 'fs';
const xmlParser = new xml2js.Parser({ attrkey: "ATTR" });
const fileContent = fs.readFileSync("D:/Dev/iiq-dev-accelerator/beanshell_grammar/Test.xml", {encoding:'utf8', flag:'r'});

var parsedXml = null;
xmlParser.parseString(fileContent, function(error, result) {
  if(error === null) {
    parsedXml = result;
  }
  else {
      console.log(error);
  }
});
parsedXml
console.log(parsedXml["Rule"]["Source"])

var teststr = "Some brown fox";
var start = teststr.search("brown");
start
const txt1 = `aaa
bbb
ccc
`;
txt1

const txt2 = `bbb
ccc`;

const txt3 = "aaa\r\nbbb\r\nccc";
const txt4 = "bbb\r\nccc";


const ind = txt1.search(txt2);
ind

const ind2 = txt3.search(txt4);
ind2




