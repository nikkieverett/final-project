import React from 'react';
import { withRouter } from 'react-router-dom';
import UserData from './../UserData.js';
import { store, actions } from './../store/store.js';

class RecipeForm extends React.Component {
  constructor(){
    super();
    this.state = store.getState();
  }
  componentDidMount(){
    this.unsub = store.subscribe(() => this.setState(store.getState()));
  }
  componentWillUnmount(){
    this.ubsub();
  }

  handleSubmit(evt){
    evt.preventDefault();
    const cb = () => {
      console.log('im the callback, done creating recipe')
    };
    // const cb = this.props.history.goBack();
    UserData.createRecipe(this.state.recipe.formValues, cb)
  }

  setValue(field, evt){
    let object = {
      key: field,
      value: evt.target.value
    };
    let action = Object.assign({}, actions.ADD_RECIPE_INPUT, { object });
    store.dispatch(action);
  }

  render(){
    return(
      <div>
        <div>I'm the recipe form</div>
        <div>I need to make a POST request and generate a recipe card Id</div>
        <form id="form" onSubmit={(evt) => this.handleSubmit(evt)}>
          <input type="text" name="title" onChange={(evt) => this.setValue('title', evt)}/>
          <input type="text" name="prepTime" onChange={(evt) => this.setValue('prepTime', evt)}/>
          <input type="text" name="cookTime" onChange={(evt) => this.setValue('cookTime', evt)}/>
          <input type="text" name="totalTime" onChange={(evt) => this.setValue('totalTime', evt)}/>
          <input type="text" name="href" onChange={(evt) => this.setValue('href', evt)}/>
          <input type="text" name="category" onChange={(evt) => this.setValue('category', evt)}/>
          <input type="text" name="img" onChange={(evt) => this.setValue('img', evt)}/>
          <input type="text" name="ease" onChange={(evt) => this.setValue('ease', evt)}/>
          <input type="text" name="rating" onChange={(evt) => this.setValue('rating', evt)}/>
          <input type="text" name="ingredients" onChange={(evt) => this.setValue('ingredients', evt)}/>
          <input type="text" name="directions" onChange={(evt) => this.setValue('directions', evt)}/>
          <input type="text" name="notes" onChange={(evt) => this.setValue('notes', evt)}/>
          <input type="text" name="servings" onChange={(evt) => this.setValue('servings', evt)}/>
          <input type="text" name="tried" onChange={(evt) => this.setValue('tried', evt)}/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

module.exports = withRouter(RecipeForm);
