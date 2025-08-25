//Q1
// let n=prompt("Enter the no = ");

// // function square(n){
// //     console.log(n*n);
// // }

// const square=(n)=>{
//     console.log(n*n);
// };

// square(n);

//Q 2
let id = setInterval(() => {
    console.log("Hello World ");
}, 2000);

setTimeout(() => {
   clearInterval(id);  
}, 10000);

