console.log("table of n.");

function table(n){
    for(let i=1;i<=10;i++){
        let sum = n*i; 
        console.log(sum);
    }
}
    table (5);
    console.log("return the sum of 1 to n numbers .");

function sum(x){
    let sum1=0;
    for(let i=1; i<=x;i++){
    sum1=sum1+i;
}
    return sum1;
}

    console.log(sum(5));