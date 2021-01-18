import React from 'react';
import GroceryItems from './GroceryItems'
import GroceryCart from './GroceryCart';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cart: []
    }
  }

  render() {
    return (
      <div id="app-container">
        <p>Welcome to my App</p>
        <div id="grocery-container">
          <GroceryItems />
          <GroceryCart items={this.state.cart} />
        </div>
      </div>
    )
  }
}

