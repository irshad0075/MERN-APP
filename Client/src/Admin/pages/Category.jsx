import React, { useEffect, useState } from 'react'
import CategoryUpdate from '../components/CategoryUpdate.jsx'
import CategoryModal from '../components/CategoryModal'
import axios from 'axios'
import { MdDelete } from 'react-icons/md'
<<<<<<< HEAD
import { AppRoute } from '../../App.jsx'
=======

>>>>>>> origin/master

export default function Category() {

  const [category, setcategory] = useState([])

  useEffect(() => {
<<<<<<< HEAD
    axios.get(`/api/get-all-categories`)
=======
    axios.get('http://localhost:3000/api/get-all-categories')
>>>>>>> origin/master
      .then((json) => setcategory(json.data.category))
      .catch((err) => console.log(err))
  }, [])


const deleteCategory = (_id) => {
  const payload = {_id }
  console.log(payload)

  const config = {
    method: 'delete',
<<<<<<< HEAD
    url: `/api/delete-category`,
=======
    url: 'http://localhost:3000/api/delete-category',
>>>>>>> origin/master
    data: payload
  }

  axios(config)
    .then((json) => setcategory(json.data.category))
    .catch((err) => console.log(err))



}


  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center  p-2 my-3 rounded" style={{backgroundColor:" #2c2c2cdd"}}>
          <span className='fs-4 fw-bold text-white'>Categories</span>
          <CategoryModal recallData={setcategory}/>
        </div>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Category Name</th>
                <th scope="col">Category Image</th>
                <th scope="col">Actions</th>

              </tr>
            </thead>
            <tbody>
              {
                category.map((val, key) =>
                  <tr key={key}>
                    <th scope="row">{val._id}</th>
                    <td>{val.CategoryName}</td>
                    <td><img src={val.CategoryImage} alt="" 
                    className='img-fluid'
                    style={{height:'5vh', objectFit: 'contain'}}/></td>
                    <td><button className='btn btn-dark '
                      onClick={() => deleteCategory(val._id)}
                    ><MdDelete/></button>
                    <CategoryUpdate ID={val._id} recallData={setcategory}/>
                    </td>
                  </tr>
                ) 
              }
            </tbody>
          </table>

        </div>
      </div>
    </>
  )
}