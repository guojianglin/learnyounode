const fs = require('fs');
const path = require('path');

const paths = process.argv[process.argv.length - 2];
const ext = process.argv[process.argv.length - 1];

// const dir = path.dirname(paths);

const cb = (err, data) => {
    if (err) {
        return console.log(err);
    }
    // console.log(data);

    const resultArr = data.filter((item) => {
        return path.extname(item) === '.'+ ext;
    })

    resultArr.map((item) => console.log(item));
}

fs.readdir(paths, cb);