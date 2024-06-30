var twoSum = function (nums, target) {
  const myMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const compNum = target - nums[i];
    if (myMap.has(compNum)) {
      return [myMap.get(compNum), i];
    } else {
      myMap.set(nums[i], i);
    }
  }
};
