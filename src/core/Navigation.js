import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="#">Logo</a> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/dashboard">Dashboard</Link>
                                {/* <a className="nav-link" href="#">Dashboard</a> */}
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin-dashboard">Admin-Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cart">Cart</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/signup">Sign-Up</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/signin">Sign-In</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/signout">Sign-Out</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
