export function SAVE_ALL_CARDS(state, cards) {
  state.allCards = cards;
}

export function ADD_NEW_CARD(state, { newCard, index }) {
  state.allCards[index].cards.push(newCard);
}

export function UPDTE_CARD_FREEZE(state, { type, index }) {
  state.allCards[type].cards[index].freeze = !state.allCards[type].cards[index].freeze;
}

export function REMOVE_CARD(state, { type, index }) {
  state.allCards[type].cards.splice(index, 1);
}
