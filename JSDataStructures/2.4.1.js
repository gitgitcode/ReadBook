/**
 * Created by chao on 15/10/1.
 */

// add member to arr

// push() unshift()
// push() to the arr end

var nums = [1,2,4,5]
console.log(nums)
nums.push(6)
console.log(nums)
nums[nums.length]=nums.length
console.log(nums)
//unshift()

//add new member at the arr start by loop

var nums_1 = [2,3,5]
var newnum = 1;
var N = nums_1.length;
for(var i =N; i>=0;--i){
    nums_1[i] = nums_1[i-1]
}
nums_1[0]=newnum;
console.log(nums_1)


var nums_2 = [2,3,4,5];
console.log(nums_2);
var newnum_1 = 1;
nums_2.unshift(newnum_1);
console.log(nums_2);
nums_3 = [3,4,5];
nums_3.unshift(newnum_1,1,2)
console.log(nums_3)



