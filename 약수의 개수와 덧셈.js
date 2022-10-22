function solution(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    let array = [];
    for (let j = 1; j <= right; j++) {
      if (i % j == 0) {
        array.push(j);
      }
    }
    if (array.length % 2 == 0) {
      answer += i;
    } else {
      answer -= i;
    }
  }
  return answer;
}
console.log(solution(24, 27));
