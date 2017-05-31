import React from 'react';
import UserData from './../UserData.js';
import { store, actions } from './../store/store.js';
import { withRouter } from 'react-router-dom';

class ListCreator extends React.Component {
  handleDelete(id){
    const cb = () => {
      store.dispatch(actions.REMOVE_FILTERED_RECIPES);
      this.props.history.push('/all-recipes');

      alert("Recipe has been successfully deleted!");
    }
    UserData.deleteRecipe(id, cb);
  }
  handleEdit(id){
    const cb = (data)=> {
      console.log('got the data', data);
      this.props.history.push(`/edit/${id}`);
    }
    UserData.editRecipe(id, cb);
  }
  handleClick(id){
    this.props.history.push(`/recipes/${id}`);
  }
  render(){
    let recipes = this.props.recipes.map((recipe) => {
      return(
        <div className="list-items" key={recipe._id}>
          <h1 onClick={() => this.handleClick( recipe._id)}>{recipe.title}</h1>
          <h2>{recipe.category}: {recipe.ease}</h2>
          <div className="buttons">
            <div onClick={() => this.handleDelete(recipe._id)}
              className="delete"></div>
            <div onClick={() => this.handleEdit(recipe._id)}
              className="edit"></div>
            <div onClick={() => this.handleFave()}
              className="not-favorite"></div>
          </div>
        </div>
      )
    });
    return <div>{recipes}</div>
  }
}

module.exports = withRouter(ListCreator);
