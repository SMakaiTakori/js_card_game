import Deck from "./deck.js";

const computerCardSlot = document.querySelector(".computer-card-slot");
const playerCardSlot = document.querySelector(".player-card-slot");
const computerDeckElement = document.querySelector(".computer-deck");
const playerDeckElement = document.querySelector(".player-deck");
const text = document.querySelector(".text");

let playerDeck, computerDeck;

// start game immediately

const startGame = () => {
  // create a new deck
  // shuffle cards so they are random
  const deck = new Deck();
  deck.shuffle();

  // split into two equal piles of cards
  const deckMidpoint = Math.ceil(deck.numberOfCards / 2);
  // player should get the first 26 cards
  playerDeck = new Deck(deck.cards.slice(0, deckMidpoint));
  computerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards));

  cleanBeforeRound();
};

startGame();
// computerCardSlot.appendChild(deck.cards[0].getHTML());
const cleanBeforeRound = () => {
  computerCardSlot.innerHTML = "";
  playerCardSlot.innerHTML = "";
  text.innerText = "";

  updateDeckCount();
};

const updateDeckCount = () => {
  computerDeckElement.innerText = computerDeck.numberOfCards;
  playerDeckElement.innerText = playerDeck.numberOfCards;
};
