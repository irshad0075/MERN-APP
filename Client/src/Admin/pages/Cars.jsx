import React, { useEffect, useState } from "react";
import axios from "axios";
import "./adminPage.css";
import Helmet from "../../User/components/Helmet/Helmet";
import CommonSection from "../../User/components/UI/CommonSection";
export default function MyCars() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
<<<<<<< HEAD
      .get(`/api/get-all-products`)
=======
      .get("http://localhost:3000/api/get-all-products")
>>>>>>> origin/master
      .then((response) => setProducts(response.data.products))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
    <Helmet title="CARS">
        <CommonSection title="Get your favourite Car here" />
      <div className="container my-5 BgImg">

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
      </Helmet>
    </>
  );
}
