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
    this.getRecipeCard()
  }
  componentWillUnmount(){
    this.unsub();
  }
  getRecipeCard(){
    const id = this.props.match.params.recipeId;
    store.dispatch(Object.assign({}, actions.CURRENT_RECIPE,{
      currentId: id
    }));
  }
  render(){
    return(
      <div>
        <Link to="/">Home</Link>
        <div>I'm the recipe card</div>
        <div>I need to make a GET request using the recipe card Id</div>
      </div>
    )
  }
}

module.exports = withRouter(RecipeCard);
