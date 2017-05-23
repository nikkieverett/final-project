import React from 'react';
import UserData from './../UserData.js';
import { store } from './../store/store.js';
import actions from './../store/actions.js';
import { withRouter } from 'react-router-dom';
import NavMenu from './NavMenu.js';
import SearchBar from './SearchBar';

class RecipeList extends React.Component {
  constructor(){
    super();
    this.state = store.getState();
  }
  componentDidMount(){
    this.unsub = store.subscribe(() => this.setState(store.getState()));
    this.getAllRecipes();
  }
  componentWillUnmount(){
    this.unsub();
  }
  handleDelete(id){
    const cb = () => {
      // add succesfully deleted message page?
      // this.getRecipes();
    }
    UserData.deleteRecipe(id, cb);
  }
  getAllRecipes(){
    const cb = (data) => {
      const action = Object.assign({}, actions.LOAD_ALL_RECIPES, {allRecipes: data});
      store.dispatch(action);
    }
    UserData.loadRecipes(cb);
  }

  render(){
    let recipes = this.state.query.allRecipes.map((recipe) =>
    <li key={recipe._id}>{recipe.title}</li>)
    return(
      <div>
        <NavMenu />
        <SearchBar />
        <ul>{recipes}</ul>
      </div>
    )
  }
}

module.exports = withRouter(RecipeList);
