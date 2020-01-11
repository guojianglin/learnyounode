const fs  = require('fs');
const path = require('path');

module.exports = (url, ext, customErrCb) => {

    const cb = (err, contents) => {
        if (err) {
            return customErrCb(err);
        }

        const resultArr = contents.filter((item) => {
            return path.extname(item) === '.' + ext;
        });

        resultArr.map((item) => {
            console.log(item);
        });

        customErrCb(null, resultArr);
    }

    fs.readdir(url, cb);
}