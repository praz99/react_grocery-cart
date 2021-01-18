import React from 'react';
import GroceryItems from './GroceryItems'
import GroceryCart from './GroceryCart';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cart: []
    }

    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(item) {
    console.log('item:', item)
    const cart = [...this.state.cart, item]
    this.setState({cart});
  }

  render() {
    return (
      <div id="app-container">
          <h1>Grocery Cart</h1>
          <div id="grocery-container">
          <GroceryItems addToCart={this.addToCart}/>
          <GroceryCart items={this.state.cart} />
        </div>
      </div>
    )
  }
}

