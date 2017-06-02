import React from 'react';
import { withRouter } from 'react-router-dom';
import { store, actions } from './../store/store.js';
import UserData from './../UserData.js';
import NavMenu from './NavMenu.js';

class RecipeCard extends React.Component {
  constructor(){
    super();
    this.state = store.getState();
  }
  componentDidMount(){
    this.unsub = store.subscribe(() => this.setState(store.getState()));
    let id = this.props.match.params.recipeId;
    UserData.viewRecipe(id);
  }
  componentWillUnmount(){
    this.unsub();
  }
  handleDelete(id){
    const cb = () => {
      store.dispatch(actions.REMOVE_FILTERED_RECIPES);
      this.props.history.push('/recipes');
      alert("Recipe has been successfully deleted!");
    }
    UserData.deleteRecipe(id, cb);
  }
  handleEdit(id){
    this.props.history.push(`/edit/${id}`);
  }
  render(){
    const id = this.props.match.params.recipeId;
    const current = this.state.recipe.currentRecipe;
    let ingredients;
    let directions;
    let notes;
    if(Object.keys(current).length !== 0){
      ingredients = this.state.recipe.currentRecipe.ingredients.replace(/\r\n|\r|\n/g, '<br />');
      directions = this.state.recipe.currentRecipe.directions.replace(/\r\n|\r|\n/g, '<br />');
      notes = this.state.recipe.currentRecipe.notes.replace(/\r\n|\r|\n/g, '<br />');
    }

    return(
      <div>
        <div className="navMenu">
          <NavMenu />
        </div>
        <div className="right-side">
          <div className="recipe-card">
            <div className="buttons">
              <div className="delete" onClick={() => this.handleDelete(id)}></div>
              <div className="edit" onClick={() => this.handleEdit(id)}></div>
            </div>
            <h1>{current.title}</h1>
            <div className="details">
              <h3 className="detail"><span>Serves </span> {current.servings}</h3>
              <h3 className="detail"><span>Prep Time </span> {current.prepTime}</h3>
              <h3 className="detail"><span>Cook Time </span> {current.cookTime}</h3>
              <h3 className="detail"><span>Total Time </span> {current.totalTime}</h3>
            </div>
            <h2>Ingredients</h2>
            <p dangerouslySetInnerHTML={{__html: ingredients}}></p>
            <h2>Instructions</h2>
            <p dangerouslySetInnerHTML={{__html: directions}}></p>
            <h2>Notes</h2>
            <p dangerouslySetInnerHTML={{__html: notes}}></p>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = withRouter(RecipeCard);
