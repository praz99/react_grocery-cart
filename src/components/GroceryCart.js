/* eslint-disable react/no-array-index-key */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeFromCart } from '../reducers/actions';

const GroceryCart = ({ items, removeFromCart }) => {
  const total = () => items.reduce((total, item) => total + item.price, 0);

  if (items.length === 0) {
    return (
      <div id="grocery-cart">
        <p>Cart is empty.</p>
      </div>
    );
  }
  return (
    <div id="grocery-cart">
      <table border="1">
        <thead>
          <tr>
            <th aria-label="blank" />
            <th>Item Price</th>
            <th>Item Name</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>
                <button type="button" onClick={() => removeFromCart(index)}>
                  Remove
                </button>
              </td>
              <td>{item.price}</td>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p>
        Total: $
        {total()}
      </p>
    </div>
  );
};

GroceryCart.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  items: state.cart,
});

const mapDispatchToProps = dispatch => ({
  removeFromCart: index => {
    dispatch(removeFromCart(index));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GroceryCart);
