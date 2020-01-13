// ========the native solution========
//
// const http = require('http');
// const url = process.argv[2];
// const cb = (response) => {
//     response.setEncoding('utf8');
//     response.on('data', (data) => {
//         collect += data;
//     });
//     response.on('error', console.error);
//     response.on('end', () => {
//         console.log(collect.length);
//         console.log(collect);
//     })
// }

// let collect = '';

// http.get(url, cb).on('error', console.error);

// ========second solution=========
const http = require('http');
const url = process.argv[2];
const bl = require('bl');
const cb = (response) => {
    response.pipe(bl((err, data) => {
        if (err) {
            console.error(err);
        }
        const resultData = data.toString();
        console.log(resultData.length);
        console.log(resultData);
    }))
}

let collect = '';

http.get(url, cb).on('error', console.error);