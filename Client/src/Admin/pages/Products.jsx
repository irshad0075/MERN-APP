import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import ProductModal from "../components/ProductModal";
import { MdDelete } from "react-icons/md";

export default function Product() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
<<<<<<< HEAD
      .get(`/api/get-all-products`)
=======
      .get(`http://localhost:3000/api/get-all-products`)
>>>>>>> origin/master
      .then((response) => {
        const products = response.data.products || [];
        setProduct(products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const deleteProduct = (productID) => {
    const payload = {
      _id: productID,
    };
    console.log(payload);

    const config = {
      method: "delete",
<<<<<<< HEAD
      url: `/api/delete-product`,
=======
      url: "http://localhost:3000/api/delete-product",
>>>>>>> origin/master
      data: payload,
    };

    axios(config)
      .then((json) => setProduct(json.data.products))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="container">
        <div
          className="d-flex justify-content-between align-items-center p-2 my-3 rounded"
          style={{ backgroundColor: " #2c2c2cdd" }}
        >
          <span className="fs-4 fw-bold text-white">Products</span>
          <ProductModal recallData={setProduct} />
        </div>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Model Year</th>
                <th scope="col">Price</th>
                <th scope="col">Rating</th>
                <th scope="col">Discount %</th>
                <th scope="col">Stock</th>
                <th scope="col">Category</th>
                <th scope="col">Brands</th>
                <th scope="col">Colors</th>
                <th scope="col">Image</th>
                <th scope="col">Thumbnail</th>
                <th scope="col">Description</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>

            <tbody>
              {product.length === 0 ? (
                <tr>
                  <td colSpan="13">No products available.</td>
                </tr>
              ) : (
                product.map((val, key) => (
                  <tr key={key}>
                    <td>{val.ProductName}</td>
                    <td>{val.modelYear}</td>
                    <td>{val.price}</td>
                    <td>{val.discountPercentage}</td>
                    <td>{val.rating}</td>
                    <td>{val.stock}</td>
                    <td>{val.category}</td>
                    <td>{val.brand}</td>
                    <td>{val.colors}</td>

                    <td>
                      <img
                        src={val.thumbnail}
                        alt=""
                        className="img-fluid"
                        style={{
                          height: "5vh",
                          width: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </td>
                    <td className="row gap-1">
                      {val.imageArray.map((val, key) => (
                        <img
                          key={key}
                          style={{
                            height: "5vh",
                            width: "100%",
                            objectFit: "contain",
                          }}
                          className="img-fluid mt-2 col-md-1  border "
                          src={val}
                          alt=""
                        />
                      ))}
                    </td>
                    <td>
                      {val.description.length < 20
                        ? val.description
                        : val.description.substring(0, 20) + "..."}
                    </td>

                    <td>
                      <div className="d-flex">
                        <button
                          className="btn btn-dark"
                          onClick={() => deleteProduct(val._id)}
                        >
                          <MdDelete />
                        </button>
                      
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
