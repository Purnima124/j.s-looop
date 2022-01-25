let y=require("readline-sync")
var n=y.questionInt("Enter the number =")
var x=0;
var k=1;
var z=0;
while(z<=n){
    console.log(z)
    x=k;
    k=z;
    z=x+k;
}
