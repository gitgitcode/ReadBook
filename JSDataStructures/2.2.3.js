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