const http = require('http');
const url = process.argv[2];
const cb = (response) => {
    response.setEncoding('utf8');
    response.on('data', (data) => {
        console.log(data)
    });
    response.on('error', console.error);
}

http.get(url, cb).on('error', console.error)
