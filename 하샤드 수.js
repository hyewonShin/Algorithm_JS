function solution(x) {
  let q = x
    .toString()
    .split("")
    .reduce((acc, cur) => (acc += Number(cur)), 0);

  return x % q == 0 ? true : false;
}
console.log(solution(10));
