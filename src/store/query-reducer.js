import constants from './constants.js';
import { exists } from 'fs';

const initialState = {
  allRecipes: [],
  queryInput: '',
  category: '',
  subcategory: '',
  ingredients: [],
  breadcrumbs: [],
  filteredRecipes: []
};

const queryReducer = (state = initialState, action) => {
  let copyFilteredRecipes = state.filteredRecipes;

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

      if (catFiltered.length === 0) {
        alert('No matches found');
        return;
      }

      return Object.assign({}, state, {
        subcategory: '',
        category: action.category,
        filteredRecipes: catFiltered
      });

    case constants.SORT_BY_SUBCATEGORY:
      let subcategoryFiltered;

      if (state.filteredRecipes.length) {
        subcategoryFiltered = copyFilteredRecipes.filter((recipe) => {
          return (recipe.title.includes(action.subcategory));
        });
      }

      if (subcategoryFiltered.length === 0) {
        alert('No matches found');
        return;
      }

      return Object.assign({}, state, {
        category: action.category,
        subcategory: action.subcategory,
        filteredRecipes: subcategoryFiltered
      });

    case constants.FILTER_RECIPES:
      let queryFiltered = state.allRecipes.filter((recipe) => {
         return(recipe.title.includes(state.queryInput));
      });

      if (queryFiltered.length === 0) {
        alert('No matches found');
        return;
      }

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

    case constants.UPDATE_BREADCRUMBS:
      let copyBreadCrumbList = [];

      if (state.category && copyBreadCrumbList.indexOf(state.category) <= -1) {
        copyBreadCrumbList.push(state.category)
      }

      if (state.subcategory && copyBreadCrumbList.indexOf(state.subcategory) <= -1) {
        copyBreadCrumbList.push(state.subcategory)
      }

      if (state.queryInput && copyBreadCrumbList.indexOf(state.queryInput) <= -1) {
        copyBreadCrumbList.push(state.queryInput)
      }

      return Object.assign({}, state, {
        breadcrumbs: copyBreadCrumbList
      })

    case constants.REMOVE_FILTERED_RECIPES:
      return Object.assign({}, state, {
        breadcrumbs: [],
        filteredRecipes: [],
        category: ''
      })

    default:
      return(state);
  }
};

module.exports = queryReducer;
