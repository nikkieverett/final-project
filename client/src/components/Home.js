import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { store, actions } from './../store/store.js';
import UserData from '../UserData.js';
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
  viewAll(){
    store.dispatch(actions.REMOVE_FILTERED_RECIPES)
    store.dispatch(actions.SORT_BY_ALPHA);
    this.props.history.push('/recipes');
  }
  render(){
    return(
      <div className="home-container">
        <div className="add-button"><Link to="/create-new">+<span>add new</span></Link></div>
        <div className="view-all" onClick={() => this.viewAll()}>all <span>recipes</span></div>
        <div className="main-header">What would you like to make?</div>
        <SearchBar className="home-search"/>
        <Categories className="category"/>
      </div>
    )
  }
}

module.exports = withRouter(Home);
