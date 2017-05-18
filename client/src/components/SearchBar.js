import React from 'react';
import UserData from '../UserData.js';
import { store, actions } from '../store/store.js';

class SearchBar extends React.Component {
  constructor(){
    super();
    this.state = store.getState();
  }
  componentDidMount(){
    store.subscribe(() => this.setState(store.getState()));
  }
  handleClick(){
    this.props.history.push('/recipe-search');
  }
  handleKeyUp(evt){
    if(evt.keyCode === 13){
      const action = Object.assign({}, actions.QUERY_INPUT, { queryInput: evt.target.value })
      store.dispatch(action);
      this.props.history.push('/recipe-search');
      evt.target.value = '';
    }
  }
  render(){
    return(
      <div className="nav">
        <div>Logo</div>
        <div onClick={() => this.handleClick()}>See all recipes</div>
        <input
          onKeyUp={(evt) => this.handleKeyUp(evt)}
          placeholder="Search..."/>
      </div>
    )
  }
}

module.exports = SearchBar;
