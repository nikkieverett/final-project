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
    ingredients:'',
    directions:'',
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
    console.log(state.formValues);
      const newFormValues = Object.assign({}, state.formValues, { [action.data.key]: action.data.value} )
      return Object.assign({}, state, { formValues: newFormValues });
    case constants.SET_EDIT_RECIPE_INPUT:
      const copyFormValues = Object.assign({}, state.formValues);
      const copyCurrentRecipe = Object.assign({}, state.currentRecipe);
      for(var propName in state.formValues){
        if(copyCurrentRecipe[propName] !== undefined){
          copyFormValues[propName] = copyCurrentRecipe[propName];
        }
      };
      return Object.assign({}, state, { formValues: copyFormValues });
    default:
      return(state);
  }
};

module.exports = recipeReducer;
