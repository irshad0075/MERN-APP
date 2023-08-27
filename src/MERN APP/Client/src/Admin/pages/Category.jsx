import React, { useEffect, useState } from 'react'
import CategoryUpdate from '../components/CategoryUpdate.jsx'
import CategoryModal from '../components/CategoryModal'
import axios from 'axios'
import { MdDelete } from 'react-icons/md'


export default function Category() {

  const [categories, setcategories] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/api/get-all-categories')
      .then((json) => setcategories(json.data.categories))
      .catch((err) => console.log(err))
  }, [])


const deleteCategory = (_id) => {
  const payload = {_id }
  console.log(payload)

  const config = {
    method: 'delete',
    url: 'http://localhost:3000/api/delete-category',
    data: payload
  }

  axios(config)
    .then((json) => setcategories(json.data.categories))
    .catch((err) => console.log(err))



}


  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center bg-success p-2 my-3 rounded">
          <span className='fs-4 fw-bold text-white'>Categories</span>
          <CategoryModal recallData={setcategories}/>
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
                categories.map((val, key) =>
                  <tr key={key}>
                    <th scope="row">{val._id}</th>
                    <td>{val.CategoryName}</td>
                    <td><img src={val.CategoryImage} alt="" 
                    className='img-fluid'
                    style={{height:'5vh', objectFit: 'contain'}}/></td>
                    <td><button className='btn btn-dark '
                      onClick={() => deleteCategory(val._id)}
                    ><MdDelete/></button>
                    <CategoryUpdate ID={val._id} recallData={setcategories}/>
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