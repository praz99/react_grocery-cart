const GROCERY_ITEMS = [
  { name: "Sliced bacon", price: 5.79 },
  { name: "Pasta", price: 1.28 },
  { name: "Dried beans", price: 1.36 },
  { name: "Ground beef", price: 4.12 },
  { name: "All-purpose flour", price: 0.52 },
  { name: "Creamy peanut butter", price: 2.56 },
  { name: "Top round steak", price: 5.78 },
  { name: "Potatoes", price: 0.72 },
  { name: "Frozen turkey", price: 1.59 },
  { name: "Sirloin steak", price: 8.07 },
  { name: "White rice", price: 0.72 },
  { name: "Chocolate chip cookies", price: 3.47 },
  { name: "Seedless grapes", price: 2.67 },
  { name: "Sugar", price: 0.65 },
  { name: "Ice cream", price: 4.70 },
]

const cartReducer = (state, action) => {
  console.log(action);
  if (state === undefined) {
    return {
      forSale: GROCERY_ITEMS,
      cart: [],
    }
  }
  switch(action.type) {
    case 'ADD_TO_CART': {
      const cart = [...state.cart, action.item]
      return {
        ...state, cart
      }
    }

    case 'REMOVE_FROM_CART': {
      const cart = [...state.cart];
      cart.splice(action.index, 1)
      return {
        ...state, cart
      }
    }

    default:
      return state;
  }
}

export default cartReducer;