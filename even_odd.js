array=[9,8,6,3,2,5,4]
i=0
even=0
odd=0
a=[]
b=[]
while(i<array.length){
    k=array[i]
    if(k%2==0){
        a.push(k)
        even+=k
    i=i+1
    }
    else{
        b.push(k)
        odd+=k
    i=i+1
    }
}
console.log(a,"enen",even)
console.log(b,"odd",odd)