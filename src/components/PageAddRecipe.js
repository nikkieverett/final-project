import React from 'react';
import { withRouter } from 'react-router-dom';

// components
import SideBarNav from './partials/SideBarNav';
import RecipeForm from './partials/RecipeForm';

const PageAddRecipe = ({}) => (
  <div>
    <SideBarNav />
    <RecipeForm />
  </div>
)
// <RecipeForm {...this.state.recipe.formValues} onSave={(data) => this.handleSaveClick(data)} />

module.exports = withRouter(PageAddRecipe);
