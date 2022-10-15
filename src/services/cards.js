import allCards from './allCards.json'

export default {
  getAllCards: async () => {
    const response = allCards;
    return await response;
  }
}