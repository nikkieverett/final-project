import constants from './constants.js';

const LOAD_RECIPES = { type: constants.LOAD_RECIPES };
const ADD_RECIPE = { type: constants.ADD_RECIPE};
const QUERY_INPUT = { type: constants.QUERY_INPUT };

const actions = {
  LOAD_RECIPES: LOAD_RECIPES,
  ADD_RECIPE: ADD_RECIPE,
  QUERY_INPUT: QUERY_INPUT
};

module.exports = actions;