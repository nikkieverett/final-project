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
          <h2>{recipe.category}: {recipe.ease}</h2>
          <div className="buttons">
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
