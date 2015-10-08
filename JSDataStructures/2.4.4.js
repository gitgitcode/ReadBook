/**
 * Created by chao on 15/10/9.
 */
// sort arr

var nums = [1,2,3,4,5];
nums.reverse();
console.log(nums);

var names= ["David","Mike","Cynhia","Clayton","Bryan","Raymod"];
names.sort();
console.log(names)

// if arr memeber is number sort not work well
// sort() sort by dic
var nums=[2,4,1,100,89];
nums.sort()
console.log(nums)

function compare(num1,num2){
    return num1 - num2;
}

var nums= [199,89,2,1,90909,1];
nums.sort(compare)
console.log(nums)

