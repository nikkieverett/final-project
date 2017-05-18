import React from 'react';
import UserData from './../UserData.js';
import { store } from './../store/store.js';
import actions from './../store/actions.js';

class RecipeSearch extends React.Component {
  constructor(){
    super();
    this.state = store.getState();
  }
  componentDidMount(){
    this.unsub = store.subscribe(() => this.setState(store.getState()));
    this.getRecipes();
  }
  componentWillUnmount(){
    this.unsub();
  }
  handleDelete(id){
    const cb = () => {
      this.getRecipes();
    }
    UserData.deleteRecipe(id, cb);
  }
  getRecipes(){
    const cb = (data) => {
      const action = Object.assign({}, actions.LOAD_RECIPES, {recipes: data} )
      store.dispatch(action);
    }
    UserData.loadRecipes(cb);
  }
  render(){
    let searchResult = this.state.query.queryInput;
    let recipes = this.state.query.recipes.slice(0);
    console.log(recipes);
    //if there is a value in the queryInput state filter recipe list based on queryInput value
    //else return all recipes
    if(searchResult !== ''){
      var recipeList = recipes.map((recipe) => {
        if(recipe.title.includes(searchResult)){
          return
          <li key={recipe._id}>
            {recipe.title}
            <button onClick={() => this.handleDelete(recipe._id)}>Delete</button>
          </li>
        }
      })
    } else {
      recipeList = recipes.map((recipe) => {
        return
        <li key={recipe._id}>
          {recipe.title}
          <button onClick={() => this.handleDelete(recipe._id)}>Delete</button>
        </li>
      })
    }
    return(
      <div>
        <div>I'm the list of recipes</div>
        <ul>{recipeList}</ul>
      </div>
    )
  }
}

module.exports = RecipeSearch;
