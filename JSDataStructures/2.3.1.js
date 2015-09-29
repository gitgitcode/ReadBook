/**
 * Created by chao on 15/9/26.
 */

//take & save function

//indexOf() use nodejs


var names = ["abcbc","Divid","Cynthia","Raymond","Clayton","Divid","Jennifer"];
//putstr("Enter a name to seacr for:");

//var name = readlin();
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("What do you think of Node.js? ", function(answer) {
    // TODO: Log the answer in a database
   // console.log("Thank you for your valuable feedback:", answer);
    var position = names.indexOf(answer);

    if(position >=0 ){
        console.log("Fond "+answer+"at postion "+position)
    }else{
        console.log(answer+ " not fund in array")
    }
    rl.close();
});

// lastIndexOf()
var name = "Divid";
var firstpos = names.indexOf(name)
var lastPos = names.lastIndexOf(name)

console.log("first found" + name + "at position " + firstpos)
console.log("Last found "+ name +'at postion ' + lastPos)