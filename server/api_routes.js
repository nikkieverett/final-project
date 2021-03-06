const express = require("express");
const uuid = require('node-uuid');
const passport = require('passport');
const flash = require('flash');

const Recipe = require('./models/Recipe.js');
// const User = require("./models/User.js");

const router = express.Router();

//create user account
// router.get('/signup', function(req, res) {
//   res.render('signup');
// });

// router.post('/signup', function(req, res, next){
//   var username = req.body.username;
//   var password = req.body.password;

  // User.findOne({ username: username }, function(err, user){
//     if(err){
//       return next(err);
//     }
//     if(user){
//       req.flash("error", "User already exists");
//       return res.redirect("/signup");
//     }
//     const newUser = new User({
//       username: username,
//       password: password
//     });
//     newUser.save(next);
//   });
//
// }, passport.authenticate("login", {
//   successRedirect: "/",
//   failureRedirect: "/signup",
//   failureFlash: true
// }));
//api data for all recipes
router.get('/api/recipes', (req, res) => {
  Recipe.find({})
  .exec(function(err, recipes){
    res.send(recipes);
  });
});

//POST request to add a new recipe
router.post('/api/recipes', (req, res) => {
  var cb = (data) => {
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
  recipe.save(cb);
});

//READ request for specific recipe
router.get('/api/recipes/:recipeId', (req, res) => {
  var cb = (err, data) => {
    res.send(data);
  }
  Recipe.findById(req.params.recipeId, cb);
});

//UPDATE request to update recipes
router.put('/api/recipes/:recipeId', (req, res) => {
  var cb = (err, data) => {
    res.sendStatus(204);
  }
  Recipe.findByIdAndUpdate(req.params.recipeId, {
    $set: {
      title: req.body.title,
      prepTime: req.body.prepTime,
      cookTime: req.body.cookTime,
      totalTime: req.body.totalTime,
      href: req.body.href,
      category: req.body.category,
      img: req.body.img,
      ease: req.body.ease,
      rating: req.body.rating,
      ingredients: req.body.ingredients,
      directions: req.body.directions,
      notes: req.body.notes,
      servings: req.body.servings,
    }
  }, cb);
});

//DELETE request to delete recipes
router.delete('/api/recipes/:recipeId', (req, res) => {
  var cb = (err, data) => {
    res.sendStatus(204);
  };
  Recipe.findByIdAndRemove(req.params.recipeId, cb);
});


module.exports = router;
