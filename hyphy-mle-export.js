var to_csv = require('./csv-mle-export.js');

var argv = require("optimist")
            .default('i','')
            .default('o','')
            .argv;

var filename = argv.i,
    output = argv.o;

to_csv.to_csv(filename, output);
