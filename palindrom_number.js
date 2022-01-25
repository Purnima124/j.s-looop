const r=require("readline-sync")
var num=r.questionInt("enter the number :")
var i=num;
rev=0
while (num>0){
    rev=(rev*10)+(num%10)
    num=Math.floor(num/10);
if (i==num){
    console.log("palindrom no.")
    // break
}
else{
    console.log("not palindrom")
break
}

}






// console.log(Math.ceil(1.4)); 
// //2
// console.log(Math.ceil(1.6)); 
// //2
// console.log(Math.round(-1.4));
// //-1
// console.log(Math.round(-1.6));
// //-1