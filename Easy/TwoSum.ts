// 1. Two Sum

function twoSum(nums: number[], target: number): number[] {
  const myMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const comp = target - nums[i];
    if (myMap.has(comp)) {
      return [myMap.get(comp), i];
    }
    myMap.set(nums[i], i);
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
