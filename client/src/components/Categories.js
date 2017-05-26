import React from 'react';
import { withRouter } from 'react-router-dom';
import { store, actions } from '../store/store.js';

class Categories extends React.Component {
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
  filter(category){
    const action = Object.assign({}, actions.SORT_BY_CATEGORY, {
      category: category
    });
    store.dispatch(action);
    this.props.history.push('./filtered-list');
  }
  render(){
    return(
      <div className="categories">
        <div className="category" onClick={() => this.filter("main course")}>Main Course</div>
        <div className="category" onClick={() => this.filter("breakfast")}>Breakfast</div>
        <div className="category" onClick={() => this.filter("dessert")}>Dessert</div>
        <div className="category" onClick={() => this.filter("side dish")}>Side Dish</div>
      </div>
    )
  }
}

module.exports = withRouter(Categories);
