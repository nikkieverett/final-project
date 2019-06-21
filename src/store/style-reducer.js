import constants from './constants.js';

const initialState = {
  mainCourse: 'subcat hidden',
  breakfast: 'subcat hidden',
  dessert: 'subcat hidden',
  sideDish: 'subcat hidden',
  appetizer: 'subcat hidden'
}

const styleReducer = (state = initialState, action) => {
  switch(action.type){
    case constants.SHOW_HIDE_DROPDOWN:
      let categoryToBeUpdated = action.formattedCategoryName;
      let elementVisibility;

      if (state[categoryToBeUpdated] === 'subcat hidden') {
        elementVisibility = 'subcat visible'
      } else {
        elementVisibility = 'subcat hidden'
      }

      return Object.assign({}, state, { [categoryToBeUpdated]: elementVisibility });
    default:
      return(state);
  }
};

module.exports = styleReducer;
