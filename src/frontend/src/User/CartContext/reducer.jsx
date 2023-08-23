export const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART": {
        const existingProductIndex = state.cart.findIndex(
          (product) => product._id === action.payload._id
        );
  
        if (existingProductIndex !== -1) {
          // If product exists in cart, update its quantity
          const updatedCart = state.cart.map((product, index) =>
            index === existingProductIndex
              ? { ...product, quantity: product.quantity + action.payload.quantity }
              : product
          );
          return { ...state, cart: updatedCart };
        } else {
          // If product doesn't exist in cart, add it
          return { ...state, cart: [...state.cart, action.payload] };
        }
      }
  
      case "CLEAR_CART": {
        return { ...state, cart: [] };
      }
  
      case "DELETE_ITEM": {
        const updatedCart = state.cart.filter((item) => item._id !== action.payload);
        return { ...state, cart: updatedCart };
      }
  
      default: {
        return state;
      }
    }
  };
  