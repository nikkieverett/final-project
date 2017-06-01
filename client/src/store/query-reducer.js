import constants from './constants.js';

const initialState = {
  allRecipes: [],
  queryInput: '',
  category: '',
  ingredients: [],
  filteredRecipes: []
};

const queryReducer = (state = initialState, action) => {
  console.log(action.type);
  switch(action.type){
    case constants.LOAD_ALL_RECIPES:
      return Object.assign({}, state, {
        category: '',
        allRecipes: action.allRecipes
      });
    case constants.QUERY_INPUT:
      return Object.assign({}, state, {
        queryInput: action.queryInput.toLowerCase()
      });
    case constants.SORT_BY_CATEGORY:
      let catFiltered = state.allRecipes.filter((recipe) => {
        return recipe.category === action.category;
      });
      return Object.assign({}, state, {
        category: action.category,
        filteredRecipes: catFiltered
      });
    case constants.FILTER_RECIPES:
      let queryFiltered = state.allRecipes.filter((recipe) => {
         return(recipe.title.includes(state.queryInput));
      });
      return Object.assign({}, state, {
        category: '',
        filteredRecipes: queryFiltered
      });
    case constants.SORT_BY_ALPHA:
      let sortFunc = (arr) => {
        arr.sort(function(a, b){
          if (a.title > b.title) {
            return 1;
          }
          else {
            return -1;
          }
        });
      };

      sortFunc(state.allRecipes);
      if(state.filteredRecipes !== []){
        sortFunc(state.filteredRecipes);
      };
      return Object.assign({}, state, {
        allRecipes: state.allRecipes,
        filteredRecipes: state.filteredRecipes
      });
    case constants.REMOVE_FILTERED_RECIPES:
      return Object.assign({}, state, {
        filteredRecipes: [],
        category: ''
      })
    default:
      return(state);
  }
};

module.exports = queryReducer;
