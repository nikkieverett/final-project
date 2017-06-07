import React from 'react';
import { withRouter } from 'react-router-dom';

class ListCreator extends React.Component {
  handleClick(id){
    this.props.history.push(`/recipes/${id}`);
  }
  render(){
    let recipes = this.props.recipes.map((recipe) => {
      if(recipe.rating === ''){
        recipe.rating = 0;
      }
      return(
        <div className="list-items" key={recipe._id}>
          <h1 onClick={() => this.handleClick(recipe._id)}>{recipe.title}</h1>
          <h2>Category: <span>{recipe.category}</span></h2>
          <h2>Difficulty: <span>{recipe.ease}</span></h2>
          <h2>Total Time: <span>{recipe.totalTime}</span></h2>
          <h2>Rating: <span>{recipe.rating} stars</span></h2>
        </div>
      )
    });
    return <div>{recipes}</div>
  }
}

module.exports = withRouter(ListCreator);
