/**
 * Created by chao on 15/10/8.
 */

//use splice add member on arr

var nums =  [1,2,3,7,8,9];
var newElements = [4,5,6];
nums.splice(3,0,newElements);
var log = nums;
console.log(nums)
console.log(log[3])
var nums_1 = [1,2,3,7,8,9];
nums_1.splice(3,0,4,5,6)
console.log(nums_1)

var nums = [1,2,3,100,200,400,4,5];
nums.splice(3,4);
console.log(nums)