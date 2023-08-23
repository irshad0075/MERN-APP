import React from "react";
import Category from "./pages/Category";
import Products from "./pages/Products";
// import Cars from "./pages/Cars";
import { Route, Routes } from "react-router-dom";
import TopNav from "./components/TopNav/TopNav";
// import Brands from './pages/Brands'
import Dashboard from "./pages/Dashboard";
import SellCar from "./pages/SellCar";
import Settings from "./pages/Settings";
import NewCars from "./pages/NewCars";
import AddModels from "./pages/AddModels";
import "./App.css";

export default function Admin() {
  return (
    <>
      <TopNav />
      {/* <Sidebar /> */}

      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/bookings" element={<Bookings />} /> */}
        <Route path="/sell-car" element={<SellCar />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/AddModels" element={<AddModels />} />
        <Route path="/NewCars" element={<NewCars />} />
        <Route path="/category" element={<Category />} />
        <Route path="/products" element={<Products />} />
        {/* <Route path="/brands" element={<Brands />} /> */}
        {/* <Route path="/cars" element={<Cars />} /> */}
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </>
  );
}
