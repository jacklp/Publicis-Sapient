import {createReducer} from '@reduxjs/toolkit'

export const ADD_CARD = 'ADD_CARD';

export const addCard = (nameInput, cardInput, limitInput) => ({ type: ADD_CARD, nameInput, cardInput, limitInput });

const initialState = [];

const cards = createReducer(initialState, {
  ADD_CARD: (state, action) => {
    state.push({
      name: action.nameInput.current.value,
      number: action.cardInput.current.value,
      limit: action.limitInput.current.value,
      balance: 0
    })
  }
})

export default cards;
