import React, { Component } from 'react';

export default class GroceryCart extends Component {
  total() {
    return this.props.items.reduce((total, item) => {
      return total + item.price;
    }, 0)
  }
  render () {
    if (this.props.items.length === 0) {
      return <div id="grocery-cart">
        <p>Cart is empty.</p>
      </div>
    }
    return(
      <div id="grocery-cart">
        <table border="1">
          <thead>
            <tr>
              <th></th>
              <th>Item Price</th>
              <th>Item Name</th>
            </tr>
          </thead>
          <tbody>
            {this.props.items.map((item, index) => {
              return(
                <tr key={index}>
                  <td><button>Remove</button></td>
                  <td>{item.price}</td>
                  <td>{item.name}</td>
                </tr>
              )
            })}
          </tbody>
        </table>

        <p>
          Total: ${this.total()}
        </p>
      </div>
    )
  }
}
