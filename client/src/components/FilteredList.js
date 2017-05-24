import React from 'react';
import UserData from './../UserData.js';
import { withRouter } from 'react-router-dom';
import { store } from './../store/store.js';
import NavMenu from './NavMenu.js';
import SearchBar from './SearchBar';

class FilteredList extends React.Component {
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
  handleDelete(id){
    const cb = () => {
      this.props.history.goBack();
      // add succesfully deleted message page?
      // this.getRecipes();
    }
    UserData.deleteRecipe(id, cb);
  }

  render(){
    let recipes = this.state.query.filteredRecipes.map((recipe) =>
    {
      return(
        <div className="list-items" key={recipe._id}>
          <h1>{recipe.title}</h1>
          <h2>{recipe.category}: {recipe.ease}</h2>
          <div className="buttons">
            <div onClick={() => this.handleDelete()}
              className="delete"></div>
            <div onClick={() => this.handleEdit()}
              className="edit"></div>
            <div onClick={(evt) => this.handleFave(evt)}
              className="not-favorite"></div>
          </div>
        </div>
      )
    })
    return(
      <div className="list-container">
        <NavMenu />
        <div className="recipes">
          {recipes}
        </div>
      </div>
    )
  }
}

module.exports = withRouter(FilteredList);
