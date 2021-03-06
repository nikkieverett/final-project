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
    store.dispatch(actions.SHOW_HIDE_DROPDOWN);
    store.dispatch(actions.SORT_BY_ALPHA);
    this.props.history.push('/recipes');
  }
  render(){
    return(
      <div className="categories">
        <div className={this.props.className} onClick={() => this.filter("main course")}>Main Course</div>
        <div className={this.props.className} onClick={() => this.filter("breakfast")}>Breakfast</div>
        <div className={this.props.className} onClick={() => this.filter("dessert")}>Dessert</div>
        <div className={this.props.className} onClick={() => this.filter("side dish")}>Side Dish</div>
      </div>
    )
  }
}

module.exports = withRouter(Categories);
