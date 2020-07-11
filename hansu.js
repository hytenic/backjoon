const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let num = 0;
let result = 0;

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    
    num = Number(input[0]);
    
    for(let i = 1; i <= num; i++){
        if(i <= 99){
            result++;
        } else {
            let temp = i.toString();
            let isHansu = true;
            for(let k = 1; k < temp.length-1; k++){
                if((temp[k] - temp[k-1]) !== (temp[k+1] - temp[k])){
                    isHansu = false;
                }
            }
            if(isHansu){
                result++;
            }
        }
    }

    console.log(result);
    process.exit();
});