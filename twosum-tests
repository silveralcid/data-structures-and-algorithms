// Brute force solution
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i , j]
      }
    }
  }    
};

function testTwoSum() {
    // [array, target, expected result] 
    const testCases = [
        {
          name: "Basic case",
          input: [[2,7,11,15], 9],
          expected: [0, 1]
        },
        {
            name: "Negative numbers",
            input: [[-1, -2, -3, -4, -5], -8],
            expected: [2, 4]
        },
        {
            name: "Zero values",
            input: [[0, 4, 3, 0], 0],
            expected: [0, 3]
        },
        {
            name: "Duplicate values",
            input: [[3, 3], 6],
            expected: [0, 1]
        }
    ];

    let passedTests = 0;
    for (const test of testCases) {
        const result = twoSum(test.input[0], test.input[1]);
        const passed = arraysEqual(result, test.expected);

        console.log(`Test: ${test.name}`);
        console.log(`Input: [${test.input[0]}], ${test.input[1]}`);
        console.log(`Expected: [${test.expected}]`);
        console.log(`Result: [${result}]`);
        console.log(`${passed ? "PASSED ✓" : "FAILED ✗"}`);
        console.log('------------------------');
        
        if (passed) passedTests++;
    }
    
    console.log(`${passedTests} of ${testCases.length} tests passed.`);

    function arraysEqual(a, b) {
        if (a.length !== b.length) return false;
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) return false;
        }
        return true;
    }
}

testTwoSum();
