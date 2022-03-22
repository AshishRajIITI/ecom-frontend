import React from 'react'
import { isAuthenticated } from './index';
import { Navigate } from 'react-router-dom';

export default function PrivateRoutes({ children }) {
    return isAuthenticated() ? children : (<Navigate to="/login" />)
}
