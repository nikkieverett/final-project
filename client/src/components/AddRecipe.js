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
    store.dispatch()
  }
  componentWillUnmount(){
    this.unsub();
  }
  handleSaveClick(data){
    const cb = (data)=> {
      this.props.history.goBack();
      alert('Recipe saved successfully!');
    }
    UserData.createRecipe(data, cb);
  }
  render(){
    return(
      <div>
        <RecipeForm {...this.state.recipe.formValues} onSave={(data) => this.handleSaveClick(data)} />
      </div>
    )
  }
}

module.exports = AddRecipe;
