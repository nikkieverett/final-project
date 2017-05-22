import React from 'react';
import UserData from './../UserData.js';
import { store, actions } from './../store/store.js';
import NavMenu from './NavMenu.js';
import SearchBar from './SearchBar';

class FilteredList extends React.Component {

  constructor(){
    super();
    this.state = store.getState();
  }
  componentDidMount(){
    this.unsub = store.subscribe(() => this.setState(store.getState()));
    console.log(this.state.query);
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

  render(){
    let recipes = this.state.query.filteredRecipes.map((recipe) =>
    <li key={recipe._id}>{recipe.title}</li>)
    return(
      <div>
        <SearchBar />
        <NavMenu />
        <ul>{recipes}</ul>
      </div>
    )
  }
}

module.exports = FilteredList;
