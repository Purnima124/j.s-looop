var i=1
sum=0
while (i<=10){
    var r=require("readline-sync")
    var num=r.questionInt("enter number")
    sum=sum+num
    i=i+1
    console.log(sum)
}

