import React from 'react';
import { withRouter } from 'react-router-dom';
import UserData from './../UserData.js';
import { store, actions } from './../store/store.js';
import NavMenu from './NavMenu.js';

class RecipeForm extends React.Component {
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

  handleSubmit(evt){
    evt.preventDefault();
    const cb = () => {
      console.log('im the callback, done creating recipe')
    };
    // const cb = this.props.history.goBack();
    UserData.createRecipe(this.state.recipe.formValues, cb)
  }
  setValue(field, evt){
    let data = {
      key: field,
      value: evt.target.value
    };
    let action = Object.assign({}, actions.ADD_RECIPE_INPUT, { data });
    store.dispatch(action);
  }

  render(){
    return(
      <div className="form-container">
        <form className="recipe-form" id="form" onSubmit={(evt) => this.handleSubmit(evt)}>
          <input type="text" placeholder="title" onChange={(evt) => this.setValue('title', evt)}/>
          <input type="text" placeholder="prepTime" onChange={(evt) => this.setValue('prepTime', evt)}/>
          <input type="text" placeholder="cookTime" onChange={(evt) => this.setValue('cookTime', evt)}/>
          <input type="text" placeholder="totalTime" onChange={(evt) => this.setValue('totalTime', evt)}/>
          <input type="text" placeholder="href" onChange={(evt) => this.setValue('href', evt)}/>
          <input type="text" placeholder="category" onChange={(evt) => this.setValue('category', evt)}/>
          <input type="text" placeholder="img" onChange={(evt) => this.setValue('img', evt)}/>
          <input type="text" placeholder="ease" onChange={(evt) => this.setValue('ease', evt)}/>
          <input type="text" placeholder="rating" onChange={(evt) => this.setValue('rating', evt)}/>
          <input type="text" placeholder="ingredients" onChange={(evt) => this.setValue('ingredients', evt)}/>
          <input type="text" placeholder="directions" onChange={(evt) => this.setValue('directions', evt)}/>
          <input type="text" placeholder="notes" onChange={(evt) => this.setValue('notes', evt)}/>
          <input type="text" placeholder="servings" onChange={(evt) => this.setValue('servings', evt)}/>
          <input type="text" placeholder="tried" onChange={(evt) => this.setValue('tried', evt)}/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

module.exports = withRouter(RecipeForm);
