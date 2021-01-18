import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../reducers/actions';

class GroceryCart extends Component {
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
                  <td>
                    <button onClick={() => this.props.removeFromCart(index)}>
                      Remove
                    </button>
                  </td>
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

function mapStateToProps(state) {
  return {
    items: state.cart,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    removeFromCart: (index) => {
      dispatch(removeFromCart(index));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(GroceryCart);
