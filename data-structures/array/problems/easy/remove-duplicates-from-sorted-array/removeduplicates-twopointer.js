// Already sorted that's why two pointer
// O(n)

function removeDuplicates(nums) {
    
    if (nums.length === 0) return 0

    let i = 0

    for (let j = 1; j < nums.length; j++)
        if (nums[j] !== nums[i]) {
            i++
            nums[i] = nums[j]
        }
    
    return i + 1
}

// Not done until I understand how we have leftover numbers in the array.

// Since array indices are zero-based, the total count of elements is always one more than the highest index. That's why we return i + 1.

// but why is it okay that there are left over numbers? READ THE PROBLEM AGAIN IT LITERALLY SAYS ITS OKAY TO FUGGET ABOUT IT