import $ from 'jquery';

let UserData = {
  loadRecipes(cb){
    $.ajax ({
      url: `/api/recipes`
    })
    .done((data) => {
      cb(data);
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
