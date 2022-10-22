function solution(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    let array = [];
    for (let j = 1; j <= right; j++) {
      if (i % j == 0) {
        array.push(j);
      }
    }
    array.length % 2 == 0 ? (answer += i) : (answer -= i);
  }
  return answer;
}
console.log(solution(13, 17));
