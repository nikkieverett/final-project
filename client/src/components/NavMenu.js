import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { store, actions } from '../store/store.js';
import UserData from './../UserData.js';
import SearchBar from './SearchBar.js';


class NavMenu extends React.Component {
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
  filter(category){
    const action = Object.assign({}, actions.SORT_BY_CATEGORY, {
      category: category
    });
    store.dispatch(action);
    this.props.history.push('./filtered-list');
  }
  dropDownCategories(){
    store.dispatch(actions.SHOW_HIDE_DROPDOWN);
  }
  render(){
    let showHide = this.state.style.catDropDownVisible ? "sub-menu-visible" : "sub-menu-hide";
    return(
      <div >
        <ul className="nav-menu">
          <li className="link"><Link to="/">Home</Link></li>
          <li className="link"><Link to="/all-recipes">View All Recipes</Link></li>
          <li className="link" onClick={() => this.dropDownCategories()}>Categories
            <ul className={showHide}>
              <li className="sub-cat" onClick={() => this.filter("main course")}>Main Course</li>
              <li className="sub-cat" onClick={() => this.filter("breakfast")}>Breakfast</li>
              <li className="sub-cat" onClick={() => this.filter("dessert")}>Dessert</li>
              <li className="sub-cat" onClick={() => this.filter("side dish")}>Side Dish</li>
            </ul>
          </li>
          <SearchBar className="nav-search" />
          
          <li className="add"><Link to="/create-new">+<span>add new</span></Link></li>

        </ul>
      </div>
    )
  }
}

module.exports = withRouter(NavMenu);
