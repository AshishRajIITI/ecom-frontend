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


export default function AppRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="signup" element={<Signup />} />
                <Route path="signin" element={<Signin />} />
                <Route path="cart" element={<Signin />} />
                <Route path="user/dashboard" element={<PrivateRoutes><UserDashboard /></PrivateRoutes>} />
                <Route path="admin/dashboard" element={<AdminRoutes><AdminDashboard /></AdminRoutes>} />
                <Route path="/admin/create/category" element={<PrivateRoutes><AddCategory /></PrivateRoutes>} />
            </Routes>
        </div>
    )
}
