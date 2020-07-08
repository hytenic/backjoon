const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let temp = [];
let money = 0;
let result = 0;

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    money = input[0].split(' ')[1];
    input = input.map(el => parseInt(el));

    for(let i = input.length - 1; i > 0; i--){
        if(input[i] < money){
        result += Math.floor(money / input[i]);
        money %= input[i];
        }
        if(money === 0){
            break;
        }
    }

    console.log(result);
    process.exit();
});