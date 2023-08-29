import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { storage } from '../utils/FirebaseConfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

function CategoryModal({ recallData }) {
  const [show, setShow] = useState(false);
  const [CategoryName, setCategoryName] = useState('');
  const [CategoryImage, setCategoryImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Track loading state

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const AddCategory = (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading

    const storageRef = ref(storage, `images/category/${CategoryImage.name}`);
    uploadBytes(storageRef, CategoryImage).then((snapshot) => {
      getDownloadURL(snapshot.ref)
        .then((url) => {
          const payload = { CategoryName, CategoryImage: url };

          axios
<<<<<<< HEAD
            .post(`/api/create-category`, payload)
=======
            .post('http://localhost:3000/api/create-category', payload)
>>>>>>> origin/master
            .then((json) => {
              setIsLoading(false); // Stop loading
              setShow(false);
              recallData(json.data.categories);
            })
            .catch((err) => {
              setIsLoading(false); // Stop loading
              console.error(err);
              alert(err.message);
            });
        })
        .catch((error) => {
          setIsLoading(false); // Stop loading
          alert(error.message);
        });
    });
  };

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        Add Category
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static" centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isLoading ? (
            <div className="d-flex justify-content-center align-items-center">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          ) : (
            <form onSubmit={AddCategory}>
              <div className="mb-3">
                <label htmlFor="CategoryName" className="form-label">
                  Category Name
                </label>
                <input
                  value={CategoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                  type="text"
                  className="form-control"
                  id="CategoryName"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="formFile" className="form-label">
                  Category Image
                </label>
                <input
                  className="form-control"
                  onChange={(e) => setCategoryImage(e.target.files[0])}
                  type="file"
                  id="formFile"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CategoryModal;
