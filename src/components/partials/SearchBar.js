import React from 'react';
import { store, actions } from '../../store/store.js';
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component {
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
  handleChange(evt){
    const action = Object.assign({}, actions.QUERY_INPUT, { queryInput: evt.target.value });
    store.dispatch(action);
  }
  handleKeyUp(evt){
    if(evt.keyCode === 13){
      evt.target.value = ''
      store.dispatch(actions.FILTER_RECIPES);
      store.dispatch(actions.UPDATE_BREADCRUMBS);

      this.props.history.push('/')
    }
  }
  render(){
    return(
      <input
        placeholder="search"
        onKeyUp={(evt) => this.handleKeyUp(evt)}
        onChange={(evt) => this.handleChange(evt)}
      />
    )
  }
}

module.exports = withRouter(SearchBar);
