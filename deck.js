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
