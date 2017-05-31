import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { store, actions } from '../store/store.js';

class NavMenu extends React.Component {
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
  viewAll(){
    store.dispatch(actions.REMOVE_FILTERED_RECIPES)
  }
  filter(category){
    const action = Object.assign({}, actions.SORT_BY_CATEGORY, {
      category: category
    });
    store.dispatch(action);
    this.props.history.push('./all-recipes');
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
          <li className="link" onClick={() => this.viewAll()}>View All Recipes</li>
          <li className="link" onClick={() => this.dropDownCategories()}>Categories</li>
          <ul className={showHide}>
            <li className="sub-cat" onClick={() => this.filter("main course")}>Main Course</li>
            <li className="sub-cat" onClick={() => this.filter("breakfast")}>Breakfast</li>
            <li className="sub-cat" onClick={() => this.filter("dessert")}>Dessert</li>
            <li className="sub-cat" onClick={() => this.filter("side dish")}>Side Dish</li>
          </ul>
        </ul>
      </div>
    )
  }
}

module.exports = withRouter(NavMenu);
