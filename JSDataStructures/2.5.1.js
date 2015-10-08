/**
 * Created by chao on 15/10/9.
 */
// every arr member do something

// do something or return a value

function square(num){
    console.log(num,num*num);
}

var nums=[1,2,3,4,5,6,7,8,9];
nums.forEach(square); // forEach() do something for every memeber

function isEven(num){
    return num % 2 == 0;
}

// every cover a
var nums=[2,4,6,8,10];
var even = nums.every(isEven);
console.log(even)
if(even){
    console.log("this num is all even");
}else{
    console.log("not all numbers are even")
}
