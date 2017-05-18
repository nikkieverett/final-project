import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SearchBar from  './components/SearchBar.js';
import Categories from './components/Categories.js';
import RecipeSearch from './components/RecipeSearch.js';
import RecipeForm from './components/RecipeForm.js';
import RecipeCard from './components/RecipeCard.js';

class App extends React.Component {
  render(){
    return(
      <Router>
        <div className="App">
          <Route path="/" render={(props) => <SearchBar history={props.history}/>}/>
          <div className="main-content">
            <Route path="/" exact render={(props) => <Categories history={props.history}/>}/>
            <Route path="/recipe-search" render={(props) => <RecipeSearch history={props.history}/>}/>
            <Route path="/create-new" render={(props) => <RecipeForm history={props.history}/>}/>
            <Route path="/recipes/:recipeId" render={(props) => <RecipeCard history={props.history} recipeId={props.match.params.recipeId}/>}/>
          </div>
          <footer>
            This is a footer
          </footer>
        </div>
      </Router>
    )
  }
}

module.exports = App;
