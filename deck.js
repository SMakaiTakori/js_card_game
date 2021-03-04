const SUITS = ["♠", "♣", "♥", "♦"];
const VALUES = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

export default class Deck {
  constructor(cards = freshDeck()) {
    this.cards = cards;
  }

  get numberOfCards() {
    return this.cards.length;
  }

  //return the top card to us
  pop() {
    return this.cards.shift();
  }
  // adds a card to the bottom of the pile
  push(card) {
    this.cards.push(card);
  }
  //Create a shuffle fn for deck class
  shuffle() {
    //loop through the cards to randomize
    for (let i = this.numberOfCards - 1; i > 0; i--) {
      // get a random index that's before the current card we're on
      const newIndex = Math.floor(Math.random() * (i + 1));
      // swap the card we're currently on with the newIndex
      const oldValue = this.cards[newIndex];
      this.cards[newIndex] = this.cards[i];
      this.cards[i] = oldValue;
    }
  }
}

class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }

  get color() {
    return this.suit === "♠" || this.suit === "♣" ? "black" : "red";
  }

  // need to create a div to  get access to the HTML for any one of the cards
  getHTML() {
    const cardDiv = document.createElement("div");
    cardDiv.innerText = this.suit;
    cardDiv.classList.add("card", this.color);
    cardDiv.dataset.value = `${this.value} ${this.suit}`;
    return cardDiv;
  }
}

// Create fn to allow us to create a full deck of 52 cards for each suit and value combos
// loop through values and suits

const freshDeck = () => {
  return SUITS.flatMap((suit) => {
    return VALUES.map((value) => {
      return new Card(suit, value);
    });
  });
};
