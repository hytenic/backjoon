const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let result = 0;
let n = 0;
let meetings = [];
let endtime = 0;

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    n = parseInt(input[0]);
    meetings = input.map((el,i) => {
        if(i > 0) return el.split(' ')
    }).sort((a, b) => {
        if(a[1] !== b[1]){
            return a[1] - b[1];
        } else {
            return a[0] - b[0];
        }
    });
    // 회의 수 n을 제외한 회의들에 대해 종료시간을 기준으로 오름차순 정렬
    // 종료하는 시간이 같다면, 회의 시간이 짧은 회의순으로 정렬
    
    for(let i = 0; i < n; i++){ // 가장 먼저끝나는 회의부터 시작
        if(endtime <= Number(meetings[i][0])){ // 회의 종료시간이 다음 회의 시작시간과 같거나 크면 회의실 사용 가능으로 판정
            result++;
            endtime = Number(meetings[i][1]); // 다음 회의가 끝나는 시간을 지정
        }
    }

    console.log(result);
    process.exit();
});