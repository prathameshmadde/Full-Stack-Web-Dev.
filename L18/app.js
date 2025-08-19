const max = prompt("enter a no. = ");

const random= Math.floor(Math.random()*max)+1;

let guess = prompt("Enter your guess: ");

while(true){
     if ( guess == "quit" ){
        console.log("User Quit.");
        break;
     }
     else if (guess == random){
        console.log("You are Right ! Congrats.");
        break;        
     }
     else if (guess < random){
        guess = prompt("Your guess is too small. Try again: ");
     }
     else {
        guess = prompt("Your guess is too high. Try again: ");  
     }
};