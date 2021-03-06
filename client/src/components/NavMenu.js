import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { store, actions } from '../store/store.js';
import Categories from './Categories.js';

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
    store.dispatch(actions.REMOVE_FILTERED_RECIPES);
    store.dispatch(actions.SORT_BY_ALPHA);
    this.props.history.push('/recipes');
  }
  dropDownCategories(){
    store.dispatch(actions.SHOW_HIDE_DROPDOWN);
  }
  render(){
    let showHide = this.state.style.catDropDownVisible ? "sub-menu-visible" : "sub-menu-hide";
    return(
      <ul className="nav-menu">
        <li className="link" id="home"><Link to="/">Home</Link></li>
        <li className="link" id="view-all" onClick={() => this.viewAll()}>View All</li>
        <li className="link" onClick={() => this.dropDownCategories()}>Categories</li>
        <ul className={showHide}>
          <Categories className="sub-cat" />
        </ul>
      </ul>
    )
  }
}

module.exports = withRouter(NavMenu);
