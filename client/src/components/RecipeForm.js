import React from 'react';
import { withRouter } from 'react-router-dom';

// import UserData from './../UserData.js';
import { store, actions } from './../store/store.js';

import NavMenu from './NavMenu.js';

class RecipeForm extends React.Component {
  setValue(field, evt){
    let data = {
      key: field,
      value: evt.target.value.toUpperCase()
    };
    let action = Object.assign({}, actions.ONCHANGE_RECIPE_INPUT, { data });
    store.dispatch(action);
  }
  handleSave(evt){
    evt.preventDefault();
    this.props.onSave();
  }

  render(){
    return(
      <div className="form-container">
        <NavMenu />
        <form
          className="recipe-form"
          onSubmit={(evt) => this.handleSave(evt)}>
          <div className="left-entry">
            <input
              id="name"
              placeholder="Recipe Name"
              className="input"
              type="text"
              value={this.props.title}
              onChange={(evt) => this.setValue('title', evt)}/>
            <input
              id="link"
              placeholder="Source (optional)"
              className="input"
              type="text"
              value={this.props.href}
              onChange={(evt) => this.setValue('href', evt)}/>

            <div className="time">
              <input
                id="prep"
                placeholder="Prep"
                className="input"
                type="text"
                value={this.props.prepTime}
                onChange={(evt) => this.setValue('prepTime', evt)}/>
              <input
                placeholder="Cook"
                className="input"
                id="cook"
                type="text"
                value={this.props.cookTime}
                onChange={(evt) => this.setValue('cookTime', evt)}/>
              <input
                placeholder="Total"
                className="input"
                id="total"
                type="text"
                value={this.props.totalTime}
                onChange={(evt) => this.setValue('totalTime', evt)}/>
            </div>

            <input
              id="servings"
              placeholder="Number of Servings"
              className="input"
              type="text"
              value={this.props.servings}
              onChange={(evt) => this.setValue('servings', evt)}/>
          </div>

          <div className="right-entry">
            <h1>Category</h1>
            <select
              id="category"
              className="input"
              type="text"
              value={this.props.category}
              onChange={(evt) => this.setValue('category', evt)}>
              <option value="BREAKFAST">Breakfast</option>
              <option value="MAIN COURSE">Main Course</option>
              <option value="DESSERT">Dessert</option>
              <option value="SIDE DISH">Side Dish</option>
              <option value="APPETIZER">Appetizer</option>
            </select>
            <h1>Difficulty:</h1>
            <select
              id="difficulty"
              className="input"
              type="text"
              value={this.props.ease}
              onChange={(evt) => this.setValue('ease', evt)}>
              <option value="EASY">Easy</option>
              <option value="INTERMEDIATE">Intermediate</option>
              <option value="DIFFICULT">Difficult</option>
              <option value="TIME CONSUMING">Time Consuming</option>
            </select>
            <h1>Tried yet:</h1>
            <input
              id="tried"
              className="input"
              type="checkbox"
              value={this.props.tried}
              onChange={(evt) => this.setValue('tried', evt)}/>
            <h1>Rating:</h1>
            <select
              id="rating"
              className="input"
              value={this.props.rating}
              onChange={(evt) => this.setValue('rating', evt)}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>

          <div className="main-entry">
            <h1>Ingredients:</h1>
            <textarea
              className="input"
              value={this.props.ingredients}
              onChange={(evt) => this.setValue('ingredients', evt)}/>
            <h1>Directions:</h1>
            <textarea
              className="input"
              value={this.props.directions}
              onChange={(evt) => this.setValue('directions', evt)}/>
          </div>

          <div className="sub-entry">
            <h1>Notes:</h1>
            <textarea
              className="input"
              value={this.props.notes}
              onChange={(evt) => this.setValue('notes', evt)} />
          </div>

          <input className="input" type="submit" />

        </form>
      </div>
    )
  }
}

module.exports = withRouter(RecipeForm);
