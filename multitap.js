const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let result = 0;
let multitapNum = 0; // 멀티탭 콘센트 개수
let multitap = []; // 현재 꽃혀있는 플러그
let plugs = []; // 꽂을 플러그 순서

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    
    multitapNum = Number(input[0].split(' ')[0]);
    input.shift();
    plugs = input[0].split(' ').map(el => Number(el));
    
    for(let i = 0; i < multitapNum; i++){
        multitap.push(plugs[i]);
    }
    
    for(let i = multitapNum; i < plugs.length; i++){
        let isUseLeter = false;
        if(!multitap.includes(plugs[i])){
            for(let k = i; k < plugs.length; k++){
                if(plugs[i] === plugs[k]){
                    isUseLeter = true;
                }
            }
            if(!isUseLeter){
                multitap.splice(i,1);
                multitap.push(plugs[i]);
                result++;
            }
        }
    }

    console.log(result);
    process.exit();
});