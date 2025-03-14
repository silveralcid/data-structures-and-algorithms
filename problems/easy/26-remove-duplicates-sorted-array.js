// LeetCode Problem: Remove Duplicates from Sorted Array
// https://leetcode.com/problems/remove-duplicates-from-sorted-array

// Brute Force Approach - O(n^2)
// This method modifies the array by removing duplicates using splice.
function removeDuplicatesBrute(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length;) {
            if (nums[i] === nums[j]) {
                nums.splice(j, 1);
            } else {
                j++;
            }
        }
    }
    return nums.length;
}

// Optimized Two-Pointer Approach - O(n)
// This method keeps track of unique elements and modifies the array in-place.
function removeDuplicates(nums) {
    if (nums.length === 0) return 0;

    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1; // Length of the unique elements subarray
}

// Test Suite
function runTests() {
    console.log("Running tests...");

    // Test 1: Empty array
    let test1 = [];
    console.assert(removeDuplicates(test1) === 0, "Test 1 failed");

    // Test 2: No duplicates
    let test2 = [1, 2, 3, 4, 5];
    let result2 = removeDuplicates(test2);
    console.assert(result2 === 5, "Test 2 failed");
    console.assert(JSON.stringify(test2.slice(0, result2)) === JSON.stringify([1, 2, 3, 4, 5]), "Test 2 array failed");

    // Test 3: Some duplicates
    let test3 = [1, 2, 2, 3, 4, 4, 5];
    let result3 = removeDuplicates(test3);
    console.assert(result3 === 5, "Test 3 failed");
    console.assert(JSON.stringify(test3.slice(0, result3)) === JSON.stringify([1, 2, 3, 4, 5]), "Test 3 array failed");

    // Test 4: All duplicates
    let test4 = [1, 1, 1, 1, 1];
    let result4 = removeDuplicates(test4);
    console.assert(result4 === 1, "Test 4 failed");
    console.assert(JSON.stringify(test4.slice(0, result4)) === JSON.stringify([1]), "Test 4 array failed");

    console.log("All tests completed!");
}

// Execute tests
runTests();
