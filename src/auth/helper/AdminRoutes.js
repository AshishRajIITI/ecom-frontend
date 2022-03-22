import React from 'react'
import { isAuthenticated } from './index';
import { Navigate } from 'react-router-dom';

export default function AdminRoutes({ children }) {
    return isAuthenticated() && isAuthenticated().user.role === 1 ? children : (<Navigate to="/login" />)
}
