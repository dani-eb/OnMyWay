const test = require('./scripts/test.js');
const fs = require('fs');

var parseString = require('xml2js').parseString;

parseString(xml, (err, result) => {
    if (err) {
        console.log(err);
    }
    var jsonText = JSON.stringify(result, null, 4);
    console.log(jsonText);
});
