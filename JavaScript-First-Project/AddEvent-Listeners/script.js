const container = document.querySelector(".container");
const card = document.querySelector(".card");

card.addEventListener("click", createCards);

const color = " #3b71b7";

function createCards() {
  for (let i = 2; i <= 112; i++) {
    const newCard = card.cloneNode(true);
    newCard.innerText = i;
    newCard.style.backgroundColor = "#137805";
    newCard.style.fontSize = "20px";

    newCard.addEventListener("mouseover", () => {
      newCard.style.backgroundColor = "#4ddadc";
    });

    newCard.addEventListener("mouseout", () => {
      newCard.style.backgroundColor = "red";
    });

    container.appendChild(newCard);
  }
}
