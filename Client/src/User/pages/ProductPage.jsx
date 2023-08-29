import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import ReactStars from "react-stars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import ImageSection from "../components/UI/ImageSection";
import { CartContext } from "../CartContext/context"; // Make sure to import your CartContext
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import "../styles/ProductPage.css";
import Marquee from "../components/UI/Marquee";

function ProductPage() {
  const { ProductName } = useParams();
  const { cart_dispatch } = useContext(CartContext); // Use cart_dispatch from your CartContext

  const [product, setProduct] = useState({});
  const [productQuantity, setProductQuantity] = useState(1);
  const [review, setReview] = useState("");
  const [ratingStar, setRatingStar] = useState(0);

  const ratingChanged = (newRating) => {
    setRatingStar(newRating);
  };

  const addtoCart = () => {
    if (!product) {
      console.error("Product data is not available.");
      return;
    }

    const payload = {
      ...product, // Spread the product details
      quantity: productQuantity,
      totalPrice: product.price * productQuantity,
    };

    cart_dispatch({
      type: "ADD_TO_CART",
      payload,
    });

    Swal.fire({
      title: "Added to Cart!",
      text: "Check your Cart for Check Out",
      icon: "success",
      confirmButtonText: "Continue Shopping",
    });
  };

  const submitReview = () => {
    const payload = {
      ProductName: product.ProductName,
      review: review,
      rating: ratingStar,
    };

    // You can save the review data to local storage here
    localStorage.setItem("productReview", JSON.stringify(payload));

    console.log(payload);
  };

  useEffect(() => {
    // Fetch product details by name
    axios
      .get(
<<<<<<< HEAD
        `/api/get-product-by-name?ProductName=${ProductName}`
=======
        `http://localhost:3000/api/get-product-by-name?ProductName=${ProductName}`
>>>>>>> origin/master
      )
      .then((response) => setProduct(response.data.products[0]))
      .catch((error) => console.log(error));
  }, [ProductName]);

  return (
    <>
      <Helmet title="Product Detail">
        <CommonSection title="Product Detail" />
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6">
              {product?.imageArray?.length > 0 && (
                <div className="image-section-container">
                  <ImageSection images={product.imageArray} />
                </div>
              )}
            </div>
            <div className="col-md-6">
              {product && (
                <div className="product-details">
                  <h1
                    className="product-title"
                    style={{ color: "rgb(1, 0, 75)" }}
                  >
                    {product.ProductName}
                  </h1>
                  <h3 className="product-price" style={{ color: "red" }}>
                    Price: ${product.price}
                  </h3>
                  <p
                    className="product-description"
                    style={{ color: "rgb(1, 0, 75)" }}
                  >
                    {product.description}
                  </p>
                  {/* Display product rating */}
                  <div className="product-rating">
                    <ReactStars
                      count={5}
                      size={24}
                      edit={false}
                      value={product.rating}
                      color2={"#ffd700"}
                    />
                  </div>
                  {/* Quantity selection */}
                  <div className="product-quantity">
                    <button
                      className="quantity-button"
                      style={{ color: "black" }}
                      disabled={productQuantity > 1 ? false : true}
                      onClick={() => setProductQuantity(productQuantity - 1)}
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <span className="quantity-value">{productQuantity}</span>
                    <button
                      className="quantity-button"
                      style={{ color: "black" }}
                      onClick={() => setProductQuantity(productQuantity + 1)}
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>
                  {/* Add to cart button */}
                  <button
                    className="add-to-cart-button"
                    onClick={addtoCart} // Use addtoCart without parameters
                  >
                    <FontAwesomeIcon icon={faCartPlus} className="me-2" />
                    Add to Cart
                  </button>
                </div>
              )}
              <div className="customer-reviews">
                {/* Review and rating inputs */}
                <div className="customer-reviews">
                  <h3
                    className="review-heading"
                    style={{ color: "rgb(1, 0, 75)" }}
                  >
                    Customer Reviews
                  </h3>

                  <div className="form-floating mb-3">
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                      style={{ height: 100 }}
                      value={review}
                      onChange={(e) => setReview(e.target.value)}
                    />
                    <label htmlFor="floatingTextarea2">Comments</label>
                  </div>

                  <div className="rating-input">
                    <h4>Rate Us:</h4>
                    <div className="d-flex align-items-center">
                      <ReactStars
                        count={5}
                        size={24}
                        value={ratingStar}
                        onChange={ratingChanged}
                        color2={"#ffd700"}
                      />
                      <span className="selected-rating">{ratingStar}</span>
                    </div>
                  </div>

                  <div className="submit-button">
                    <button
                      className="btn btn-dark"
                      style={{ background: " #2c2c2cdd" }}
                      onClick={submitReview}
                    >
                      Submit Review
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Marquee title="Product Detail" />
      </Helmet>
    </>
  );
}

export default ProductPage;
