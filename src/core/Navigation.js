import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { isAuthenticated, signout } from '../auth/helper';
import { useNavigate } from 'react-router-dom';

export default function Navigation() {
    const navigate = useNavigate();
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
                                {isAuthenticated() && isAuthenticated().user && isAuthenticated().user.role === 0 && (<Link className="nav-link" to="/user/dashboard">User-Dashboard</Link>)}

                            </li>
                            <li className="nav-item">
                                {isAuthenticated() && isAuthenticated().user && isAuthenticated().user.role === 1 && (<Link className="nav-link" to="/admin/dashboard">Admin-Dashboard</Link>)}
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cart">Cart</Link>
                            </li>
                            <li className="nav-item">
                                {!isAuthenticated() && (<Link className="nav-link" to="/signup">Sign-Up</Link>)}
                            </li>
                            <li className="nav-item">
                                {!isAuthenticated() && (<Link className="nav-link" to="/signin">Sign-In</Link>)}
                            </li>
                            <li className="nav-item">
                                {
                                    isAuthenticated() && (
                                        <span
                                            style={{ cursor: "pointer" }}
                                            className="nav-link"
                                            onClick={() => {
                                                signout(() => {
                                                    navigate("/")
                                                })
                                            }}
                                        >
                                            Sign-Out
                                        </span>)

                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
