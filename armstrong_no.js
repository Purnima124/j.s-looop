// function Armstrong(num) {
//     num = num + "";
//     let d1 = +num[2];
//     let d2 = +num[1];
//     let d3 = +num[0];
//     let sumOfCubes = d1*d1*d1 + d2*d2*d2 + d3*d3*d3;
//     return +num === sumOfCubes;
// }
// console.log(Armstrong(371)); // true

// function armstrong() {
//     for (let i = 100; i <= 1000; i += 1) {
//     let str = i.toString();
//     let a = str[0] * 1;
//     let b = str[1] * 1;
//     let c = str[2] * 1;
//     let check = (a * a * a) + (b * b * b) + (c * c * c);
//     if (check === i) {
//     console.log(i);
//     }
//     }
//     }
//     armstrong()

// for(i=100; i<1000; i++){
//     let rightDigit = Math.floor((i/1)%10);
//     let secondDigit = Math.floor((i/10)%10);
//     let thirdDigit = Math.floor((i/100)%10);
//     if(rightDigit**3 + secondDigit**3 + thirdDigit**3 === i){
//     console.log(i);
//     }
//     }
const r=require("readline-sync")
var number=r.question("Please enter the number ")
var temp=number;
var sum=0;
while(temp>0){
    var digit=temp%10;
    sum+=digit**3;
    temp=parseInt(temp/10);
}
if(sum==number){
    console.log(`${number} is an armstrong number`)
}
else{
    console.log(`${number} is not an armstrong number`)
}
