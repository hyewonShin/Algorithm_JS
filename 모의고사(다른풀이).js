function solution(answers) {
  let answer = [];
  let count = [0, 0, 0];

  let one = [1, 2, 3, 4, 5];
  let two = [2, 1, 2, 3, 2, 4, 2, 5];
  let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  count[0] = answers.filter((x, i) => x == one[i % one.length]).length;
  count[1] = answers.filter((x, i) => x == two[i % two.length]).length;
  count[2] = answers.filter((x, i) => x == three[i % three.length]).length;

  let max = Math.max(count[0], count[1], count[2]);

  for (let i = 0; i < count.length; i++) {
    if (max == count[i]) {
      answer.push(i + 1);
    }
  }
  return answer;
}
console.log(solution([1, 2, 3, 4, 5]));
