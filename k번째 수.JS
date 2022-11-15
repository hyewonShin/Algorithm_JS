function solution(array, commands) {
  var answer = [];

  for (let i = 0; i < commands.length; i++) {
    let a = commands[i][0];
    let b = commands[i][1];
    let c = commands[i][2];

    let aaa = array.slice(a - 1, b).sort((a, b) => a - b);
    answer.push(aaa[c - 1]);
  }

  return answer;
}
console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);
