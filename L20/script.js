//Q1
// let n=prompt("Enter the no = ");

// // function square(n){
// //     console.log(n*n);
// // }

// const square=(n)=>{
//     console.log(n*n);
// };

// square(n);

//Q 2 Print "Hello World" after every 2 seconds. Stop it after 10 seconds

let id = setInterval(() => {
    console.log("Hello World ");
}, 2000);

setTimeout(() => {
   clearInterval(id);  
}, 10000);

