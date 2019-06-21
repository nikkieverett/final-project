import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { store, actions } from '../store/store.js';

// utils
import RecipeApiCalls from '../utils/RecipeApiCalls';

// components
import CategoryList from './partials/CategoryList';
import SearchBar from './partials/SearchBar';

class Home extends React.Component {
  constructor(){
    super();
    this.state = store.getState();
  }
  componentDidMount(){
    this.unsub = store.subscribe(() => this.setState(store.getState()));
    RecipeApiCalls.loadRecipes();
  }
  componentWillUnmount(){
    this.unsub();
  }
  viewAllRecipes(){
    store.dispatch(actions.REMOVE_FILTERED_RECIPES)
    store.dispatch(actions.UPDATE_BREADCRUMBS)
    store.dispatch(actions.SORT_BY_ALPHA);

    this.props.history.push('/');
  }
  render(){
    return(
      <div>
        <div className="container">
          <div className="header">
            <div className="row">
              <div className="col">
                <div className="header__user-avatar"></div>
              </div>
              <div className="col">
                <div className="header__add-btn"><Link to="/create-new">+<span>add new</span></Link></div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-header">What would you like to make?</div>
        <SearchBar className="home-search"/>
        <CategoryList className="category"/>
        <div className="view-all" onClick={() => this.viewAllRecipes()}>all recipes</div>
      </div>
    )
  }
}

module.exports = withRouter(Home);
