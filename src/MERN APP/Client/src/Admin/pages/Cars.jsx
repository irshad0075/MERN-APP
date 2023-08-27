import React, { useEffect, useState } from "react";
import axios from "axios";
import "./adminPage.css";

export default function MyCars() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/get-all-products")
      .then((response) => setProducts(response.data.products))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="container my-5 BgImg">
        <div className="text-center">
          <h2 className="productsHead">Products</h2>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            delectus magnam doloribus voluptatibus possimus corrupti aliquid
            itaque harum debitis ipsa!
          </p>
        </div>

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
                  <h5 className="daraz-card-title">{product.ProductName}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
