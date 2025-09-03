let input = document.createElement("input");

let btn1 = document.createElement("button");

btn1.innerText="Click me !";

input.setAttribute("placeholder", "username");

btn1.setAttribute("id", "btn");

document.body.appendChild(input);
document.body.appendChild(btn1);

let myBtn = document.querySelector("#btn");
myBtn.style.backgroundColor = "blue";
myBtn.style.color = "white";

// Qs4: Create h1 element
let heading = document.createElement("h1");
heading.innerText = "DOM Practice";
heading.style.textDecoration = "underline";
heading.style.color = "purple";
document.body.append(heading);

// Qs5: Create paragraph
let para = document.createElement("p");
para.innerHTML = "Apna College <b>Delta</b> Practice";
document.body.append(para);


