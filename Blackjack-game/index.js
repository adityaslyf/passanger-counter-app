// let firstCard  = Math.floor((Math.random() * 100) + 1); 
// let secondCard = Math.floor((Math.random() * 100) + 1); 
let firstCard =5
let secondCard =11
  let sum = firstCard + secondCard;
  let cards = [firstCard,secondCard]
  let hasBlackjack= false;
  let isAlive = true;
let message = ""

  
 
// console.log(hasBlackjack)
// console.log(isAlive)
 
let  messageEl = document.getElementById("message-el");

let sumEl = document.getElementById("sum-el");
// let sumEl = document.querySelector("#sum-el");

let cardsEl = document.getElementById("cards-el");

function startGame(){
renderGame()
}

function renderGame(){

sumEl.textContent = "Sum: " + sum;
cardsEl.textContent = "card: " + cards[0] + " " + cards[1];
  if (sum <= 20){
    message="Do you want to draw a new card? 🙂"
  }else if(sum ===21) {

    message ="Wohoo! You've got Blackjack! 🥳"
    hasBlackjack = true;
  }
  else{
message ="You're out of the game! 😭 "
   isAlive = false
  }
  
(messageEl.textContent) = message;
 
}

function newCard(){
  console.log( "Drawing a new card from the deck!")
  let card = 6;
  sum+= card;
cards.push(card)
console.log(cards)
  renderGame();
  
}







