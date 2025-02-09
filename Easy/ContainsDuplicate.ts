// 217. Contains Duplicate - LeetCode

function hasNumber(nums: number[]): boolean {
  const set = new Set();
  for (const num of nums) {
    if (set.has(num)) {
      return true;
    }
    set.add(num);
  }
  return false;
}

console.log(hasNumber([1, 2, 3, 4]));
