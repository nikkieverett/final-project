const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = Schema({
  title: { type: String, required: true },
  prepTime: { type: String },
  cookTime: { type: String },
  totalTime: { type: String },
  href: { type: String }, //url
  category: { type: String },
  img: { type: String }, //url
  ease: { type: String },
  rating: { type: String },
  ingredients: { type: String },
  directions: { type: String },
  notes: { type: String },
  servings: { type: String },
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
