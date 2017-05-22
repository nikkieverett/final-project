import constants from './constants.js';

const initialState = {
  allRecipes: [],
  queryInput: '',
  category: '',
  ingredients: [],
  filteredRecipes: []
};

const queryReducer = (state = initialState, action) => {
  switch(action.type){
    case constants.LOAD_ALL_RECIPES:
      return Object.assign({}, state, {
        allRecipes: action.allRecipes
      });
    case constants.QUERY_INPUT:
      return Object.assign({}, state, {
        queryInput: action.queryInput.toUpperCase()
      });
    case constants.FILTER_RECIPES:
      return Object.assign({}, state, {
        filteredRecipes: action.filteredRecipes
      });
    default:
      return(state);
  }
};

module.exports = queryReducer;
