import constants from './constants.js';

const LOAD_ALL_RECIPES = { type: constants.LOAD_ALL_RECIPES };
const ADD_RECIPE_INPUT = { type: constants.ADD_RECIPE_INPUT };
const QUERY_INPUT = { type: constants.QUERY_INPUT };
const
FILTER_RECIPES = { type: constants.FILTER_RECIPES };

const actions = {
  LOAD_ALL_RECIPES: LOAD_ALL_RECIPES,
  ADD_RECIPE_INPUT: ADD_RECIPE_INPUT,
  QUERY_INPUT: QUERY_INPUT,
  FILTER_RECIPES: FILTER_RECIPES
};

module.exports = actions;
