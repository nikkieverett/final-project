import React from 'react';
import { store, actions } from '../store/store.js';
import UserData from './../UserData.js';
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component {
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
  handleChange(evt){
    const action = Object.assign({}, actions.QUERY_INPUT, { queryInput: evt.target.value });
    store.dispatch(action);
  }
  handleKeyUp(evt){
    if(evt.keyCode === 13){
      evt.target.value = ''
      store.dispatch(actions.FILTER_RECIPES);
      this.props.history.push('./filtered-list')
    }
  }
  render(){
    return(
      <div className={this.props.className}>
        <input
          placeholder="Search..."
          onKeyUp={(evt) => this.handleKeyUp(evt)}
          onChange={(evt) => this.handleChange(evt)}
        />
      </div>
    )
  }
}

module.exports = withRouter(SearchBar);
