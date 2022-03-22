import React from 'react';
import Base from '../core/Base';
import { Link } from 'react-router-dom';

export default function AdminDashBoard() {
    return (
        <Base title="Admin DashBoard" description='Your are on the admin dashboard page'>
            <div >
                <Link to="/admin/create/category">Create a Category</Link>
            </div>
        </Base>
    )
}
