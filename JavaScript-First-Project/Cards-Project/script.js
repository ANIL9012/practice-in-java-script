
const h1 = document.querySelector('h1')
const container = document.querySelector('.container')
const card = document.querySelector('.card1')

for(let i = 2; i <= 100; i++){

   const newCard = card.cloneNode(true);
   newCard.innerText = i;
   container.appendChild(newCard);
}

container.classList.add("cards-display")