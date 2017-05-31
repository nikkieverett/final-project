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
    store.dispatch()
  }
  componentWillUnmount(){
    this.unsub();
  }
  handleSaveClick(data){
    const cb = (data)=> {
      this.props.history.goBack();
      alert('Recipe updated successfully!');
    }
    UserData.editRecipe(id, cb);
  }
  render(){
    return(
      <div>
        <RecipeForm {...this.state} onSave={(data) => this.handleSaveClick(data)} />
      </div>
    )
  }
}

module.exports = withRouter(EditRecipe);
