/* eslint-disable react/no-array-index-key */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addToCart } from '../reducers/actions';

const GroceryItems = ({ items, addToCart }) => (
  <div id="grocery-items">
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
              <button type="button" onClick={() => addToCart(item)}>
                Add
              </button>
            </td>
            <td>{item.price}</td>
            <td>{item.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

GroceryItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  addToCart: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  items: state.forSale,
});

const mapDispatchToProps = dispatch => ({
  addToCart: item => {
    dispatch(addToCart(item));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GroceryItems);
