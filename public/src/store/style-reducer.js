import constants from './constants.js';

const initialState = {
  catDropDownVisible: false
}

const styleReducer = (state = initialState, action) => {
  switch(action.type){
    case constants.SHOW_HIDE_DROPDOWN:
      return(
        Object.assign({}, state, {
        catDropDownVisible: !state.catDropDownVisible
      }));
    default:
      return(state);
  }
};

module.exports = styleReducer;
