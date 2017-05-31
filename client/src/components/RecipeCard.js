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
    this.getRecipe();
  }
  componentWillUnmount(){
    this.unsub();
  }
  getRecipe(){
    let id = this.props.match.params.recipeId;
    const cb = (data) => {
      store.dispatch(Object.assign({}, actions.CURRENT_RECIPE,{
        currentRecipe: data
      }));
    }
    UserData.viewRecipe(id, cb);
  }

  handleClick(){
    this.props.history.goBack();
  }
  render(){
    // console.log(this.state.query);
    let current = this.state.query.currentRecipe;
    return(
      <div className="recipe-card">
        <div className="back-button" onClick={() => this.handleClick()}></div>
        <h1>{current.title}</h1>
        <div className="details">
          <h3 className="detail"><span>Yield </span>{current.servings}</h3>
          <h3 className="detail"><span>Prep Time </span>{current.prepTime}</h3>
          <h3 className="detail"><span>Cook Time </span>{current.cookTime}</h3>
          <h3 className="detail"><span>Total Time </span>{current.totalTime}</h3>
        </div>
        <h2>Ingredients</h2>
        <p>{current.ingredients}</p>
        <h2>Instructions</h2>
        <p>{current.directions}</p>
        <h2>Notes</h2>
        <p>{current.notes}</p>
      </div>
    )
  }
}

module.exports = withRouter(RecipeCard);
