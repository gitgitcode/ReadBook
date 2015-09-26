/**
 * Created by chao on 15/9/26.
 */

//take & save function

//indexOf() use nodejs


var names = ["Divid","Cynthia","Raymond","Clayton","Jennifer"];
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
