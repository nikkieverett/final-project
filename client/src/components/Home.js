import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { store } from './../store/store.js';
import UserData from '../UserData.js';


//components
import Categories from './Categories.js';
import SearchBar from './SearchBar.js';

class Home extends React.Component {
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
      <div className="home-container">
        <div className="add-button"><Link to="/create-new">+<span>add new</span></Link></div>
        <div className="view-all"><Link to="/all-recipes">all <span>recipes</span></Link></div>
        <div className="main-header">What would you like to make?</div>
        <SearchBar className="home-search"/>
        <Categories className="home-categories"/>
      </div>
    )
  }
}

module.exports = withRouter(Home);
