import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { store, actions } from './../store/store.js';
import UserData from './../UserData.js';

class RecipeCard extends React.Component {
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
  render(){
    let current = this.state.query.currentRecipe;


    return(
      <div>
        <Link to="/">Home</Link>
        <div>{current.title}</div>
        <div>{current.category}</div>
        <div>{current.ingredients}</div>
        <div>{current.directions}</div>
        <div>{current.notes}</div>

      </div>
    )
  }
}

module.exports = withRouter(RecipeCard);
