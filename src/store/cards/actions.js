import cardServices from '../../services/cards'
import { generateCardDetails } from '../../utils/utils'
export const getAllCards = async ({ commit }) => {
  const allCards = await cardServices.getAllCards();
  commit('SAVE_ALL_CARDS', allCards);
}

export const addNewCard = async ({ commit }, { name, index }) => {
  const newCard = generateCardDetails(name);
  commit('ADD_NEW_CARD', { newCard, index });
}

export const toggleFreeze = async ({ commit }, { type, index }) => {
  commit('UPDTE_CARD_FREEZE', { type, index });
}

export const removeCard = async ({ commit }, { type, index }) => {
  commit('REMOVE_CARD', { type, index });
}
