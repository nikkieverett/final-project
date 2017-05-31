import $ from 'jquery';
import { store, actions } from './store/store.js';

let UserData = {
  loadRecipes(){
    $.ajax ({
      url: `/api/recipes`
    })
    .done((data) => {
      const action = Object.assign({}, actions.LOAD_ALL_RECIPES, {allRecipes: data});
      store.dispatch(action);
    });
  },
  createRecipe(input, cb) {
    $.ajax({
      url: `/api/recipes`,
      method: 'POST',
      data: input
    })
    .done(() => {
      this.loadRecipes();
      cb();
    });
  },
  deleteRecipe(recipeId, cb){
    $.ajax({
      url: `/api/recipes/${recipeId}`,
      method: 'DELETE'
    })
    .done(() => {
      this.loadRecipes();
      cb();
    })
  },
  viewRecipe(recipeId, cb){
    $.ajax({
      url: `/api/recipes/${recipeId}`
    })
    .done((data) => {
      cb(data);
    })
  },
  editRecipe(recipeId, cb){
    $.ajax({
      url: `/api/recipes/${recipeId}`
    })
    .done((data) => {
      cb(data);
    })
  }
};

module.exports = UserData;
