import constants from './constants.js';

const initialState = {
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
    tried: false,
  }
}

const recipeReducer = (state = initialState, action) => {
  switch(action.type){
    case constants.ADD_RECIPE_INPUT:
      const newFormValues = Object.assign({}, state.formValues, { [action.data.key]: action.data.value} )
      return Object.assign({}, state, { formValues: newFormValues }
      );
    default:
      return(state);
  }
};

module.exports = recipeReducer;
