// Program to check whether a given string is a palindrome or not.
// What is the output of the following program?
const n=require("readline-sync");
var name=n.question("enter name: ")
const store=name;
var string=""
for (let i=name.length-1;i>=0;i--) {
   string=string+name[i]
}
if (store===string) {
   console.log("its palindrome string")
}
else {
   console.log("it's not a palindrome string")

}












// var name=["n","i","t","i","n"]
// var r=require("readline-sync")
// const name=r.question("enter the name")
// i=1
// a=[]
// while (i<=name){
//     a.push(name[-i])
//     i=i+1
// if (a==name){
//     console.log("palindrom no.")
// }
// else{
//     console.log("not palindrom no.")
// }

// }
// // a=["n","i","t","i","n"]
// i=1
// y=[]
// while i<=len(a):
//     y.append(a[-i])
//     i=i+1
// if y==a:
//     print(y,"palindrome")
// else:
//     print(y,"not")