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
    case constants.SORT_BY_CATEGORY:
      let catFiltered = state.allRecipes.filter((recipe) => {
        return recipe.category === action.category.toUpperCase()
      });
      return Object.assign({}, state, {
        category: action.category,
        filteredRecipes: catFiltered
      });
    case constants.FILTER_RECIPES:
      let queryFiltered = state.allRecipes.filter((recipe) => {
        return recipe.title.includes(state.queryInput);
      });
      return Object.assign({}, state, {
        filteredRecipes: queryFiltered
      });
    case constants.REMOVE_FILTERED_RECIPES:
      console.log('im the remove filter action');
      return Object.assign({}, state, {
        filteredRecipes: [],
        category: ''
      })
    default:
      return(state);
  }
};

module.exports = queryReducer;
