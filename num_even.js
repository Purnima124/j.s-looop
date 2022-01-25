const r=require("readline-sync")
var num=r.questionInt("Enter the number: ")
var i=1;
while(i<=num){
    if (i%2==0){
        console.log("even No.",i)
        i=i+1
    }
    else{
        console.log("odd No.",i)
        i=i+1
    
    }
}


