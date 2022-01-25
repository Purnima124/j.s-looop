var y=require("readline-sync")
const num=y.questionInt("Enter the number")
var i=1
while(i<=10){
    console.log(num,"*",i,"=",i*num)
    i=i+1
}


