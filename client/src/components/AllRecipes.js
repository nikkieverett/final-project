import React from 'react';
import { store } from './../store/store.js';
import { Link, withRouter } from 'react-router-dom';
//components
import NavMenu from './NavMenu.js';
import ListCreator from './ListCreator.js';
import SearchBar from './SearchBar.js';
// import UserData from '../UserData.js';

class AllRecipes extends React.Component {
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
    console.log('rendering');
    let recipesToLoad = [];
    if(this.state.query.filteredRecipes === []){
      recipesToLoad = this.state.query.allRecipes;
      console.log('loading all recipes', this.state.query)
    } else {
      recipesToLoad = this.state.query.filteredRecipes;
      console.log('loading filtered recipes', this.state.query)
    }
    return(
      <div className="list-container">
        <div className="page-header">
          <SearchBar className="list-search"/>
          <div className="add"><Link to="/create-new">+<span>add new</span></Link></div>
        </div>
        <NavMenu />
        <div className="recipes">
          <ListCreator recipes={recipesToLoad}/>
        </div>
      </div>
    )
  }
}

module.exports = withRouter(AllRecipes);
