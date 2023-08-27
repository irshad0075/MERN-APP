import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { BiCart } from "react-icons/bi";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import "../styles/products.css";
function Products() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    // Fetch products from the API
    axios
      .get("http://localhost:3000/api/get-all-products")
      .then((response) => setProducts(response.data.products))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Helmet title="Products">
      <CommonSection title="All Products" />
      <div className="container my-5">
        
        <div className="row my-5">
          {products.map((product, index) => (
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
                  <Link to={`/products/${product.ProductName}`} className="add-to-cart-btn">
                    <BiCart /> Detail
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Helmet>
  );
}

export default Products;
