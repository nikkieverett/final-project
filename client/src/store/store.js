import { createStore, combineReducers } from 'redux';
import recipeReducer from './recipe-reducer.js';
import queryReducer from './query-reducer.js';
import actions from './actions.js';


const reducer = combineReducers({
  recipe: recipeReducer,
  query: queryReducer,
});

const store = createStore(reducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

module.exports = {
  store: store,
  actions: actions
};
