/**
 * Created by chao on 15/9/24.
 */
var numbers = [];

console.log(numbers.length) //0

var numbers = [1,2,3,4,5]

console.log(numbers.length) // 5

var numbers_new = new Array(1,2,3,4,5,5)

console.log(numbers_new.length) //6

var numbers_int = 3

var arr = [2,3,4,5,56,6]

console.log(Array.isArray(numbers_int))//false

console.log(Array.isArray(arr))//true

console.log('使用[]来操作创建数组 效率更高')