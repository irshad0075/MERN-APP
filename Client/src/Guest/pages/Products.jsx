import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BiCart } from "react-icons/bi";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import "../styles/products.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch products from the API
    axios
<<<<<<< HEAD
      .get(`/api/get-all-products`)
=======
      .get("http://localhost:3000/api/get-all-products")
>>>>>>> origin/master
      .then((response) => {
        setProducts(response.data.products);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <Helmet title="Products">
      <CommonSection title="All Products" />
      <div className="container my-5">
        <div className="row my-5">
          {isLoading ? (
            <div className="loader-container">
              <div className="loader"></div>
            </div>
          ) : (
            products.map((product, index) => (
              <div className="col-md-3 mb-4" key={index}>
                <div className="daraz-card">
                  <img
                    src={product.thumbnail}
                    className="card-img-top"
                    alt={product.ProductName}
                  />
                  <div className="ribbon">${product.price}</div>
                  <div className="daraz-card-content">
                    <h5 className="daraz-card-title">
                      {product.ProductName}
                    </h5>
                    <p className="daraz-card-description">
                      {product.description}
                    </p>
                    {/* Link to ProductPage with product ID */}
                    <Link
                      to={`/products/${product.ProductName}`}
                      className="add-to-cart-btn"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </Helmet>
  );
}

export default Products;
