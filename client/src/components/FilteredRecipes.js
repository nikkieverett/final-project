import React from 'react';
import { Link, withRouter } from 'react-router-dom';
//store
import { store } from './../store/store.js';
//components
import NavMenu from './NavMenu.js';
import ListCreator from './ListCreator.js';
import SearchBar from './SearchBar.js';

class FilteredRecipes extends React.Component {
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
  render(){
    return(
      <div className="list-container">
        <div className="page-header">
          <div className="page-title">{this.state.query.category}</div>
          <SearchBar className="list-search"/>
          <div className="add"><Link to="/create-new">+<span>add new</span></Link></div>
        </div>

        <NavMenu />
        <div className="recipes">
          <ListCreator recipes={this.state.query.filteredRecipes}/>
        </div>
      </div>
    )
  }
}

module.exports = withRouter(FilteredRecipes);
