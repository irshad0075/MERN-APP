import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import CategoryPage from "../pages/CategoryPage";
import ProductPage from "../pages/ProductPage";
import About from "../pages/About";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import Brands from "../pages/Brands";
import OrderPlacement from "../pages/OrderPlacement";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/products" element={<Products />} />
      <Route path="/category" element={<CategoryPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/Carts" element={<Cart />} />
      <Route path="/brands" element={<Brands />} />
      <Route path="/products/checkout" element={<OrderPlacement />} />
      <Route path="/products/:ProductName" element={<ProductPage />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
