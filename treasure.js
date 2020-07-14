const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let arrA = [];
let arrB = [];
let result = 0;
let obj = {};
let temp = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    input.shift();

    arrA = input[0].split(' ')
    arrB = input[1].split(' ')

    arrA.sort((a,b) => b - a);
    temp = arrB.slice().sort((a,b) => a - b);

    for(let i = 0; i < arrA.length; i++){
        result += arrA[i] * temp[i];
    }

    console.log(result);
    process.exit();
});