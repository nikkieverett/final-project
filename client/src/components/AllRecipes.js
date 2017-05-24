import React from 'react';
import UserData from './../UserData.js';
import { store, actions } from './../store/store.js';
import { withRouter } from 'react-router-dom';
import NavMenu from './NavMenu.js';
import ListCreator from './ListCreator.js';

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
        <NavMenu />
        <div className="recipes">
          <ListCreator recipes={this.state.query.allRecipes}/>
        </div>
      </div>
    )
  }
}

module.exports = withRouter(AllRecipes);
