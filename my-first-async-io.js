const fs = require('fs');

const cb = (err, data) => {

    if (err) {
        return console.log(err);
    }

    const arr = data.split('\n');
    const count = arr.length - 1;
    console.log(count);
}

const path = process.argv[process.argv.length -1];

fs.readFile(path, 'utf8', cb);