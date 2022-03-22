let div = document.querySelector('div');
// console.log(div)
// div.innerText = "hello"
for(let i = 0; i < 100; i++) 
{ 
    // console.log(i)
const button = document.createElement('button');
console.log(button)
button.innerHTML = "Hey!";
// console.log("button.innerHTML")
div.appendChild(button);
}