import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home.js';
import RecipeList from './components/RecipeList.js';
import FilteredList from './components/FilteredList.js';
import RecipeForm from './components/RecipeForm.js';
import RecipeCard from './components/RecipeCard.js';

class App extends React.Component {
  render(){
    return(
      <Router>
        <div className="main-content">
          <Route exact path="/" component={Home}/>
          <Route exact path="/all-recipes" component={RecipeList}/>
          <Route exact path="/filtered-list" component={FilteredList}/>
          <Route exact path="/create-new" component={RecipeForm}/>
          <Route exact path="/recipes/:recipeId" render={(props) => <RecipeCard history={props.history} recipeId={props.match.params.recipeId}/>}/>
        </div>
      </Router>
    )
  }
}

module.exports = App;
