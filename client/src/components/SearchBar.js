import React from 'react';
import { store, actions } from '../store/store.js';
import UserData from './../UserData.js';

class SearchBar extends React.Component {
  constructor(){
    super();
    this.state = store.getState();
  }
  componentDidMount(){
    this.unsub = store.subscribe(() => this.setState(store.getState()));
    this.loadRecipes();
  }
  componentWillUnmount(){
    this.unsub();
  }
  loadRecipes(){
    const cb = (data) => {
      store.dispatch(actions.LOAD_ALL_RECIPES, {allRecipes: data});
    }
    UserData.loadRecipes(cb);
  }
  handleChange(evt){
    const action = Object.assign({}, actions.QUERY_INPUT, { queryInput: evt.target.value });
    store.dispatch(action);
  }
  handleKeyUp(evt){
    if(evt.keyCode === 13){
      evt.target.value = '';

      let searchResult = this.state.query.queryInput;
      let recipes = this.state.query.allRecipes.slice(0);

      let filteredRecipes = recipes.filter((recipe) => {
        return recipe.title.includes(searchResult);
      });

      const action = Object.assign({}, actions.FILTER_RECIPES, {filteredRecipes: filteredRecipes})
      store.dispatch(action);
      this.props.history.push('./filtered-list')
    }
  }

  render(){
    return(
      <div>
        <div className="search-bar">
          <input
            placeholder="Search..."
            onKeyUp={(evt) => this.handleKeyUp(evt)}
            onChange={(evt) => this.handleChange(evt)}
          />
        </div>
      </div>
    )
  }
}

module.exports = SearchBar;
