import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { storage } from '../utils/FirebaseConfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { FaPencilAlt } from 'react-icons/fa'
import Swal from 'sweetalert2';

export default function ProductUpdate({ recallData, ID }) {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [brandVal, setBrandVal] = useState([]);
  const [CategoryVal, setCategoryVal] = useState([]);
  const [ProductName, setProductName] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [price, setPrice] = useState(0);
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [rating, setRating] = useState(0);
  const [stock, setStock] = useState(0);
  const [modelYear, setModelYear] = useState('');
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [imageArray, setImageArray] = useState([]);
  const [colors, setColors] = useState([]);
  const [description, setDescription] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setIsLoading(true);

    try {
      const brandResponse = await axios.get('http://localhost:3000/api/get-all-brand');
      setBrandVal(brandResponse.data.brands);

      const categoryResponse = await axios.get('http://localhost:3000/api/get-all-categories');
      setCategoryVal(categoryResponse.data.category);

      setIsLoading(false);
      setShow(true);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const MultipleImageUpload = async () => {
    const promises = imageArray.map(async (val) => {
      const MultipleImageRef = ref(storage, `images/product/${ProductName}/${val.name}`);
      const snapshot = await uploadBytes(MultipleImageRef, val);
      return getDownloadURL(snapshot.ref);
    });
    return Promise.all(promises);
  };

  const updateProduct = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const urls = await MultipleImageUpload();

      const storageRef = ref(storage, `images/product/${ProductName}/${thumbnail.name}`);
      const snapshot = await uploadBytes(storageRef, thumbnail);
      const thumbnailUrl = await getDownloadURL(snapshot.ref);

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

      const json = await axios.put('http://localhost:3000/api/update-product', payload);
      setIsLoading(false);
      setShow(false);
      recallData(json.data.products);

      Swal.fire({
        icon: 'success',
        title: 'Product updated Successfully',
        showConfirmButton: false,
        timer: 3000,
      });
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      alert(error.message);
    }
  };
  return (
    <>
      <Button variant="dark" className="mx-1" onClick={handleShow}>
        <FaPencilAlt />
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static" centered>
        <Modal.Header closeButton>
          <Modal.Title>Update Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={updateProduct}>
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
                onChange={(e) => setCategory(e.target.value)}
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
                {brandVal.map((val, key) => (
                  <option key={key}>{val.BrandName}</option>
                ))}
              </Form.Select>
            </div>
            <div className="mb-3">
              <label htmlFor="">Choose Files one by one</label>
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

            <div className="d-flex align-items-center justify-content-between mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              {isLoading && (
                <div className="d-flex align-items-center">
                  <Spinner
                    animation="border"
                    role="status"
                    size="sm"
                    className="me-2"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                  <span>Loading...</span>
                </div>
              )}
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
