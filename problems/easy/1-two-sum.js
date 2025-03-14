// Problem: Two Sum
// Source: https://leetcode.com/problems/two-sum/

// Brute Force Approach - O(n^2)
// This method iterates through all pairs to find the correct indices.
function solveBruteForce(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}

// Optimized Approach - O(n)
// Uses a hashmap to store complements and find the solution in one pass.
function solveOptimized(nums, target) {
    const hashmap = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (complement in hashmap) {
            return [hashmap[complement], i];
        }
        hashmap[nums[i]] = i;
    }
}

// Test Cases
function runTests() {
    console.log("Running tests...");

    const testCases = [
        { input: [[2,7,11,15], 9], expected: [0, 1] },
        { input: [[-1, -2, -3, -4, -5], -8], expected: [2, 4] },
        { input: [[0, 4, 3, 0], 0], expected: [0, 3] },
        { input: [[3, 3], 6], expected: [0, 1] }
    ];

    let passedTests = 0;
    testCases.forEach((test, index) => {
        let result = solveOptimized([...test.input[0]], test.input[1]);
        let passed = arraysEqual(result, test.expected);
        console.log(`Test ${index + 1}: ${passed ? "PASSED ✓" : "FAILED ✗"}`);
        if (passed) passedTests++;
    });

    console.log(`${passedTests} of ${testCases.length} tests passed.`);

    function arraysEqual(a, b) {
        return a.length === b.length && a.every((val, index) => val === b[index]);
    }
}

// Execute tests
runTests();
