/**
 * Created by chao on 15/9/25.
 */
// copy arr to arr

var nums = [];

for (var i = 0; i < 10 ;++i )
{
    nums[i] = i+1;
}
var samenums = nums;
console.log(samenums);

//

var nums_1 = []

for(var i = 0; i < 10;i++){
    nums_1[i] = i+ 1
}
var sanmenums_1 = nums_1
nums_1[0] = 400
console.log(nums_1)

//
function mycopy(arr1,arr2){
    for(var i = 0; i < arr1.length; ++i){
        arr2[i] = arr1[i]
    }
}

var nums_2 = []
for( var i = 0; i< 10 ;++i){
    nums_2[i] = i + 1
}
var sanmenums_2 = []

mycopy(nums_2,sanmenums_2)
nums_2[0] = 400;
console.log(sanmenums_2)