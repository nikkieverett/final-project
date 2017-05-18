import constants from './constants.js';

const initialState = {
  title:'',
  prepTime: '',
  cookTime:'',
  totalTime:'',
  href: '',
  category:'',
  img:'',
  ease:'',
  rating: 0,
  ingredients:'',
  directions:'',
  notes: '',
  servings:'',
  tried: false,
}

const recipeReducer = (state = initialState, action) => {
  return(state);
  console.log('im the recipe reducers state', state);
};

module.exports = recipeReducer;
