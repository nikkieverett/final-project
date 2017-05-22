import React from 'react';
import { store } from './../store/store.js';


class RecipeCard extends React.Component {
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
  render(){
    console.log('im the props for this component', this.props);
    return(
      <div>
        <div>I'm the recipe card</div>
        <div>I need to make a GET request using the recipe card Id</div>
      </div>
    )
  }
}

module.exports = RecipeCard;
