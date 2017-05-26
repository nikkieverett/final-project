import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserData from './UserData.js';

import Home from './components/Home.js';
import AllRecipes from './components/AllRecipes.js';
import FilteredRecipes from './components/FilteredRecipes.js';
import RecipeForm from './components/RecipeForm.js';
import RecipeCard from './components/RecipeCard.js';

class App extends React.Component {
  componentDidMount(){
    UserData.loadRecipes();
  
  }
  render(){
    return(
      <Router>
        <div className="main-content">
          <Route exact path="/" component={Home}/>
          <Route path="/all-recipes" component={AllRecipes}/>
          <Route path="/filtered-list" component={FilteredRecipes}/>
          <Route path="/create-new" component={RecipeForm}/>
          <Route path="/recipes/:recipeId" component={RecipeCard}/>
        </div>
      </Router>
    )
  }
}

module.exports = App;
