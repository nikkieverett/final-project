import React from 'react';
import UserData from './../UserData.js';
import { store } from './../store/store.js'

class RecipeForm extends React.Component {
  constructor(){
    super();
    this.state = store.getState();
  }
  createRecipe(evt){
    evt.preventDefault();
    UserData.createRecipe();
  }
  render(){
    return(
      <div>
        <div>I'm the recipe form</div>
        <div>I need to make a POST request and generate a recipe card Id</div>
        <form>
          <input placeholder="Recipe Name" />
          <input placeholder="Prep Time" />
          <input placeholder="Cook Time" />
          <input placeholder="Total Time" />
          <input placeholder="Recipe Link" />
          <input placeholder="Category" />
          <input placeholder="Image Link" />
          <input placeholder="Ease" />
          <input placeholder="Rating" />
          <input placeholder="Ingredients" />
          <input placeholder="Directions" />
          <input placeholder="Notes" />
          <input placeholder="Servings" />
          <input placeholder="Tried" />
        </form>
        <button onClick={(evt) => this.createRecipe(evt)}>Create Recipe!!</button>
      </div>
    )
  }
}

module.exports = RecipeForm;
