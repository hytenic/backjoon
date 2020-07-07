const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let result = 0;
let n = 0;
let nsum = 0;
let temp = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    
    n = Number(input[0]);
    temp = input[1].split(' ').map((el) => parseInt(el));

    if(n === 1) {
        console.log(temp[0])
    } else {
        temp.sort((a,b) => { return a - b; })
        for(let i = 0; i < n; i++){
            nsum += temp[i];
            result += nsum;
        }
        console.log(result);
    }


    process.exit();
});