import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './core/Home';
import Signup from "./user/Signup";
import Signin from "./user/Signin";


export default function AppRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="signup" element={<Signup />} />
                <Route path="signin" element={<Signin />} />
            </Routes>
        </div>
    )
}
