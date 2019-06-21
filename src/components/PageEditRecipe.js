import React from 'react';
import { withRouter } from 'react-router-dom';
import { store, actions } from '../store/store.js';

// utils
import RecipeApiCalls from '../utils/RecipeApiCalls';

// components
import RecipeForm from './partials/RecipeForm';
import SideBarNav from './partials/SideBarNav';


class EditRecipePage extends React.Component{
  constructor(){
    super();
    this.state = store.getState();
  }
  componentDidMount(){
    this.unsub = store.subscribe(() => this.setState(store.getState()));
    store.dispatch(actions.SET_EDIT_RECIPE_INPUT);
  }
  componentWillUnmount(){
    this.unsub();
  }
  handleSaveClick(){
    let id = this.props.match.params.recipeId;
    let input = this.state.recipe.formValues;

    const updateRecipeCallback = () => {
      this.props.history.goBack();
      alert('Recipe updated successfully!');
    }

    RecipeApiCalls.EditRecipePage(id, input, updateRecipeCallback);
  }
  render(){
    return(
      <div>
        <SideBarNav/>
        <RecipeForm {...this.state.recipe.formValues} onSave={(data) => this.handleSaveClick(data)} />
      </div>
    )
  }
}

module.exports = withRouter(EditRecipePage);
