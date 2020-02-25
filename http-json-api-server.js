const port = process.argv[process.argv.length - 1];
const http = require('http');
const url =  require('url');

const server = http.createServer((req, res) => {

    if (req.method == 'GET') {

        const parseUrl = url.parse(req.url);
        const requestingUrl = parseUrl.pathname;

        const getReqValue = parseUrl.query.split('=')[1];
        const getReqValueAsDate = new Date(getReqValue);

        const dealWithFinal = (result) => {
            res.writeHead(200, {'Content-type': 'application/json'});
            res.end(JSON.stringify(result));
        }

        switch(requestingUrl) {
            case '/api/parsetime':
                const resultForRes = {
                    'hour': getReqValueAsDate.getHours(),
                    'minute': getReqValueAsDate.getMinutes(),
                    'second': getReqValueAsDate.getSeconds(),
                }
                dealWithFinal(resultForRes);
                break;
            case '/api/unixtime':
                const resultForRes1 = {
                    'unixtime': getReqValueAsDate.getTime(),
                }
                dealWithFinal(resultForRes1);
                break;
        }
        console.log(parseUrl);
    }
})

server.listen(port);