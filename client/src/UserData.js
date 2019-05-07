import $ from 'jquery';
import { store, actions } from './store/store.js';

const path = 'http://not-yo-mamas-recipes.herokuapp.com';

let UserData = {
  loadRecipes(){
    $.ajax ({
      url: path + `/api/recipes`
    })
    .done((data) => {
      const action = Object.assign({}, actions.LOAD_ALL_RECIPES, {allRecipes: data});
      store.dispatch(action);
    });
  },
  createRecipe(input, cb) {
    $.ajax({
      url: path + `/api/recipes`,
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
      url: path + `/api/recipes/${id}`,
      method: 'DELETE'
    })
    .done(() => {
      this.loadRecipes();
      cb();
    })
  },
  viewRecipe(id, cb){
    $.ajax({
      url: path + `/api/recipes/${id}`
    })
    .done((data) => {
      const action = Object.assign({}, actions.CURRENT_RECIPE, {currentRecipe: data});
      store.dispatch(action);

    })
  },
  editRecipe(id, input, cb){
    $.ajax({
      url: path + `/api/recipes/${id}`,
      method: 'PUT',
      data: input
    })
    .done(() => {
      cb();
    })
  }
};

module.exports = UserData;
