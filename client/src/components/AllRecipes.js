import React from 'react';
import UserData from './../UserData.js';
import { store, actions } from './../store/store.js';
import { Link, withRouter } from 'react-router-dom';
//components
import NavMenu from './NavMenu.js';
import ListCreator from './ListCreator.js';
import SearchBar from './SearchBar.js';

class AllRecipes extends React.Component {
  constructor(){
    super();
    this.state = store.getState();
  }
  componentDidMount(){
    this.unsub = store.subscribe(() => this.setState(store.getState()));
    UserData.loadRecipes();
  }
  componentWillUnmount(){
    this.unsub();
  }
  render(){
    return(
      <div className="list-container">
        <div className="page-header">
          <div className="page-title">all recipes</div>
          <SearchBar className="list-search"/>
          <div className="add"><Link to="/create-new">+<span>add new</span></Link></div>
        </div>
        <NavMenu />
        <div className="recipes">
          <ListCreator recipes={this.state.query.allRecipes}/>
        </div>
      </div>
    )
  }
}

module.exports = withRouter(AllRecipes);
