var twoSum = function(nums, target) {
    const hashmap = {};

    for (let i = 0; i < nums.length; i++){
        const complement = target - nums[i]
            if (complement in hashmap) {
                return [hashmap[complement], i]
            }
            else {
                hashmap[nums[i]] = i
            }            
    }
};
