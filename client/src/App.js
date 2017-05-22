import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SearchBar from  './components/SearchBar.js';
import Home from './components/Home.js';
import RecipeList from './components/RecipeList.js';
import RecipeForm from './components/RecipeForm.js';
import RecipeCard from './components/RecipeCard.js';
import FilteredList from './components/FilteredList.js';

class App extends React.Component {
  render(){
    return(
      <Router>
        <div className="main-content">
          <Route exact path="/" render={(props) => <Home history={props.history}/>}/>
          <Route exact path="/all-recipes" render={(props) => <RecipeList history={props.history}/>}/>
          <Route exact path="/filtered-list" render={(props) => <FilteredList />}/>
          <Route exact path="/create-new" render={(props) => <RecipeForm history={props.history}/>}/>
          <Route exact path="/recipes/:recipeId" render={(props) => <RecipeCard history={props.history} recipeId={props.match.params.recipeId}/>}/>
        </div>
      </Router>
    )
  }
}

module.exports = App;
