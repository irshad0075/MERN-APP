import React, { useState, useEffect } from "react";
import axios from "axios";
import BrandModal from "../components/BrandModal.jsx";
import { MdDelete } from "react-icons/md";
import BrandUpdate from "../components/BrandUpdate.jsx";

export default function Brand() {
  const [brand, setBrand] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/get-all-brand")
      .then((json) => setBrand(json.data.brands))
      .catch((err) => console.log(err));
  }, []);

  const deleteBrand = (_id) => {
    const payload = { _id };

    const config = {
      method: "delete",
      url: "http://localhost:3000/api/delete-brand",
      data: payload,
    };

    axios(config)
      .then((json) => setBrand(json.data.brand))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center bg-success p-2 my-3 rounded">
        <span className="fs-4 fw-bold text-white">Brands</span>
        <BrandModal recallData={setBrand} />
      </div>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Brand Name</th>
              <th scope="col">Brand Image</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {brand.map((val, key) => (
              <tr key={key}>
                <th scope="row">{val._id}</th>
                <td>{val.BrandName}</td>
                <td>
                  <img
                    src={val.BrandImage}
                    className="img-fluid"
                    style={{ height: "5vh" }}
                    alt=""
                  />
                </td>
                <td>
                  <button
                    className="btn btn-dark"
                    onClick={() => deleteBrand(val._id)}
                  >
                    <MdDelete />
                  </button>
                  <BrandUpdate ID={val._id} recallData={setBrand} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
