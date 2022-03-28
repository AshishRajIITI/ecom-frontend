import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../auth/helper';
import Base from '../core/Base';
import { createProduct, getAllCategories } from './helper/adminapicall';


export default function AddProduct() {
    const { token, user } = isAuthenticated();

    const [values, setValues] = useState({
        name: "",
        description: "",
        price: "",
        category: "",
        stock: "",
        sold: "",
        photo: "",
        errorMessage: "",
        formData: "",
        createdProduct: "",
        //TODO: add loading and redirect fields!!!
    })

    const { name, description, price, category, stock, sold, photo, errorMessage, formData, createdProduct } = values;
    const [allCategories, setAllCategories] = useState([]);

    const preLoadData = () => {
        setValues({ ...values, formData: new FormData() });

        getAllCategories()
            .then((response) => {
                if (response.error) {
                    setValues({ ...values, errorMessage: response.error });
                }
                else {
                    console.log(response)
                    setAllCategories(response);
                }

            })
            .catch((err) => console.log(err));

    }

    useEffect(() => {
        preLoadData();
    }, [])

    const handleChange = (name) => event => {
        const value = name === "photo" ? event.target.files[0] : event.target.value;
        formData.set(name, value);
        console.log(formData);
        setValues({ ...values, [name]: value });
    }

    const onSubmit = (event) => {
        event.preventDefault();
        setValues({ ...values, errorMessage: "", createdProduct: "" });

        createProduct(token, formData, user._id)
            .then((response) => {
                if (response?.error) {
                    setValues({ ...values, errorMessage: response?.error });
                }
                else {
                    setValues({ ...values, errorMessage: "", createdProduct: response.name });
                }
            })
            .catch(err => console.log(err))
    }

    const displaySuccessMessage = () => (
        <div
            className="alert alert-success m-3"
            style={{ display: createdProduct ? "" : "none" }}
        >
            <h4>{createdProduct} created successfully</h4>
        </div>
    )

    const displayErrorMessage = () => (
        <div
            className="alert alert-danger m-3"
            style={{ display: errorMessage ? "" : "none" }}
        >
            <h4>{errorMessage}</h4>
        </div>
    )

    const addProductForm = () => {
        return (
            <div>
                <form>
                    <div className="form-group m-2 p-2">
                        <label for="name">Name</label>
                        <input className="form-control" name="name" value={name} onChange={handleChange("name")} />
                    </div>
                    <div className="form-group m-2 p-2">
                        <label for="description">Description</label>
                        <input className="form-control" name="description" value={description} onChange={handleChange("description")} />
                    </div>
                    <div className="form-group">
                        <label className="btn btn-block">
                            Choose Category
                        </label>
                        <select className='pt-2' name="category" onChange={handleChange("category")} >
                            <option>Select</option>
                            {allCategories && allCategories.map((eachCategory, index) => {
                                return (
                                    <option key={index} value={eachCategory._id}>{eachCategory.name}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="form-group m-2 p-2">
                        <label for="price">Price</label>
                        <input className="form-control" name="price" value={price} onChange={handleChange("price")} />
                    </div>
                    <div className="form-group m-2 p-2">
                        <label for="stock">Stock</label>
                        <input className="form-control" name="stock" value={stock} onChange={handleChange("stock")} />
                    </div>
                    <div className="form-group">
                        <label className="btn btn-block">
                            <input
                                onChange={handleChange("photo")}
                                type="file"
                                name="photo"
                                accept="image"
                                placeholder="choose a file"
                            />
                        </label>
                    </div>
                    <button
                        type="submit"
                        onClick={onSubmit}
                        className="btn btn-success m-3 "
                    >
                        Create Product
                    </button>

                </form>
            </div>
        )
    }

    return (
        <Base title='Create Product Form' description='Please create product here'>

            {displaySuccessMessage()}
            {displayErrorMessage()}
            {addProductForm()}

        </Base>
    )
}
