import React from 'react';
import RecipeForm from './RecipeForm.js';
import { store, actions } from '../store/store.js';
import UserData from '../UserData.js';

class EditRecipe extends React.Component{
  constructor(){
    super();
    this.state = store.getState();
  }
  componentDidMount(){
    this.unsub = store.subscribe(() => this.setState(store.getState()));
  }
  componentWillUnmount(){
    this.unsub();
  }
  handleSaveClick(){
    UserData.editRecipe();
  }
  render(){
    return(
      <div>
        <BookForm {...this.state} onSave={(data) => this.handleSaveClick(data)} />
      </div>
    )
  }
}

module.exports = EditRecipe;
