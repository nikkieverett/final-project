import React from 'react';
import { withRouter } from 'react-router-dom';

class ListCreator extends React.Component {
  handleClick(id){
    this.props.history.push(`/recipes/${id}`);
  }
  render(){
    let recipes = this.props.recipes.map((recipe) => {
      return(
        <div className="list-items" key={recipe._id}>
          <h1 onClick={() => this.handleClick(recipe._id)}>{recipe.title}</h1>
          <h2>Category: {recipe.category}</h2>
          <h2>Difficulty: {recipe.ease}</h2>
          <h2>Total Time: {recipe.totalTime}</h2>
        </div>
      )
    });
    return <div>{recipes}</div>
  }
}

module.exports = withRouter(ListCreator);
