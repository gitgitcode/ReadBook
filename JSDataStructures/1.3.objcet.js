/**
 * Created by chao on 15/9/9.
 */

function Checking(amount){
    this.balance = amount; //type
    this.deposit = deposit ;//function
    this.widthraw = widthraw;
    this.toString = toString;
}

function deposit(amount){
    this.balacne += amount;
}

function widthraw(amount){
    if(amount <= this.balance){
        this.balance -= amount;
    }
    if(amount > this.balance ){
        console.log("Insuffcienc funds");
    }
}

function toString(){
    return "Balance:"+this.balance
}


var account = new Checking(500);

account.deposit(1000)
console.log(account.toString());
account.widthraw(750);
console.log(account.toString())
account.widthraw(800)
console.log(account.toString())