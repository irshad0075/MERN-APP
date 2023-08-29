import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { storage } from "../utils/FirebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Form from "react-bootstrap/Form";
import axios from "axios";

function ProductModal({ recallData }) {
  const [show, setShow] = useState(false);

  const [brandVal, setBrandVal] = useState([]);
  const [CategoryVal, setCategoryVal] = useState([]);
  const [ProductName, setProductName] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [price, setPrice] = useState(0);
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [rating, setRating] = useState(0);
  const [stock, setStock] = useState(0);
  const [modelYear, setModelYear] = useState("");
  const [category, setcategory] = useState("");
  const [brand, setBrand] = useState("");
  const [imageArray, setImageArray] = useState([]);
  const [colors, setColors] = useState([]);
  const [description, setDescription] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => {
    axios.get("http://localhost:3000/api/get-all-brand").then((response) => {
      setBrandVal(response.data.brands);
      axios
        .get("http://localhost:3000/api/get-all-categories")
        .then((response) => {
          setCategoryVal(response.data.category);
          setShow(true);
        });
    });
  };

  const MultipleImageUpload = () => {
    if (!Array.isArray(imageArray) || imageArray.length === 0) {
      return Promise.resolve([]);
    }

    const uploadPromises = imageArray.map((val) => {
      const imageRef = ref(
        storage,
        `images/product/${ProductName}/${val.name}`
      );
      return uploadBytes(imageRef, val)
        .then((snapshot) => getDownloadURL(snapshot.ref))
        .catch((error) => {
          console.error("Error uploading image:", error.message);
          return null;
        });
    });

    return Promise.all(uploadPromises);
  };

  const AddProduct = (e) => {
    e.preventDefault();

    MultipleImageUpload()
      .then((urls) => {
        const thumbnailRef = ref(
          storage,
          `images/product/${ProductName}/${thumbnail.name}`
        );
        return uploadBytes(thumbnailRef, thumbnail)
          .then((snapshot) => getDownloadURL(snapshot.ref))
          .then((thumbnailUrl) => {
            const payload = {
              ProductName,
              modelYear,
              discountPercentage,
              rating,
              stock,
              colors,
              brand,
              category,
              price,
              description,
              thumbnail: thumbnailUrl,
              imageArray: urls,
            };

            axios
              .post("http://localhost:3000/api/create-product", payload)
              .then((response) => {
                console.log(response.data);
                setShow(false);
                recallData(response.data.products);
                setImageArray([]);
              })
              .catch((error) => alert(error.message));
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        Add Product
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static" centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={AddProduct}>
            <div className="mb-3">
              <label htmlFor="ProductName" className="form-label">
                Product Name
              </label>
              <input
                value={ProductName}
                onChange={(e) => setProductName(e.target.value)}
                type="text"
                className="form-control"
                id="ProductName"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
                Product Thumbnail
              </label>
              <input
                className="form-control"
                onChange={(e) => setThumbnail(e.target.files[0])}
                type="file"
                id="formFile"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
                Product Category
              </label>
              <Form.Select
                aria-label="Select Category"
                onChange={(e) => setcategory(e.target.value)}
              >
                <option disabled>Select Category</option>
                {CategoryVal.map((val, key) => (
                  <option key={key}>{val.CategoryName}</option>
                ))}
              </Form.Select>
            </div>
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
                Product Brand
              </label>
              <Form.Select
                aria-label="Select Brand"
                onChange={(e) => setBrand(e.target.value)}
              >
                <option disabled>Select Brand</option>
                {brandVal?.map((val, key) => (
                  <option key={key}>{val.BrandName}</option>
                ))}
              </Form.Select>
            </div>
            <div className="mb-3">
              <label htmlFor="">Chose Files one by one</label>
              <input
                className="form-control"
                onChange={(e) =>
                  setImageArray([...imageArray, e.target.files[0]])
                }
                type="file"
                id="formFile"
              />
              <div className="row gap-1">
                {imageArray.map((val, key) => (
                  <div className="col-md-2 mt-2 border " key={key}>
                    <h4
                      className="text-dark position-absolute mx-1"
                      onClick={() =>
                        setImageArray(imageArray.filter((img) => img != val))
                      }
                      style={{ cursor: "pointer" }}
                    >
                      x
                    </h4>
                    <img
                      style={{
                        height: "10vh",
                        width: "100%",
                        objectFit: "fill",
                      }}
                      className="img-fluid mt-1"
                      src={URL.createObjectURL(val)}
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="ProductName" className="form-label">
                Price
              </label>
              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="text"
                className="form-control"
                id="ProductName"
                aria-describedby="emailHelp"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="ProductName" className="form-label">
                Discount %
              </label>
              <input
                value={discountPercentage}
                onChange={(e) => setDiscountPercentage(e.target.value)}
                type="text"
                className="form-control"
                id="ProductName"
                aria-describedby="emailHelp"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="ProductName" className="form-label">
                Rating
              </label>
              <input
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                type="text"
                className="form-control"
                id="ProductName"
                aria-describedby="emailHelp"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="ProductName" className="form-label">
                Stock
              </label>
              <input
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                type="text"
                className="form-control"
                id="ProductName"
                aria-describedby="emailHelp"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="ProductName" className="form-label">
                Description
              </label>
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                className="form-control"
                id="ProductName"
                aria-describedby="emailHelp"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="ProductName" className="form-label">
                Model Year
              </label>
              <input
                value={modelYear}
                onChange={(e) => setModelYear(e.target.value)}
                type="text"
                className="form-control"
                id="ProductName"
                aria-describedby="emailHelp"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="ProductName" className="form-label">
                Colors
              </label>
              <input
                value={colors}
                onChange={(e) => setColors(e.target.value.split(","))}
                type="text"
                className="form-control"
                id="ProductName"
                placeholder="Enter colors separated by commas"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProductModal;
