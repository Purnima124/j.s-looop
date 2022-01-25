const r=require("readline-sync")
var num=r.questionInt("enter the number :")
rev=0
while (num>0){
    rev=(rev*10)+(num%10)
    num=Math.floor(num/10);
    // console.log("revers",rev)
}
console.log("revers",rev)