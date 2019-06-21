import React from 'react';

//components
import Category from './Category';

const CategoryList = ({className}) => (
  <div>
    <Category className={className} categoryName="main course" />
    <Category className={className} categoryName="breakfast" />
    <Category className={className} categoryName="dessert" />
    <Category className={className} categoryName="side dish" />
    <Category className={className} categoryName="beverage" />
    <Category className={className} categoryName="condiments" />
  </div>
)

module.exports = CategoryList;
