import React from 'react';
import { store, actions } from '../store/store.js';
import UserData from './../UserData.js';
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component {
  constructor(){
    super();
    this.state = store.getState();
  }
  componentDidMount(){
    this.unsub = store.subscribe(() => this.setState(store.getState()));
    if(this.state.query.allRecipes === []){
      this.loadRecipes();
    }
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
      console.log(this.state.query);
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
      <div className={this.props.className}>
        <input
          placeholder="Search..."
          onKeyUp={(evt) => this.handleKeyUp(evt)}
          onChange={(evt) => this.handleChange(evt)}
        />
      </div>
    )
  }
}

module.exports = withRouter(SearchBar);
