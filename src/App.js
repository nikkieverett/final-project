import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RecipeApiCalls from './utils/RecipeApiCalls';

// import Home from './components/Home.js';
import PageLogin from './components/PageLogin';
import RecipeList from './components/PageRecipeListView';
import EditRecipePage from './components/PageEditRecipe';
import AddRecipePage from './components/PageAddRecipe';
import PageRecipeCardView from './components/PageRecipeCardView';

class App extends React.Component {
  componentDidMount(){
    RecipeApiCalls.loadRecipes();
  }
  render(){
    return(
      <Router>
        <div>
          <Route path="/PageLogin" component={PageLogin}/>
          <Route exact path="/" component={RecipeList}/>
          <Route path="/create-new" component={AddRecipePage}/>
          <Route path="/edit/:recipeId" component={EditRecipePage}/>
          <Route path="/:recipeId" component={PageRecipeCardView}/>
        </div>
      </Router>
    )
  }
}

module.exports = App;
