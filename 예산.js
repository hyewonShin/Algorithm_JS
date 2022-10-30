function solution(d, budget) {
  var answer = 0;
  let array = d.sort(function (a, b) {
    return a - b;
  });
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    answer = answer += array[i];

    if (answer <= budget) {
      count++;
    }
  }
  return count;
}
console.log(solution([2, 2, 3, 3], 10));
