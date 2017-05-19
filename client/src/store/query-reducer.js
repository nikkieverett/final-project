import constants from './constants.js';

const initialState = {
  queryInput: '',
  recipes: [],
  category: '',
  ingredients: []
};

const queryReducer = (state = initialState, action) => {
  switch(action.type){
    case constants.LOAD_RECIPES:
      return Object.assign({}, state, {
        recipes: action.recipes
      });
    case constants.QUERY_INPUT:
      return Object.assign({}, state, {
        queryInput: action.queryInput
      });
    default:
      return(state);
  }
};

module.exports = queryReducer;
