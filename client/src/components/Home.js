import React from 'react';
import { withRouter } from 'react-router-dom';
import { store } from './../store/store.js';

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
  }
  componentWillUnmount(){
    this.unsub();
  }
  render(){
    return(
      <div className="home-container">
        <div className="main-header">What would you like to make?</div>
        <SearchBar className="home-search"/>
        <Categories className="home-categories"/>
      </div>
    )
  }
}

module.exports = withRouter(Home);
