var fs = require('fs');
var to_csv = require(__dirname + '/../csv-mle-export.js');

describe('test csv mle export', function() {

  it('should output csv', function(done) {
    var filename = "./test/CD2.nex.FUBAR.json";
    var output = "./test/CD2.nex.csv";
    to_csv.to_csv(filename, output);
    var contents = fs.readFileSync(output);
    fs.unlink(output, () => {done();} );
  });

});


