/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
    let sum = max = flag = 0
    if (nums.length === 0) {
        return 0
    } else if (nums.length === 1) {
        return nums[0]
    }
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        if (sum < 0) {
            sum = 0
        } else {
            flag = 1
            if (max < sum) {
                max = sum
            }
        }
    }
    if (!flag) {
        return Math.max.apply(Math, nums)
    }
    return max
};