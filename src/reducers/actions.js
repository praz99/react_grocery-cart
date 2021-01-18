export const UNDO = 'UNDO';
export const REDO = 'REDO';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const undo = () => ({ type: UNDO });

export const redo = () => ({ type: REDO });

export const addToCart = item => (
  {
    type: ADD_TO_CART,
    item,
  }
);

export const removeFromCart = index => (
  {
    type: REMOVE_FROM_CART,
    index,
  }
);
