/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum1 = (nums, target) => {
    for(let i=0; i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j] === target){
                return [i, j];
            }
        }
    }
};
//先用一个循环体创建一个哈希表，再循环一次，查找哈希表
const twoSum2 = (nums, target) => {
   let arr = [],
       length = nums.length;
   for(let i=0;i<length;i++){
       arr[nums[i]] = i;
   }
   for(let i=0;i<length;i++){
       let index = arr[target - nums[i]];
       if(index !== undefined && index !== i)
           return [i, index];
   }
};

const twoSum3 = (nums,target) => {
    let arr = [];
    for(let i = 0;i<nums.length;i++){
        let index = arr[target - nums[i]];
        if(index !== undefined)
            return [index, i];
        arr[nums[i]] = i;
    }
};
console.log(twoSum1([8,2,15,1,3],4));
console.log(twoSum2([8,2,15,1,3],4));
console.log(twoSum3([8,2,15,1,3],4));
