/**
 * Created by chao on 15/10/1.
 */

var nums = [1,2,3,4,5,6,9];

console.log(nums.pop())
console.log(nums)

var nums = [9,1,2,3,4,5];
console.log('='+nums)

for(var i =0;i<nums.length;i++){
    console.log('i='+i+'nums[i+1]='+nums[i+1]);
    nums[i] = nums[i+1];
}
console.log(nums)

//shift() delete first member of arr

var nums = [9,1,2,3,4,5];
var first = nums.shift()
console.log(first)
console.log(nums)