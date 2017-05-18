import React from 'react';
import UserData from '../UserData.js';

class Categories extends React.Component {
  render(){
    return(
      <div className="categories">
        <div>I'm the homepage and also a list of categories that when clicked will make a GET request of recipes by category</div>
        <div>Main Course</div>
        <div>Breakfast</div>
        <div>Dessert</div>
        <div>Appetizer</div>
        <div>Beverage</div>
        <div>Side Dish</div>
        <div>Condiment</div>
        <div>Bread</div>
      </div>
    )
  }
}

module.exports = Categories;
