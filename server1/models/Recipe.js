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
  rating: { type: Number },
  ingredients: { type: String },
  directions: { type: String },
  notes: { type: String },
  servings: { type: String },
  tried: { type: Boolean }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
