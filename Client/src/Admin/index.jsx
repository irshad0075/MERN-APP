import React from 'react'
import Home from './pages/Home'
import Category from './pages/Category'
import Products from './pages/Products'
import Brands from './pages/Brands'
import Cars from './pages/Cars'
import { Route, Routes } from "react-router-dom";
import NavigationBar from './components/NavigationBar';
import AdminFooter from "./Components/AdminFooter.jsx";
export default function Admin() {
    
    return (
        <>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category" element={<Category />} />
                <Route path="/products" element={<Products />} />
                <Route path="/brands" element={<Brands />} />
                <Route path="/cars" element={<Cars />} />
                <Route path="*" element={<Home />} />
            </Routes>
            <AdminFooter />
        </>
    )
}
