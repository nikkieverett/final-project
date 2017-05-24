import React from 'react';
import UserData from './../UserData.js';

class ListCreator extends React.Component {
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
    let recipes = this.props.recipes.map((recipe) => {
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
    });
    return <div>{recipes}</div>
  }
}

module.exports = ListCreator;
