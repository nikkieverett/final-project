import React from 'react';
import { store } from '../store/store';
import { withRouter } from 'react-router-dom';

// components
import SideBarNav from './partials/SideBarNav';
import ListCreator from './partials/RecipesList';
import Header from './partials/Header';

class RecipeList extends React.Component {
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

  loadRecipes() {
    let filteredRecipes = this.state.query.filteredRecipes;
    let allRecipes = this.state.query.allRecipes;

    if (filteredRecipes.length) {
      return filteredRecipes;
    } else {
      return allRecipes;
    }
  }

  render(){
    return(
      <div className="container">
        <div className="row">
          <SideBarNav />

          <div className="col-xs-12 col-sm-9 main-content">
            <Header />
            <ListCreator recipes={this.loadRecipes()} />
          </div>
        </div>
      </div>
    )
  }
}

module.exports = withRouter(RecipeList);
