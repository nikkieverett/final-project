import React from 'react';
import RecipeForm from './RecipeForm.js';
import { withRouter } from 'react-router-dom';
import { store, actions } from '../store/store.js';
import UserData from '../UserData.js';
import NavMenu from './NavMenu.js';

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
    console.log('edit recipe input being sent through ajax call', input)
    UserData.editRecipe(id, input, cb);
  }
  render(){
    return(
      <div>
        <NavMenu/>
        <RecipeForm {...this.state.recipe.formValues} onSave={(data) => this.handleSaveClick(data)} />
      </div>
    )
  }
}

module.exports = withRouter(EditRecipe);
