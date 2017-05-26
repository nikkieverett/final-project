import $ from 'jquery';
import { store, actions } from './store/store.js';

let UserData = {
  loadRecipes(){
    $.ajax ({
      url: `/api/recipes`
    })
    .done((data) => {
      console.log('ajax is done');
      const action = Object.assign({}, actions.LOAD_ALL_RECIPES, {allRecipes: data});
      store.dispatch(action);
      console.log(store.getState());

    });
  },
  createRecipe(input, cb) {
    $.ajax({
      url: `/api/recipes`,
      method: 'POST',
      data: input
    })
    .done(() => {
      cb();
    });
  },
  deleteRecipe(recipeId, cb){
    $.ajax({
      url: `/api/recipes/${recipeId}`,
      method: 'DELETE'
    })
    .done(() => {
      cb();
    })
  }
};

module.exports = UserData;
