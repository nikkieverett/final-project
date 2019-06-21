import React from 'react';
import { withRouter } from 'react-router-dom';

class ListCreator extends React.Component {
  handleClick(id){
    this.props.history.push(`/${id}`);
  }

  render(){
    let recipes = this.props.recipes.map((recipe) => {
      if(recipe.rating === ''){
        recipe.rating = 0;
      }
      return(
        <div className="recipe-list__item" key={recipe._id}>
          <div className="recipe-list__item-title" onClick={() => this.handleClick(recipe._id)}>{recipe.title}</div>
          <div className="recipe-list__item-detail">Category: <span>{recipe.category}</span></div>
          <div className="recipe-list__item-detail">Difficulty: <span>{recipe.ease}</span></div>
          <div className="recipe-list__item-detail">Total Time: <span>{recipe.totalTime}</span></div>
          <div className="recipe-list__item-detail">Rating: <span>{recipe.rating} stars</span></div>
        </div>
      )
    });

    return(
      <div className="recipe-list">
        {recipes}
      </div>
    )
  }
}

module.exports = withRouter(ListCreator);
