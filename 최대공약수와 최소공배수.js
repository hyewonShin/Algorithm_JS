function solution(n, m) {
  let Max = 1;
  for (let i = 2; i <= Math.min(n, m); i++) {
    if (n % i === 0 && m % i === 0) {
      Max = i;
    }
  }
  const Min = (n * m) / Max;
  return [Max, Min];
}
console.log(solution(2, 5));
