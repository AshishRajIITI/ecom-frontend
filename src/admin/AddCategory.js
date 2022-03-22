import React, { useState } from 'react';
import { isAuthenticated } from '../auth/helper';
import Base from '../core/Base';
import { addCategory, } from './helper/adminapicall';

export default function AddCategory() {

    const [name, setName] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const { token, user } = isAuthenticated();
    const _id = user._id;

    const errorMessage = () => (
        <div className='container col-6 offset-4 alert alert-danger m-2 p-2'>
            {error}
        </div>
    );

    const successMessage = () => (
        <div className='container col-6 offset-4 alert alert-success m-2 p-2'>
            {success && (<span>Category created successfully.</span>)}
        </div>
    );

    const handleChange = (e) => {
        setName(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setError("");
        setSuccess(false);

        addCategory(token, _id, { name })
            .then((response) => {
                setName("");
                setSuccess(true);
                errorMessage("");
            })
            .catch(err => {
                setError("Error in creating this category");
                console.log(err);
            });

    }

    const addCategoryForm = () => {

        return (
            <div className='container col-6 offset-4 m-2 p-2'>
                <div>
                    <label for="categoryName">Category Name</label>
                    <input className='form-control' name="categoryName" value={name} onChange={handleChange} />
                </div>
                <div>
                    <button onClick={onSubmit} className='btn btn-primary'>Submit</button>
                </div>

            </div>
        )

    }

    return (
        <Base title='AddCategory' description='Here, you can add categories(aka collection name)' >
            {errorMessage()}
            {successMessage()}
            {addCategoryForm()}
        </Base>
    )
}
