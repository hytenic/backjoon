const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let result = 0;

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    input.shift();

    for(let i = 0; i < input.length; i++){
        let used = [];
        for(let k = 0; k < input[i].length; k++){
            if(!used.includes(input[i][k])){
                used.push(input[i][k]);
            } else {
                if(input[i][k] !== input[i][k-1]){
                    break;
                }
            }

            if(k === input[i].length - 1){
                result++;
            }
        }
    }

    console.log(result);
    process.exit();
});