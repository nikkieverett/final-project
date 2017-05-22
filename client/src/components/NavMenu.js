import React from 'react';
import { Link } from 'react-router-dom';

class NavMenu extends React.Component {

  render(){
    return(
      <div className="nav-menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li onClick={() => this.dropDownCategories()}>Categories</li>
            <ul className="sub-menu" style={{display: "none"}}>
              <li className="sub-cat" onClick={() => this.filter("main course")}>Main Course</li>
              <li className="sub-cat" onClick={() => this.filter("breakfast")}>Breakfast</li>
              <li className="sub-cat" onClick={() => this.filter("dessert")}>Dessert</li>
              <li className="sub-cat" onClick={() => this.filter("appetizer")}>Appetizer</li>
              <li className="sub-cat" onClick={() => this.filter("beverage")}>Beverage</li>
              <li className="sub-cat" onClick={() => this.filter("side dish")}>Side Dish</li>
              <li className="sub-cat" onClick={() => this.filter("condiment")}>Condiment</li>
              <li className="sub-cat" onClick={() => this.filter("bread")}>Bread</li>
            </ul>
          <li><Link to="/all-recipes">View All Recipes</Link></li>
          <li><Link to="/create-new">Create New Recipe</Link></li>
        </ul>
      </div>
    )
  }
}

module.exports = NavMenu;
