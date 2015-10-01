/**
 * Created by chao on 15/10/1.
 */

// create arr by arr

// concat() splice() create new arr
// concat() unite arr
// splice() splice arr

var cisDept = ["abcbc","Divid","Cynthia","Raymond","Clayton","Divid","Jennifer"];

var dmpDept = ["Raymond","Cythia","Bryan"];

var itDiv = cisDept.concat(dmpDept)
console.log('=='+itDiv)

itDiv = dmpDept.concat(cisDept)
console.log('=='+itDiv)

console.log('---------------------------')
var newDiv =['a','b','c','d','e','f','g']
console.log("newDiv=="+newDiv)
var spl_3;

spl_3 = newDiv.splice(3, 3,itDiv);// from 3 splice 3 member add new items after start
var spl_4 = newDiv
console.log('spl_3=='+spl_3)
console.log('sp_4=='+spl_4)


