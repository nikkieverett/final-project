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
    store.dispatch(actions.REMOVE_FILTERED_RECIPES)
    this.props.history.push('/recipes');
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
            <Categories className="sub-cat" />
          </ul>
        </ul>
      </div>
    )
  }
}

module.exports = withRouter(NavMenu);
