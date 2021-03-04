import Deck from "./deck.js";

const computerCardSlot = document.querySelector(".computer-card-slot");

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

  console.log(playerDeck);
  console.log(computerDeck);
};

startGame();
// computerCardSlot.appendChild(deck.cards[0].getHTML());
