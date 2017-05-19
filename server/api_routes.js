const express = require("express");
const uuid = require('node-uuid');
const Recipe = require('./models/Recipe.js');

const router = express.Router();

//api data for all recipes
router.get('/api/recipes', (req, res) => {
  Recipe.find({})
  .exec(function(err, recipes){
    res.send(recipes);
  });
});

//POST request to add a new recipe
router.post('/api/recipes', (req, res) => {
  console.log('im creating the recipe')
  var cb = (data) => {
    console.log('im the data in the api post route', data);
    res.send(data);
  };
  var recipe = new Recipe();
  recipe.title = req.body.title,
  recipe.prepTime = req.body.prepTime,
  recipe.cookTime = req.body.cookTime,
  recipe.totalTime = req.body.totalTime,
  recipe.href = req.body.href,
  recipe.category = req.body.category,
  recipe.img = req.body.img,
  recipe.ease = req.body.ease,
  recipe.rating = req.body.rating,
  recipe.ingredients = req.body.ingredients,
  recipe.directions = req.body.directions,
  recipe.notes = req.body.notes,
  recipe.servings = req.body.servings,
  recipe.tried = req.body.tried,
  recipe.save(cb);
  console.log('im the recipe', recipe);
});

//GET request for specific recipe
router.get('/api/recipes/:recipeId', (req, res) => {

});

//PUT request to update recipes
router.put('/api/recipes/:recipeId', (req, res) => {

});

//DELETE request to delete recipes
router.delete('/api/recipes/:recipeId', (req, res) => {
  var cb = (err, data) => {
    res.sendStatus(204);
  };
  Recipe.findByIdAndRemove(req.params.recipeId, cb);
});


module.exports = router;
