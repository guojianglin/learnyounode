
const readFileFilter = require('./mymodule');

const url = process.argv[process.argv.length - 2];
const ext = process.argv[process.argv.length - 1];

const mycb = (err, contents) => {

    if (err) {
        return console.log(err);
    }

    // return contents.length;
}
readFileFilter(url, ext, mycb);