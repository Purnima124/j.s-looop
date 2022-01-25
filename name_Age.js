dict={}
for (var i=1;i<=5;i++){
    const r=require("readline-sync")
    var name=r.question("Enter the name")
    var age=r.questionInt("Enter the age")
    dict[i]=age
}
console.log(dict)
