import constants from './constants.js';

const initialState = {
  categories: [],
  currentRecipe:{},
  formValues: {
    title:'',
    prepTime: '',
    cookTime:'',
    totalTime:'',
    href: '',
    category:'',
    img:'',
    ease:'',
    rating: 0,
    ingredients: '',
    directions: '',
    notes: '',
    servings:'',
    tried: '',
  }
}

const recipeReducer = (state = initialState, action) => {
  switch(action.type){
    case constants.CURRENT_RECIPE:
      return Object.assign({}, state,{
        currentRecipe: action.currentRecipe
      });
    case constants.ONCHANGE_RECIPE_INPUT:
      console.log('changing recipe input');
      const newFormValues = Object.assign({}, state.formValues, { [action.data.key]: action.data.value} )
      return Object.assign({}, state, { formValues: newFormValues });
    case constants.SET_EDIT_RECIPE_INPUT:
      console.log('edit recipe input', state);
      const copyFormValues = Object.assign({}, state.formValues);
      const copyCurrentRecipe = Object.assign({}, state.currentRecipe);
      for(let propName in state.formValues){
        if(copyCurrentRecipe[propName] !== undefined){
          copyFormValues[propName] = copyCurrentRecipe[propName];
        }
      };
      console.log(copyFormValues);
      return Object.assign({}, state, { formValues: copyFormValues });
    case constants.CLEAR_RECIPE_INPUT:
      console.log('clear all recipe input', state);
      return Object.assign({}, state, { formValues: initialState.formValues })
    default:
      return(state);
  }
};

module.exports = recipeReducer;
