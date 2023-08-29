import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Page404 from "./pages/Page404";
import NavigationBar from "./Components/NavigationBar";
import FooterSection from "./Components/FooterSection";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";

export default function App() {
  const [user, setUser] = useState(true);
  return (
    <>
      <NavigationBar />
      {user ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productID" element={<ProductPage />} />
          <Route
            path="/products/category/:categoryName"
            element={<CategoryPage />}
          />
          <Route path="*" element={<Page404 />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/login" replace={true} />} />
        </Routes>
      )}

      <FooterSection />
    </>
  );
}
