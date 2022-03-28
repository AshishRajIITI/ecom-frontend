import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { isAuthenticated } from '../auth/helper';
import Base from '../core/Base';
import { deleteProduct, getAllProducts } from './helper/adminapicall';


export default function ManageProducts() {

    const [allProducts, setAllProducts] = useState([]);
    const { token, user } = isAuthenticated();

    const preload = () => {
        getAllProducts()
            .then((response) => {
                setAllProducts(response);
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        preload();
    }, []);

    const handleDelete = (productId) => {
        deleteProduct(user._id, productId, token)
            .then((response) => {
                if (response.error) {
                    console.log(response.error)
                }
                else {
                    preload();
                }
            })
            .catch((err) => console.log(err))
    }


    return (
        <Base title="Manage your products here" description="Update and delete here">
            <div className='row-9 offset-3'>
                {
                    allProducts && allProducts.map((eachProduct, index) => {
                        return (
                            <>
                                <div key={index}>
                                    <div className='col-3 inline'>
                                        {eachProduct.name}
                                    </div>
                                    <div className='col-3 btn btn-warning p-3'>
                                        <Link to={`/admin/update/${eachProduct._id}`} >
                                            Update
                                        </Link>
                                    </div>
                                    <button
                                        className='col-3 btn btn-danger p-3'
                                        onClick={() => {
                                            handleDelete(eachProduct._id)
                                        }}>
                                        Delete
                                    </button>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </Base>
    )
}
