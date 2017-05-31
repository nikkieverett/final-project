import React from 'react';
import { withRouter } from 'react-router-dom';
import UserData from './../UserData.js';
import { store, actions } from './../store/store.js';
import NavMenu from './NavMenu.js';

class RecipeForm extends React.Component {
  constructor(){
    super();
    this.state = store.getState();
  }
  componentDidMount(){
    this.unsub = store.subscribe(() => this.setState(store.getState()));
  }
  componentWillUnmount(){
    this.unsub();
  }
  handleSubmit(evt){
    evt.preventDefault();
    const cb = () => this.props.history.push('/all-recipes');
    let data = this.state.recipe.formValues;
    UserData.createRecipe(data, cb);
    alert('Recipe created successfully!');
  }
  setValue(field, evt){
    let data = {
      key: field,
      value: evt.target.value.toUpperCase()
    };
    let action = Object.assign({},
      actions.ADD_RECIPE_INPUT, { data });
    store.dispatch(action);
  }

  render(){
    return(
      <div className="form-container">
        <NavMenu />
        <form
          className="recipe-form"
          onSubmit={(evt) => this.handleSubmit(evt)}>

          <div className="page-title">Create a new recipe</div>

          <div className="left-entry">
            <input
              id="name"
              placeholder="Recipe Name"
              className="input"
              type="text"
              value={this.state.recipe.formValues.title}
              onChange={(evt) => this.setValue('title', evt)}/>
            <input
              id="link"
              placeholder="Source (optional)"
              className="input"
              type="text"
              value={this.state.recipe.formValues.href}
              onChange={(evt) => this.setValue('href', evt)}/>

            <div className="time">
              <input
                id="prep"
                placeholder="Prep"
                className="input"
                type="text"
                value={this.state.recipe.formValues.prepTime}
                onChange={(evt) => this.setValue('prepTime', evt)}/>
              <input
                placeholder="Cook"
                className="input"
                id="cook"
                type="text"
                value={this.state.recipe.formValues.cookTime}
                onChange={(evt) => this.setValue('cookTime', evt)}/>
              <input
                placeholder="Total"
                className="input"
                id="total"
                type="text"
                value={this.state.recipe.formValues.totalTime}
                onChange={(evt) => this.setValue('totalTime', evt)}/>
            </div>

            <input
              id="servings"
              placeholder="Number of Servings"
              className="input"
              type="text"
              value={this.state.recipe.formValues.servings}
              onChange={(evt) => this.setValue('servings', evt)}/>
          </div>

          <div className="right-entry">
            <h1>Category</h1>
            <select
              id="category"
              className="input"
              type="text"
              value={this.state.recipe.formValues.category}
              onChange={(evt) => this.setValue('category', evt)}>
              <option>Breakfast</option>
              <option>Main Course</option>
              <option>Dessert</option>
              <option>Side Dish</option>
              <option>Appetizer</option>
            </select>
            <h1>Difficulty:</h1>
            <select
              id="difficulty"
              className="input"
              type="text"
              value={this.state.recipe.formValues.ease}
              onChange={(evt) => this.setValue('ease', evt)}>
              <option>Easy</option>
              <option>Intermediate</option>
              <option>Difficult</option>
              <option>Time Consuming</option>
            </select>
            <h1>Tried yet:</h1>
            <input
              id="tried"
              className="input"
              type="checkbox"
              value={this.state.recipe.formValues.tried}
              onChange={(evt) => this.setValue('tried', evt)}/>
            <h1>Rating:</h1>
            <select
              id="rating"
              className="input"
              value={this.state.recipe.formValues.rating}
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
              value={this.state.recipe.formValues.ingredients}
              onChange={(evt) => this.setValue('ingredients', evt)}/>
            <h1>Directions:</h1>
            <textarea
              className="input"
              value={this.state.recipe.formValues.directions}
              onChange={(evt) => this.setValue('directions', evt)}/>
          </div>

          <div className="sub-entry">
            <h1>Notes:</h1>
            <textarea
              className="input"
              value={this.state.recipe.formValues.notes}
              onChange={(evt) => this.setValue('notes', evt)} />
          </div>

          <input className="input" type="submit" />

        </form>
      </div>
    )
  }
}

module.exports = withRouter(RecipeForm);
