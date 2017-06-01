import React from 'react';
import { store, actions } from './../store/store.js';
import { Link, withRouter } from 'react-router-dom';
//components
import NavMenu from './NavMenu.js';
import ListCreator from './ListCreator.js';
import SearchBar from './SearchBar.js';

class RecipeList extends React.Component {
  constructor(){
    super();
    this.state = store.getState();
  }
  componentDidMount(){
    this.unsub = store.subscribe(() => this.setState(store.getState()));
    store.dispatch(actions.SORT_BY_ALPHA);
  }
  componentWillUnmount(){
    this.unsub();
  }
  render(){
    let recipesToLoad = [];
    if(this.state.query.filteredRecipes.length <= 0){
      recipesToLoad = this.state.query.allRecipes;
    } else {
      recipesToLoad = this.state.query.filteredRecipes;
    }
    return(
      <div className="list-container">
        <div className="page-header">
          <SearchBar className="list-search"/>
          <div className="categoryName">{this.state.query.category}</div>
          <div className="add"><Link to="/create-new">+<span> add new</span></Link></div>
        </div>
        <NavMenu />
        <div className="recipes">
          <ListCreator recipes={recipesToLoad}/>
        </div>
      </div>
    )
  }
}

module.exports = withRouter(RecipeList);
