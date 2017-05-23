import React from 'react';
import { withRouter } from 'react-router-dom';
import { store, actions } from '../store/store.js';
import UserData from '../UserData.js';

class Categories extends React.Component {
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
  getRecipes(){
    const cb = (data) => {
      const action = Object.assign({}, actions.LOAD_ALL_RECIPES, {allRecipes: data});
      store.dispatch(action);

    }
    UserData.loadRecipes(cb);
  }
  filter(category){
    let filteredRecipes = this.state.query.allRecipes.filter((recipe) => {
      return recipe.category === category.toUpperCase()
    })
    console.log(filteredRecipes);
    const action = Object.assign({}, actions.FILTER_RECIPES, {
      filteredRecipes: filteredRecipes
    });
    store.dispatch(action);

    this.props.history.push('./filtered-list');
  }
  render(){
    return(
      <ul className="categories">
        <li className="category" onClick={() => this.filter("main course")}>Main Course</li>
        <li className="category" onClick={() => this.filter("breakfast")}>Breakfast</li>
        <li className="category" onClick={() => this.filter("dessert")}>Dessert</li>
        <li className="category" onClick={() => this.filter("appetizer")}>Appetizer</li>
        <li className="category" onClick={() => this.filter("beverage")}>Beverage</li>
        <li className="category" onClick={() => this.filter("side dish")}>Side Dish</li>
        <li className="category" onClick={() => this.filter("condiment")}>Condiment</li>
        <li className="category" onClick={() => this.filter("bread")}>Bread</li>
      </ul>
    )
  }
}

module.exports = withRouter(Categories);
