const http = require('http');
const bl = require('bl');
const url1 = process.argv[2];
const url2 = process.argv[3];
const url3 = process.argv[4];
const cb = async (response) => {
    await response.pipe(bl((err, data) => {
        if (err) {
            return  console.log(err);
        }
        const resultData = data.toString();
        // collect =+ resultData;
        console.log(resultData);
    }))
}


http.get(url1, cb).on('error', console.error);
http.get(url2, cb).on('error', console.error);
http.get(url3, cb).on('error', console.error);