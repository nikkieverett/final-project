import constants from './constants.js';
//loading recipes
const LOAD_ALL_RECIPES = { type: constants.LOAD_ALL_RECIPES };
const SORT_BY_ALPHA = { type: constants.SORT_BY_ALPHA };
const SORT_BY_CATEGORY = { type: constants.SORT_BY_CATEGORY};
const FILTER_RECIPES = { type: constants.FILTER_RECIPES };
//filtering recipes
const QUERY_INPUT = { type: constants.QUERY_INPUT };
const REMOVE_FILTERED_RECIPES = { type: constants.REMOVE_FILTERED_RECIPES };
//adding and editing recipes
const CURRENT_RECIPE = { type: constants.CURRENT_RECIPE };
const ONCHANGE_RECIPE_INPUT = { type: constants.ONCHANGE_RECIPE_INPUT };
const SET_EDIT_RECIPE_INPUT = { type: constants.SET_EDIT_RECIPE_INPUT };
const CLEAR_RECIPE_INPUT = { type: constants.CLEAR_RECIPE_INPUT };
//styling
const SHOW_HIDE_DROPDOWN = { type: constants.SHOW_HIDE_DROPDOWN};

const actions = {
  LOAD_ALL_RECIPES: LOAD_ALL_RECIPES,
  SORT_BY_CATEGORY: SORT_BY_CATEGORY,
  SORT_BY_ALPHA: SORT_BY_ALPHA,
  FILTER_RECIPES: FILTER_RECIPES,
  QUERY_INPUT: QUERY_INPUT,
  REMOVE_FILTERED_RECIPES: REMOVE_FILTERED_RECIPES,
  CURRENT_RECIPE: CURRENT_RECIPE,
  ONCHANGE_RECIPE_INPUT: ONCHANGE_RECIPE_INPUT,
  SET_EDIT_RECIPE_INPUT: SET_EDIT_RECIPE_INPUT,
  CLEAR_RECIPE_INPUT: CLEAR_RECIPE_INPUT,
  SHOW_HIDE_DROPDOWN: SHOW_HIDE_DROPDOWN,
};

module.exports = actions;
