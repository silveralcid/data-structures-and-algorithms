// O(n^2)

var removeDuplicates = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length;) {
            if (nums[i] === nums[j]) {
                nums.splice(j, 1)
            } else {
                j++
            }
        }    
    }
    return nums.length
}