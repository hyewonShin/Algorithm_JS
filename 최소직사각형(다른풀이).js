function solution(sizes) {
  let higher = [];
  let lower = [];

  sizes.map(([w, h]) => {
    if (w > h) {
      higher.push(w);
      lower.push(h);
    } else {
      higher.push(h);
      lower.push(w);
    }
  });
  return Math.max(...higher) * Math.max(...lower);
}
console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);
