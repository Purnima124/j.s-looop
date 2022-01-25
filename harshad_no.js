var sum=0
const s=require("readline-sync")
var n=s.questionInt("enter any number :")
var c=n
while (c>0){
    var r=c%10
    var sum=sum+r
    var c=(Math.floor(c/10))
    if (n% sum==0){
        console.log(n,"is harshad number")
        break
    }
    else
        console.log(n,"is not harshad number")
        break
}