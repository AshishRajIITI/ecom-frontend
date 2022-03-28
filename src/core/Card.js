import React from 'react';
import { API } from '../Backend';
import { getPhoto } from './helper/coreapicalls';


export default function Card({ eachProduct }) {

    const productId = eachProduct._id;
    const imageurl = eachProduct
        ? `${API}/product/photo/${productId}`
        : `https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`;

    return (
        <div className='col-4'>
            <div className="card" >
                <img src={imageurl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{eachProduct.name}</h5>
                    <p className="card-text">{eachProduct.description}</p>
                    <a href="#" className="btn btn-primary">Add To Cart</a>
                    <a href="#" className="btn btn-danger">Remove from the cart</a>
                </div>
            </div>
        </div>
    )
}
