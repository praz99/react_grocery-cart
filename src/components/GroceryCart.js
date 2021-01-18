import React, { Component } from 'react';

export default class GroceryCart extends Component {
  render () {
    if (this.props.items) {
      return <div id="grocery-cart">
        <p>Cart is empty.</p>
      </div>
    }
    return(
      <div id="grocery-cart">
        <table border="1">
          <thead>
            <th></th>
            <th>Item Price</th>
            <th>Item Name</th>
          </thead>
          <tbody>
            {this.props.items.map((item, index) => {
              return(
                <tr id={index}>
                  <td><button>Add to Cart</button></td>
                  <td>{item.price}</td>
                  <td>{item.name}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}
