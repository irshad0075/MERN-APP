# Final Mern Stack React Project 
  
 # API-REFERENCES 
 ![API repo link](https://github.com/FatymaFerdous/CarAPI-Express) 
  
 ## USER 
  
 #### LOGIN 
  
 http 
   POST /api/login 
  
  
 | Parameter | Type     | Description                | 
 | :-------- | :------- | :------------------------- | 
 | `email` | `string` | *Required* *Unique* Enter your email | 
 | `password` | `string` | *Required*. Enter your password| 
  
 #### SIGNUP 
  
 http 
   POST /api/signup 
  
  
 | Parameter | Type     | Description                | 
 | :-------- | :------- | :------------------------- | 
 | `username` | `string` | *Required*. Enter  username| 
 | `email` | `string` | *Required*  Enter  email| 
 | `password` | `string` | *Required*. Enter your password| 
  
 #### GET all User 
  
 http 
   GET /api/get-all-users 
  
   | `Description`                | 
   :------------------------- | 
 | This API returns a list of all user 
  
  
 #### GET User by ID 
  
 http 
   GET /api/get-user-by-id?_id={_id} 
  
  
 | Parameter | Type     | Description                | 
 | :-------- | :------- | :------------------------- | 
 | `_id` | `string` | *Required*. Enter ID | 
  
 #### GET User by Email 
  
 http 
   GET /api/get-user-by-email?email={email} 
  
  
 | Parameter | Type     | Description                | 
 | :-------- | :------- | :------------------------- | 
 | `email` | `string` | *Required*. Enter email| 
  
 #### Update User Details 
  
 http 
   POST /api/update-user 
  
  
 | Parameter | Type     | Description                | 
 | :-------- | :------- | :------------------------- | 
 | `_id` | `string` | *Required*. Enter ID| 
 | `username` | `string` | . Enter username if you want to update username| 
 | `password` | `string` | .Enter password if you want to update it| 
  
 #### Delete User 
  
 http 
   POST /api/delete-user 
  
  
 | Parameter | Type     | Description                | 
 | :-------- | :------- | :------------------------- | 
 | `_id` | `string` | *Required*. Enter ID to delete user| 
  
  
 ## CATEGORY 
  
 #### Add Category 
  
 http 
   POST /api/create-category 
  
  
 | Parameter | Type     | Description                | 
 | :-------- | :------- | :------------------------- | 
 | `CategoryName` | `string` | *Required* *Unique* Enter Category name| 
 | `CategoryImage` | `string` | *Required*. Upload Category Image| 
  
 #### GET All Category 
  
 http 
   GET /api/get-all-categories 
  
   | `Description`                | 
   :------------------------- | 
 | This API returns a list of all Categories 
  
 #### GET Category by ID 
  
 http 
   GET /api/get-category-by-id?_id={_id} 
  
  
 | Parameter | Type     | Description                | 
 | :-------- | :------- | :------------------------- | 
 | `_id` | `string` | *Required*. Enter ID| 
  
 #### POST Update Categories 
  
  
 http 
   POST /api/update-category 
  
  
 | Parameter | Type     | Description                | 
 | :-------- | :------- | :------------------------- | 
 | `CategoryName` | `string` | *Required*. Enter Category Name| 
 | `CategoryImage` | `string` |Upload Category Image| 
  
 #### Delete Category 
  
 http 
   POST /api/delete-category 
  
  
 | Parameter | Type     | Description                | 
 | :-------- | :------- | :------------------------- | 
 | `_id` | `string` | *Required*. Enter ID to delete Category| 
  
  
 ## BRAND 
  
 #### Add Brand 
  
 http 
   POST /api/create-brand 
  
  
 | Parameter | Type     | Description                | 
 | :-------- | :------- | :------------------------- | 
 | `BrandName` | `string` | *Required* *Unique* Enter Brand Name| 
 | `BrandImage` | `string` | *Required*. Upload Category Image| 
  
 #### GET All Brand 
  
 http 
   GET /api/get-all-brand 
  
   | `Description`                | 
   :------------------------- | 
 | This API returns a list of all Brands 
  
 #### GET Brand by ID 
  
 http 
   GET /api/get-brand-by-id?_id={_id} 
  
  
 | Parameter | Type     | Description                | 
 | :-------- | :------- | :------------------------- | 
 | `_id` | `string` | *Required*. Enter ID | 
  
  
 #### Update Brand 
  
 http 
   POST /api/update-brand 
  
  
 | Parameter | Type     | Description                | 
 | :-------- | :------- | :------------------------- | 
 | `BrandName` | `string` | *Required*. Enter Brand Name| 
 | `BrandImage` | `string` |Upload Brand Image| 
  
 #### Delete Brand 
  
 http 
   POST /api/delete-brand 
  
  
 | Parameter | Type     | Description                | 
 | :-------- | :------- | :------------------------- | 
 | `_id` | `string` | *Required*. Enter ID to delete Brand| 
  
  
  
 ## PRODUCT 
  
 #### Add Product 
  
 http 
   POST /api/create-product 
  
  
 | Parameter | Type     | Description                | 
 | :-------- | :------- | :------------------------- | 
 | `ProductName` | `string` | *Required*  Enter Product Name| 
 | `description` | `string` | *Required*. Write description about Product| 
 | `price` | `number` | *Required*. Enter Product price| 
 | `rating` | `string` | *Required*.Enter Product Rating| 
 | `imageArray` | `string` | *Required*. Upload Product Images| 
 | `category` | `string` | *Required*. Enter Product Category| 
 | `brand` | `string` | *Required*.Enter Product Brand| 
 | `thumbnail` | `string` | *Required*. Upload Product Thumbnail| 
 | `modelYear` | `string` | *Required*. Enter Product modelYear| 
 | `discountPercentage` | `string` | *Required*. Enter Product discountPercentage| 
 | `stock` | `string` | *Required*.Enter Product stock| 
 | `colors` | `string` | *Required*. Enter Product colors| 
  
 #### GET All Products 
  
 http 
   GET /api/get-all-products 
  
   | `Description`                | 
   :------------------------- | 
 | This API returns a list of all Products 
  
 #### GET Product by ID 
  
 http 
   GET /api/get-product-by-id?_id={_id} 
    
 | Parameter | Type     | Description                | 
 | :-------- | :------- | :------------------------- | 
 | `_id` | `string` | **Required**. Enter ID| 
  
 #### GET Product by Brand 
  
 http 
   GET /api/get-product-by-brand?brand={brand} 
  
  
 | Parameter | Type     | Description                | 
 | :-------- | :------- | :------------------------- | 
 | `brand` | `string` | **Required**. Enter Product Brand| 
  
 #### GET Product by Category 
  
 http 
   GET /api/get-product-by-category?category={category} 
  
  
 | Parameter | Type     | Description                | 
 | :-------- | :------- | :------------------------- | 
 | `CategoryName` | `string` | **Required**. Enter Product Category| 
  
  
  
 #### GET Product by Name 
  
 http 
   GET /api/get-product-by-name?name={ProductName} 
  
  
 | Parameter | Type     | Description                | 
 | :-------- | :------- | :------------------------- | 
 | `ProductName` | `string` | **Required**. Enter Product name| 
  
 #### Update Product 
  
 http 
   POST /api/update-product 
  
  
 | Parameter | Type     | Description                | 
 | :-------- | :------- | :------------------------- | 
 | `_id` | `string` | **Required**  Enter ID| 
 | `ProductName` | `string` |  Enter Product Name| 
 | `description` | `string` | Write description about Product| 
 | `price` | `number` |Enter Product price| 
 | `rating` | `string` | Enter Product Rating| 
 | `imageArray` | `string` |  Upload Product Images| 
 | `category` | `string` | Enter Product Category| 
 | `brand` | `string` | Enter Product Brand| 
 | `thumbnail` | `string` | Upload Product Thumbnail| 
 | `modelYear` | `string` | Enter Product modelYear| 
 | `discountPercentage` | `string` | Enter Product discountPercentage| 
 | `stock` | `string` | Enter Product stock| 
 | `colors` | `string` |  Enter Product colors| 
  
 #### Delete product 
  
 http 
   POST /api/delete-product 
  
  
 | Parameter | Type     | Description                | 
 | :-------- | :------- | :------------------------- | 
 | `_id` | `string` | **Required**. Enter ID to delete Product| 
  
  
 ## ORDER 
  
 #### Place ORDER 
  
 http 
   POST /api/create-order 
  
  
 | Parameter | Type     | Description                | 
 | :-------- | :------- | :------------------------- | 
 | `items` | `Array` | **Required** Enter list of items in array| 
 | `totalBill` | `string` | **Required**. Enter total amount| 
 | `customerAddress` | `string` | **Required**. Enter Customer Address| 
 | `customerContact` | `string` | **Required**. Enter Customer Contace No| 
 | `customerName` | `string` | **Required**. Enter Customer Name| 
 | `customerEmail` | `string` | **Required**. Enter Customer  email| 
  
 #### GET All ORDERS 
  
 http 
   GET /api/get-all-order 
  
   | `Description`                | 
   :------------------------- | 
 | This API returns a list of all ORDERS 
  
 #### GET ORDER by ID 
  
 http 
   GET /api/get-order-by-id?_id={_id} 
 ``` 
  
 | Parameter | Type     | Description                | 
 | :-------- | :------- | :------------------------- | 
 | `_id` | `string` | *Required*. Enter ID | 
  
  
 ## POS MERN Stack Project 
  
 Efficient point-of-sale systems are essential for enhancing customer experiences and optimizing operations. Our POS MERN (MongoDB, Express.js, React, Node.js) Stack Project delivers a modern and feature-rich solution for businesses. 
  
 ### Project Overview 
  
 Our POS MERN Stack Project provides businesses with a powerful tool for managing sales, inventory, and customer interactions. Leveraging MongoDB, Express.js, React, and Node.js, this application offers a seamless point-of-sale experience. 
  
 ### Key Features 
  
 - *User-Friendly Interface:* Intuitive React-based frontend with Redux state management for smooth user interactions. 
 - *Inventory Management:* Real-time stock tracking and low-stock alerts for effective inventory control. 
 - *Sales Tracking:* Generate detailed sales reports and insights into customer behavior. 
 - *Customer Profiles:* Maintain customer purchase history and preferences for personalized marketing. 
 - *Secure Authentication:* Robust authentication mechanisms to safeguard sensitive data. 
  
 ### Technologies Used 
  
 - *Frontend:* React, Redux 
 - *Backend:* Express.js, Node.js 
 - *Database:* MongoDB 
  
 ### Getting Started 
  
 1. Clone the repository. 
 2. Install dependencies using `npm install`. 
 3. Run the frontend and backend servers using `npm run start`. 
  
 ### Conclusion 
  
 Our POS MERN Stack Project empowers businesses with a versatile point-of-sale solution. Built with MongoDB, Express.js, React, and Node.js, it offers streamlined operations and enhanced customer experiences in today's dynamic marketplace.