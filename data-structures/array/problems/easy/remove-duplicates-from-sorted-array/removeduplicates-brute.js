/* 

problem statement breakdown:

nums:  integers with duplicates in non-decreasing order

problem: we need to remove duplicates from an array without changing the array's order

input: randomly ascending nums = [#,#,#]
expected output: k = array.length, original order nums without duplicates = [#, #, #]

*/

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