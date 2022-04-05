import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './core/Home';
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import PrivateRoutes from './auth/helper/PrivateRoutes';
import AdminRoutes from './auth/helper/AdminRoutes';

import UserDashboard from "./user/UserDashBoard";
import AdminDashboard from "./user/AdminDashBoard";

import AddCategory from './admin/AddCategory';
import ManageCategory from './admin/ManageCategory';
import ManageProducts from './admin/ManageProducts';

import AddProduct from './admin/AddProduct';
import UpdateProduct from './admin/UpdateProduct';
import Cart from './core/Cart';


export default function AppRoutes() {
    return (
        <div>
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="signup" element={<Signup />} />
                <Route path="signin" element={<Signin />} />
                <Route path="cart" element={<Cart />} />
                <Route path="user/dashboard" element={<PrivateRoutes><UserDashboard /></PrivateRoutes>} />
                <Route path="admin/dashboard" element={<AdminRoutes><AdminDashboard /></AdminRoutes>} />
                <Route path="/admin/create/category" element={<AdminRoutes><AddCategory /></AdminRoutes>} />
                <Route path="/admin/manage/category" element={<AdminRoutes><ManageCategory /></AdminRoutes>} />
                <Route path="/admin/create/product" element={<AdminRoutes><AddProduct /></AdminRoutes>} />
                <Route path="/admin/manage/products" element={<AdminRoutes><ManageProducts /></AdminRoutes>} />
                <Route path="/admin/update/:productId" element={<AdminRoutes><UpdateProduct /></AdminRoutes>} />


            </Routes>
        </div>
    )
}
