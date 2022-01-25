var i=2
var r=require("readline-sync")
const num=r.question("enter the number :")
while (i<num){
    if (num%i==0){
       console.log(num,"not prime no.")
       i=i+1
       break
       // i=i+1
    }
    else{
       console.log(num,"prime number")
       i=i+1
       break
       // i=i+1
}
}


