import React from 'react';
import { withRouter } from 'react-router-dom';
import { store } from '../store/store';

//utils
import RecipeApiCalls from '../utils/RecipeApiCalls';

// components
import SideBarNav from './partials/SideBarNav';
import Header from './partials/Header';
import RecipeCard from './partials/RecipeCard';

class PageRecipeCardView extends React.Component {
  constructor() {
    super();
    this.state = store.getState();
  }
  componentDidMount() {
    this.unsub = store.subscribe(() => this.setState(store.getState()));
    let id = this.props.match.params.recipeId;
    RecipeApiCalls.viewRecipe(id);
  }
  componentWillUnmount() {
    this.unsub();
  }
  populateRecipeData() {

  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <SideBarNav />
          <div className="col-12 col-sm-9 main-content">
            <Header />
            <RecipeCard recipe={this.state.recipe.currentRecipe} />
          </div>
        </div>
      </div>
    )
  }
}

module.exports = withRouter(PageRecipeCardView);
