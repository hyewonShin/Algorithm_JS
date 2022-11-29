function solution(nums) {
  let maxnum = nums.length / 2;
  let arr = [...new Set(nums)];

  return arr.length > maxnum ? maxnum : arr.length;
}
console.log(solution([3, 3, 3, 2, 2, 4]));
