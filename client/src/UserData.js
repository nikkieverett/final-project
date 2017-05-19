//ajax calls
//load all recipes -- get
//add recipe -- post
//delet recipe -- delete
//edit recipe -- put
import $ from 'jquery';
// import React from 'react';

const URL = 'http://localhost:5003';

let UserData = {
  loadRecipes(cb){
    $.ajax ({
      url: `${URL}/api/recipes`
    })
    .done((data) => {
      // console.log('im in load recipes with the data', data);
      cb(data);
    });
  },
  createRecipe(input, cb) {
    $.ajax({
      url: `${URL}/api/recipes`,
      method: 'POST',
      data: input
    })
    .done(() => {
      console.log('im inside the ajax call creating the recipe', input)
      cb();
      // this.loadRecipes(cb);
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
