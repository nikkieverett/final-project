import React from 'react';

class RecipeCard extends React.Component {
  render(){
    console.log('im the props for this component', this.props);
    return(
      <div>
        <div>I'm the recipe card</div>
        <div>I need to make a GET request using the recipe card Id</div>
      </div>
    )
  }
}

module.exports = RecipeCard;
