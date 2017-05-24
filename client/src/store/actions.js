import constants from './constants.js';

const LOAD_ALL_RECIPES = { type: constants.LOAD_ALL_RECIPES };
const ADD_RECIPE_INPUT = { type: constants.ADD_RECIPE_INPUT };
const QUERY_INPUT = { type: constants.QUERY_INPUT };
const SORT_BY_CATEGORY = { type: constants.SORT_BY_CATEGORY};
const
FILTER_RECIPES = { type: constants.FILTER_RECIPES };
const SHOW_HIDE_DROPDOWN = { type: constants.SHOW_HIDE_DROPDOWN};

const actions = {
  LOAD_ALL_RECIPES: LOAD_ALL_RECIPES,
  ADD_RECIPE_INPUT: ADD_RECIPE_INPUT,
  QUERY_INPUT: QUERY_INPUT,
  SORT_BY_CATEGORY: SORT_BY_CATEGORY,
  FILTER_RECIPES: FILTER_RECIPES,
  SHOW_HIDE_DROPDOWN: SHOW_HIDE_DROPDOWN
};

module.exports = actions;
