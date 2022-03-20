import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./core/Home";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from './AppRoutes';

ReactDOM.render(
    <BrowserRouter>
        <AppRoutes />
    </BrowserRouter>,
    document.getElementById("root")
);