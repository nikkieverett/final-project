import React from 'react';
import Categories from './Categories.js';
import SearchBar from './SearchBar.js';
import { withRouter } from 'react-router-dom';
import { store } from './../store/store.js';


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
      <div>
        <div>What would you like to make?</div>
        <SearchBar />
        <Categories history={this.props.history} />
      </div>
    )
  }
}

module.exports = withRouter(Home);
