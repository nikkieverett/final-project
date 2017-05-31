import React from 'react';
import RecipeForm from './RecipeForm.js';
import { withRouter } from 'react-router-dom';
import { store, actions } from '../store/store.js';
import UserData from '../UserData.js';

class EditRecipe extends React.Component{
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
  handleSaveClick(data){
    const cb = () => {
      this.props.history.goBack();
      alert('Recipe updated successfully!');
    }

    let id = this.props.match.params.recipeId;
    let input = this.state.recipe.formValues;
    UserData.editRecipe(id, input, cb);
  }
  render(){

    console.log(this.state);
    return(
      <div>
        <RecipeForm {...this.state.recipe.formValues} onSave={(data) => this.handleSaveClick(data)} />
      </div>
    )
  }
}

module.exports = withRouter(EditRecipe);
