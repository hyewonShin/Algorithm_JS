function solution(answers) {
    var answer = [];
    
    // 각 수포자의 규칙에 맞는 답안배열 작성
    var a1 = [1, 2, 3, 4, 5];
    var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
    var a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    // 정답배열에서 각 수포자의 배열 중 맞은 답만 추출해서 정답갯수로 반환
    var a1c = answers.filter((a,i)=> a === a1[i%a1.length]).length;
    var a2c = answers.filter((a,i)=> a === a2[i%a2.length]).length;
    var a3c = answers.filter((a,i)=> a === a3[i%a3.length]).length;
    
    // 각자의 정답갯수 중 가장 큰 숫자(3개중 가장 많이 맞은 답갯수) 추출
    var max = Math.max(a1c,a2c,a3c);

    // 각자의 답안갯수가 가장 많이 맞은 답갯수와 같을 때 answer에 push
    if (a1c === max) {answer.push(1)};
    if (a2c === max) {answer.push(2)};
    if (a3c === max) {answer.push(3)};

    return answer;
}
console.log(solution([1,2,3,4,5]));