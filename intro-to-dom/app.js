


// // const p1Button = document.querySelector('#p1Button');
// // const p2Button = document.querySelector('#p2Button');
// // const resetButton = document.querySelector('#reset')
// // const p1Display = document.querySelector('#p1Display');
// // const p2Display = document.querySelector('#p2Display');
// // const winningScoreSelect = document.querySelector('#playto');

// // let p1Score = 0;
// // let p2Score = 0;
// // let winningScore = 5;
// // let isGameOver = false;

// // p1Button.addEventListener('click', function(){
// //     if(!isGameOver){
// //     p1Score += 1;
// //     if (p1Score === winningScore) { 
// //        isGameOver = true;     
// //     }
// //     p1Display.textContent = p1Score;
// //     }
// // })

// // p2Button.addEventListener('click', function(){
// //     if(!isGameOver){
// //     p2Score += 1;
// //     if (p2Score === winningScore) {
// //        isGameOver = true;    
// //     }
// //     p2Display.textContent = p1Score;
// //     }
// // })

// // winningScoreSelect.addEventListener('change', function(){
// //     winningScore = parseInt(this.value);
// //     reset();
// // })
// // resetButton.addEventListener('click', reset)

// // function reset(){
// //     isGameOver = false;
// //     p1Score = 0;
// //     p2Score = 0;
// //     p1Display.textContent = 0;
// //     p2Display.textContent = 0;
// // }

// // secret dish game
// // enter a dish to see if it is the secret winning dish
// // if it is you win
// // if not then restart
// // reset button


// const newform = document.querySelector('#myform')
// // console.log(newform)

// let winningDish = 'pizza';
// let enteredDish = '';
// newform.addEventListener('submit', function(event){
   
//    event.preventDefault();
//    console.log("clicked")
//    const userinput = document.querySelector("#dishname").value
//    console.log("Submitted", userinput)
//        if(userinput === winningDish) {
//            console.log("You found the dish") 
//        } else {
//            console.log("please try again")
//        }
    
// })

// create a webpage with three buttons
// each button(clicked) will show content 
// create css with clicked
// create html file with three buttons
// each button has its own id 


const newform = document.querySelector("#myform");
console.log(newform)
newform.addEventListener('click', function(event){
    event.preventDefault();
})