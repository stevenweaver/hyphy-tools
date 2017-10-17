var Papa = require("papaparse"),
    fs = require("fs");


function to_csv(filename, output) {

  var contents = fs.readFileSync(filename);
  var results = JSON.parse(contents);
  var mle = results.MLE;

  to_export = {};
  to_export.fields = mle.headers;
  to_export.data = mle.content["0"];

  var csv = Papa.unparse(to_export);
  fs.writeFileSync(output, csv);

}

exports.to_csv = to_csv;
