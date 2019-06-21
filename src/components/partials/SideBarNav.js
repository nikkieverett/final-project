import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { store, actions } from '../../store/store';

// components
import SearchBar from './SearchBar';

class SideBarNav extends React.Component {
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

  viewAllRecipess(){
    store.dispatch(actions.REMOVE_FILTERED_RECIPES);
    store.dispatch(actions.UPDATE_BREADCRUMBS);
    store.dispatch(actions.SORT_BY_ALPHA);

    this.props.history.push('/');
  }

  triggerCategoryDropDowns(e, categoryName){
    let formattedCategoryName;

    // Format category names that contain a space
    if (categoryName.indexOf(' ') > -1) {
      let part1 = categoryName.slice(0, categoryName.indexOf(' '));
      let part2 = categoryName.slice(categoryName.indexOf(' ') + 1);
      let capitalizedPart2 = part2[0].toUpperCase() + part2.slice(1);

      formattedCategoryName = part1 + capitalizedPart2;
    } else {
      formattedCategoryName = categoryName;
    }

    // Only fire when clicking on the category name
    if (e.target.className === 'list-item__title') {
      const showHideSubcategory = Object.assign({}, actions.SHOW_HIDE_DROPDOWN, { formattedCategoryName });

      this.filter(categoryName);
      store.dispatch(showHideSubcategory);
    }
  }

  filter(categoryName) {
    const filaterByCategory = Object.assign({}, actions.SORT_BY_CATEGORY, { category: categoryName });

    store.dispatch(filaterByCategory);
    store.dispatch(actions.UPDATE_BREADCRUMBS);
    store.dispatch(actions.SORT_BY_ALPHA);

    this.props.history.push('/');
  }

  filterSubCategory(subcategoryName, categoryName) {
    if(this.state.subcategory !== '') {
      store.dispatch(actions.REMOVE_FILTERED_RECIPES);
      this.filter(categoryName);
    }

    const filterBySubCategory = Object.assign({}, actions.SORT_BY_SUBCATEGORY, { subcategory: subcategoryName, category: categoryName });

    store.dispatch(filterBySubCategory);
    store.dispatch(actions.UPDATE_BREADCRUMBS);
    store.dispatch(actions.SORT_BY_ALPHA);
  }

  render(){
    return(
      <div className="col-sm-3 hidden-xs sidebar-nav">
        <div className="sidebar-nav__section">
          <div className="sidebar-nav__user">
            <div className="user">
              <div className="user__avatar"></div>
              <div className="user__name">User Name's Recipes</div>
            </div>
          </div>
        </div>
        <div className="sidebar-nav__section">
          <div className="sidebar-nav__search">
              <SearchBar />
            </div>
        </div>
        <div className="sidebar-nav__section">
          <div className="sidebar-nav__list">
            <div className="sidebar-nav__list-item" onClick={(e) => this.triggerCategoryDropDowns(e, 'main course')}>
              <div className="list-item__title">Main Course</div>
              <div className={this.state.style.mainCourse}>
                <div className="subcat__item" onClick={() => this.filterSubCategory("casserole", "main course")}>All in one casserole</div>
                <div className="subcat__item" onClick={() => this.filterSubCategory("crockpot", "main course")}>Crockpot</div>
                <div className="subcat__item" onClick={() => this.filterSubCategory("salad", "main course")}>Salad</div>
                <div className="subcat__item" onClick={() => this.filterSubCategory("sandwhich", "main course")}>Sandwhich</div>
                <div className="subcat__item" onClick={() => this.filterSubCategory("soup stew", "main course")}>Soup / Stew</div>
              </div>
            </div>
            <div className="sidebar-nav__list-item" onClick={(e) => this.triggerCategoryDropDowns(e, 'side dish')}>
              <div className="list-item__title">Side Dish</div>
              <div className={this.state.style.sideDish}>
                <div className="subcat__item" onClick={() => this.filterSubCategory("beans", "side dish")}>Beans</div>
                <div className="subcat__item" onClick={() => this.filterSubCategory("pasta", "side dish")}>Pasta</div>
                <div className="subcat__item" onClick={() => this.filterSubCategory("potato", "side dish")}>Potato</div>
                <div className="subcat__item" onClick={() => this.filterSubCategory("rice", "side dish")}>Rice</div>
                <div className="subcat__item" onClick={() => this.filterSubCategory("salad", "side dish")}>Salad</div>
                <div className="subcat__item" onClick={() => this.filterSubCategory("vegetable", "side dish")}>Vegetable</div>
                <div className="subcat__item" onClick={() => this.filterSubCategory("fruit", "side dish")}>Fruit</div>
              </div>
            </div>
            <div className="sidebar-nav__list-item" onClick={(e) => this.triggerCategoryDropDowns(e, 'dessert')}>
              <div className="list-item__title">Dessert</div>
              <div className={this.state.style.dessert}>
                <div className="subcat__item" onClick={() => this.filterSubCategory("bread", "dessert")}>Bread</div>
                <div className="subcat__item" onClick={() => this.filterSubCategory("cake", "dessert")}>Cake</div>
                <div className="subcat__item" onClick={() => this.filterSubCategory("cookie", "dessert")}>Cookie</div>
                <div className="subcat__item" onClick={() => this.filterSubCategory("candy", "dessert")}>Candy</div>
                <div className="subcat__item" onClick={() => this.filterSubCategory("cheesecake", "dessert")}>Cheesecake</div>
                <div className="subcat__item" onClick={() => this.filterSubCategory("pie", "dessert")}>Pie</div>
                <div className="subcat__item" onClick={() => this.filterSubCategory("pudding", "dessert")}>Pudding</div>
                <div className="subcat__item" onClick={() => this.filterSubCategory("ice cream", "dessert")}>Ice cream</div>
                <div className="subcat__item" onClick={() => this.filterSubCategory("misc", "dessert")}>Miscellaneous</div>
              </div>
            </div>
            <div className="sidebar-nav__list-item" onClick={(e) => this.triggerCategoryDropDowns(e, 'breakfast')}>
              <div className="list-item__title">Breakfast</div>
              <div className={this.state.style.breakfast}>
                <div className="subcat__item" onClick={() => this.filterSubCategory("bread", "breakfast")}>Bread</div>
                <div className="subcat__item" onClick={() => this.filterSubCategory("egg", "breakfast")}>Egg</div>
                <div className="subcat__item" onClick={() => this.filterSubCategory("pancake", "breakfast")}>Pancake</div>
                <div className="subcat__item" onClick={() => this.filterSubCategory("waffle", "breakfast")}>Waffle</div>
              </div>
            </div>
            <div className="sidebar-nav__list-item" onClick={(e) => this.triggerCategoryDropDowns(e, 'appetizer')}>
              <div className="list-item__title">Appetizer</div>
              <div className={this.state.style.appetizer}>
                <div className="subcat__item" onClick={() => this.filterSubCategory("bread", "appetizer")}>Bread</div>
                <div className="subcat__item" onClick={() => this.filterSubCategory("cheese", "appetizer")}>Cheese</div>
                <div className="subcat__item" onClick={() => this.filterSubCategory("dip", "appetizer")}>Dip</div>
                <div className="subcat__item" onClick={() => this.filterSubCategory("meat", "appetizer")}>Meat</div>
                <div className="subcat__item" onClick={() => this.filterSubCategory("nuts", "appetizer")}>Nuts</div>
                <div className="subcat__item" onClick={() => this.filterSubCategory("popcorn", "appetizer")}>Popcorn</div>
                <div className="subcat__item" onClick={() => this.filterSubCategory("sand", "appetizer")}>Sandwhich</div>
                <div className="subcat__item" onClick={() => this.filterSubCategory("vegetable", "appetizer")}>Vegetable</div>
              </div>
            </div>
            <div className="sidebar-nav__list-item" onClick={() => this.filter("beverage")}>Beverage</div>
            <div className="sidebar-nav__list-item" onClick={() => this.filter("condiments")}>Condiments</div>
            <div className="sidebar-nav__list-item" onClick={() => this.viewAllRecipess()}>View All</div>
          </div>
        </div>
        <div className="sidebar-nav__section">
          <div className="sidebar-nav__add">
            <Link to="/create-new">Add new recipe</Link>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = withRouter(SideBarNav);
