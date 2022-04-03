function solution(strings, n) {

    return strings.sort((a,b)=>{
       if(a[n] > b[n]) return 1;
       if(a[n] < b[n]) return -1;
       if(a[n] === b[n]) return a.localeCompare(b);
    });
}
console.log(solution(["sun", "bed", "car"],1));
// 첫 번째 조건인 n번째 인덱스를 기준으로 정렬해주고, 
// n번째 알바펫이 같으면 사전 순으로 정렬해주면 모든 조건을 충족시킨다.