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

class Deck {
  constructor(cards) {
    this.cards = cards;
  }
}

class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }
}

// Create fn to allow us to create a full deck of 52 cards for each suit and value combos
// loop through values and suits

const freshDeck = () => {
  SUITS.flatMap((suit) => {
    VALUES.map((value) => {
      new Card(suit, value);
    });
  });
};
