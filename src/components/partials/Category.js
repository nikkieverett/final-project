import React from 'react';
import { withRouter } from 'react-router-dom';
import { store, actions } from '../../store/store.js';

class Category extends React.Component {
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
  filterByCategory(category){
    const sortByCategory = Object.assign({}, actions.SORT_BY_CATEGORY, { category: category });

    store.dispatch(sortByCategory);
    store.dispatch(actions.SHOW_HIDE_DROPDOWN);
    store.dispatch(actions.UPDATE_BREADCRUMBS);
    store.dispatch(actions.SORT_BY_ALPHA);

    this.props.history.push('/');
  }
  render(){
    return(
      <div onClick={() => this.filterByCategory(this.props.categoryName)}>{this.props.categoryName}</div>
    )
  }
}

module.exports = withRouter(Category);
