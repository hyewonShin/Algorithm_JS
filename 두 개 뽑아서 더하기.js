function solution(numbers) {
    var a = [];
    
    for(let i=0;i<numbers.length;i++){
        for(let j=i+1;j<numbers.length;j++){
            a.push(numbers[i]+numbers[j])
        }
    }

     let answer = [...new Set(a)];
      
    return answer.sort((a,b)=>a-b);
}
console.log(solution([2, 1, 3, 4, 1]));
