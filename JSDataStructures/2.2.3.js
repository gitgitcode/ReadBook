/**
 * Created by chao on 15/9/24.
 */
// split function create array

var sentence = "ths quick brown fox jumped over the lazy dog";
var words = sentence.split(" ");
for(var i=0 ; i<words.length;++i)
{
    console.log("word "+i+":"+words[i])
}

var test1="若隐若现"
test1 = escape(test1)
console.log(test1)
//document.write (test1 + "<br />")//结果是:%u82E5%u9690%u82E5%u73B0

test1 = unescape(test1)
console.log(test1)
//document.write(test1 + "<br />")//结果是:若隐若现

