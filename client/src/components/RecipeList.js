import React from 'react';
import UserData from './../UserData.js';
import { store, actions } from './../store/store.js';
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
  getAllRecipes(){
    const cb = (data) => {
      const action = Object.assign({}, actions.LOAD_ALL_RECIPES, {allRecipes: data});
      store.dispatch(action);
    }
    UserData.loadRecipes(cb);
  }
  handleDelete(id){
    const cb = () => {
      this.props.history.goBack();
      // add succesfully deleted message page?
      // this.getRecipes();
    }
    UserData.deleteRecipe(id, cb);
  }
  handleFave(evt){

  }
  render(){
    let recipes = this.state.query.allRecipes.map((recipe) => {
      return(
        <div className="list-items" key={recipe._id}>
          <h1>{recipe.title}</h1>
          <h2>{recipe.category}: {recipe.ease}</h2>
          <div className="buttons">
            <div onClick={() => this.handleDelete()}
              className="delete"></div>
            <div onClick={() => this.handleEdit()}
              className="edit"></div>
            <div onClick={(evt) => this.handleFave(evt)}
              className="not-favorite"></div>
          </div>
        </div>
      )
    })
    return(
      <div className="list-container">
        <NavMenu />
        <div className="recipes">
          {recipes}
        </div>
      </div>
    )
  }
}

module.exports = withRouter(RecipeList);
