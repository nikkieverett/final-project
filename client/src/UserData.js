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
  deleteRecipe(id, cb){
    $.ajax({
      url: `/api/recipes/${id}`,
      method: 'DELETE'
    })
    .done(() => {
      this.loadRecipes();
      cb();
    })
  },
  viewRecipe(id, cb){
    $.ajax({
      url: `/api/recipes/${id}`
    })
    .done((data) => {
      const action = Object.assign({}, actions.CURRENT_RECIPE, {currentRecipe: data});
      store.dispatch(action);

    })
  },
  editRecipe(id, input, cb){
    $.ajax({
      url: `/api/recipes/${id}`,
      method: 'PUT',
      data: input
    })
    .done(() => {
      cb();
    })
  }
};

module.exports = UserData;
