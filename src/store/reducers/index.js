// IMPORT FRAMEWORK FUNCTION
import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import cards from './cards'

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  cards
});

export default createRootReducer;
