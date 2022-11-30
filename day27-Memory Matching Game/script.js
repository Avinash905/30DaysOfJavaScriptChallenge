let card = document.querySelectorAll(".card");

let firstCard,
  secondCard,
  hasFlipped = false,
  lockBoard = false;

(function shuffle() {
  card.forEach((crd) => {
    let rndmPos = Math.floor(Math.random() * 12);
    crd.style.order = rndmPos;
  });
})();

function flipCard() {
  if (lockBoard) {
    return;
  }
  if (this == firstCard) {
    return;
  }
  this.classList.add("flip");
  if (!hasFlipped) {
    hasFlipped = true;
    firstCard = this;
    return;
  }
  hasFlipped = false;
  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  if (firstCard.classList[1] == secondCard.classList[1]) {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
  } else {
    lockBoard = true;
    setTimeout(() => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");
      lockBoard = false;
      reset();
    }, 500);
  }
}

function reset() {
  [hasFlipped, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

card.forEach((crd) => {
  crd.addEventListener("click", flipCard);
});
