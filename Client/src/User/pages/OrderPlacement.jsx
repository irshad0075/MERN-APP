import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { CartContext } from "../CartContext/context";
import axios from "axios";
import OrderLoader from "../components/Order/OrderLoader";
import Swal from "sweetalert2";
import "../styles/OrderPlacement.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

export default function OrderPlacement() {
  const { cart_state, cart_dispatch } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [trackingId, setTrackingId] = useState("");
  const deliveryCharges = 500;

  const checkOut = async (e) => {
    e.preventDefault();

    const payload = {
      items: cart_state.cart,
      totalBill: calculateTotal(),
      customerName: name,
      customerEmail: email,
      customerContact: contact,
      customerAddress: address,
    };

    setIsLoading(true);

    try {
      const response = await axios.post(
<<<<<<< HEAD
        `/api/create-order`,
=======
        "http://localhost:3000/api/create-order",
>>>>>>> origin/master
        payload
      );

      if (response.status === 201) {
        Swal.fire({
          title: "Order Placed!",
          text: "Your order has been placed successfully.",
          icon: "success",
        });

        setName("");
        setEmail("");
        setContact("");
        setAddress("");

        cart_dispatch({
          type: "CLEAR_CART",
        });
      }
    } catch (err) {
      console.log(err);
      Swal.fire({
        title: "Error",
        text: "An error occurred while placing the order.",
        icon: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getStatus = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
<<<<<<< HEAD
        `/api/Order-by-id?${trackingId}`
=======
        `http://localhost:3000/api/Order-by-id?${trackingId}`
>>>>>>> origin/master
      );

      if (response.data.order) {
        const orderStatus = response.data.order.Status;

        if (orderStatus === "Delivered") {
          Swal.fire("Order Status", "Status: Delivered", "info");
        } else if (orderStatus === "pending") {
          Swal.fire("Order Status", "Status: Pending", "info");
        } else {
          Swal.fire(
            "Invalid Tracking ID",
            "Please enter a valid tracking ID.",
            "warning"
          );
        }
      } else {
        Swal.fire(
          "Invalid Tracking ID",
          "Please enter a valid tracking ID.",
          "warning"
        );
      }

      setTrackingId("");
    } catch (err) {
      console.log(err);
      Swal.fire(
        "Error",
        "An error occurred while fetching order status.",
        "error"
      );
    }
  };

  const calculateTotal = () => {
    const cartTotal = cart_state.cart.reduce(
      (accumulator, product) => accumulator + product.price * product.quantity,
      0
    );

    return cartTotal + deliveryCharges;
  };

  return (
    <div>
      <Helmet title="Place Your Order Here" />
      <CommonSection title="Place Your Order Here" />
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-7" style={{ color: " #2c2c2cdd" }}>
            <h2>Getting Your Order</h2>
            <hr className="w-75" />
            <h4>Shipping Information</h4>
            <Form onSubmit={checkOut}>
              <Form.Group className="mb-3 w-50">
                <Form.Control
                  value={name}
                  placeholder="Type your name"
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                />
              </Form.Group>
              <Form.Group className="mb-3 w-50">
                <Form.Control
                  value={address}
                  placeholder="Type your Address"
                  onChange={(e) => setAddress(e.target.value)}
                  as="textarea"
                  rows={2}
                  type="text"
                />
              </Form.Group>
              <Form.Group className="mb-3 w-50">
                <Form.Control
                  value={email}
                  placeholder="Type your Email"
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
<<<<<<< HEAD
                 
=======
                  placeholder="name@example.com"
>>>>>>> origin/master
                />
              </Form.Group>
              <Form.Group className="mb-3 w-50">
                <Form.Control
                  value={contact}
                  placeholder="Type your Phone number"
                  onChange={(e) => setContact(e.target.value)}
                  type="text"
                />
              </Form.Group>
              <div className="my-2">Delivery charges will be charged.</div>
              <div>
                You will receive an email on successful order placement.
              </div>
              <div className="d-flex">
                <Button className="w-50 mt-3" variant="secondary" type="submit">
                  Place Order
                </Button>
                {isLoading && <OrderLoader />}
              </div>
            </Form>

            <Form onSubmit={getStatus}>
              <Form.Group className="mb-3 w-50 mt-3">
                <Form.Control
                  value={trackingId}
                  placeholder="Tracking ID"
                  onChange={(e) => setTrackingId(e.target.value)}
                  type="text"
                />
              </Form.Group>
              <Button className="w-50 mt-3" variant="secondary" type="submit">
                Check Status
              </Button>
            </Form>
          </div>
          <div className="col-md-5">
            <h2>Order Summary</h2>
            <hr className="w-75" />
            <div
              className="shadow-lg p-2 rounded"
              style={{ color: " #2c2c2cdd" }}
            >
              {cart_state.cart.map((val, key) => (
                <div className="cart-item" key={key}>
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
              <div>
                Delivery Charges:{" "}
                <strong style={{ color: "#" }}>{deliveryCharges}$</strong>{" "}
              </div>
              <strong style={{ color: "red" }}>
                Total: {calculateTotal()}$
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
