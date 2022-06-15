function solution(lottos, win_nums) {
  const result = [];

  let minCount = lottos.filter((v) => win_nums.includes(v)).length;
  let zeroCount = lottos.filter((v) => v === 0).length;

  let minRank = 7 - minCount >= 6 ? 6 : 7 - minCount;
  let maxRank = zeroCount === 6 ? 1 : minRank - zeroCount;

  result.push(maxRank, minRank);

  return result;
}
console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
