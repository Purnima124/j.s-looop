var i=1
var sum=0
while (i<=5){
    var n=require("readline-sync")
    const num=n.questionInt("Enter the number :")
    sum=sum+1
    console.log(i)
    i=i+1
}
console.log("sum =",sum)
