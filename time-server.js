const net = require('net');
const port = process.argv[3];
const server = net.createServer((socket) => {
    const current = new Date();
    const year = current.getFullYear();
    const month = Number(current.getMonth()) + 1;
    const day = current.getDate();
    const hour = current.getHours();
    const min = current.getMinutes();
    const format = `${year}-${ month > 9 ? '' : 0}${ month}-${ day > 9 ? '' : 0}${day} ${ hour > 9 ? '' : 0}${hour}:${ day > 9 ? '' : 0}${min}`;
    // console.log(format)
    // socket.end(format);
    socket.write(format);
    socket.end();

});
server.listen(port);
