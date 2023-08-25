import React, { useContext } from "react";
import { CartContext } from "../CartContext/context";
import { GlobalContext } from "../../Context/context";
import { decodeToken } from "react-jwt";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Link } from "react-router-dom";
import "../styles/Cart.css";

export default function Cart() {
  const { cart_state, cart_dispatch } = useContext(CartContext);
  const { state, dispatch } = useContext(GlobalContext);
  const user = decodeToken(state.token);

  const deleteItem = (itemId) => {
    cart_dispatch({ type: "DELETE_ITEM", payload: itemId });
  };

  const clearCart = () => {
    cart_dispatch({ type: "CLEAR_CART" });
  };

  // Calculate the total price of items in the cart
  const total = cart_state.cart
    ? cart_state.cart.reduce(
        (accumulator, product) => accumulator + product.price * product.quantity,
        0
      )
    : 0;

  return (
    <Helmet title="Cart">
      <CommonSection title="Your Cart" />
      <div className="container">
        <div className="cart-container">
          {cart_state.cart.map((val, key) => (
            <div
              className="cart-item"
              key={key}
              onDoubleClick={() => deleteItem(val._id)}
            >
              <div className="cart-item-image">
                <img src={val.thumbnail} alt={val.productName} />
              </div>
              <div className="cart-item-details">
                <h5>
                  {val.productName} - {val.price} {val.priceUnit}
                </h5>
                <p>{val.description}</p>
                <p className="quantity" style={{ color: "red" }}>
                  Quantity: {val.quantity}
                </p>
              </div>
              <div className="cart-item-price" style={{ color: "red" }}>
                <h5>{val.quantity * val.price}</h5>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <div className="total" style={{ color: "blue" }}>
              <h6>Total</h6>
              <div>{total}</div>
            </div>
            <div className="cart-buttons">
              <button className="btn btn-clear" onClick={clearCart}>
                Clear Cart
              </button>

              <button
                // disabled={cart_state.cart.length === 0}
                className="btn btn-danger w-100 mb-3"
              >
                <Link
                  to={"/products/checkout"}
                  className="text-decoration-none text-white"
                >
                  Checkout!
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  );
}
