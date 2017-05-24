import React from 'react';
import { withRouter } from 'react-router-dom';
//store
import { store } from './../store/store.js';
//components
import NavMenu from './NavMenu.js';
import ListCreator from './ListCreator.js'

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
        <NavMenu />
        <div className="recipes">
          <ListCreator recipes={this.state.query.filteredRecipes}/>
        </div>
      </div>
    )
  }
}

module.exports = withRouter(FilteredRecipes);
