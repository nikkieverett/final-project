import React from 'react';
import RecipeForm from './RecipeForm.js';
import { store, actions } from '../store/store.js';
import UserData from '../UserData.js';

class AddRecipe extends React.Component{
  constructor(){
    super();
    this.state = store.getState();
  }
  componentDidMount(){
    this.unsub = store.subscribe(() => this.setState(store.getState()));
    store.dispatch(actions.CLEAR_RECIPE_INPUT);
  }
  componentWillUnmount(){
    this.unsub();
  }
  handleSaveClick(){
    const cb = ()=> {
      this.props.history.goBack();
      alert('Recipe saved successfully!');
    }
    let input = this.state.recipe.formValues;
    UserData.createRecipe(input, cb);
  }
  render(){
    return(
      <div>
        <RecipeForm onSave={(data) => this.handleSaveClick(data)} />
      </div>
    )
  }
}

module.exports = AddRecipe;
