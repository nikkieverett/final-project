//ajax calls
//load all recipes -- get
//add recipe -- post
//delet recipe -- delete
//edit recipe -- put
import $ from 'jquery';
import React from 'react';

const URL = 'http://localhost:5003';

let UserData = {
  loadRecipes(cb){
    $.ajax ({
      url: `${URL}/api/recipes`
    })
    .done((data) => {
      cb(data);
    });
  },
  createRecipe() {
    $.ajax({
      url: `${URL}/api/recipes`,
      method: 'POST',
      data: {

      }
    })
    .done(() => {
      this.loadRecipes();
    });
  },
  deleteRecipe(recipeId, cb){
    $.ajax({
      url: `${URL}/api/recipes/${recipeId}`,
      method: 'DELETE'
    })
    .done(() => {
      cb();
    })
  }
};

module.exports = UserData;
