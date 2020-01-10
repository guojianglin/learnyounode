// console.log(process.argv);
function sum(argument) {
    argument.shift();
    argument.shift();
    const sumRes = argument.reduce((x, y) => +x + +y);
    console.log(sumRes);
}

sum(process.argv);