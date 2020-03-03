import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'

// Project Libraries
import createRootReducer from './reducers'

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
  const store = createStore(
      createRootReducer(history), // new root reducer with router state
      preloadedState,
      applyMiddleware(
          routerMiddleware(history), // for dispatching history actions
          logger,
      )
  );
  return { store }
}
