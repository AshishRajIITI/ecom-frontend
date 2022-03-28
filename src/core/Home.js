import React, { useState, useEffect } from 'react';
import Base from './Base';
import Card from './Card';
import { getAllProducts } from "./helper/coreapicalls";


export default function Home() {
    const [allProducts, setAllProducts] = useState([]);

    const preLoad = () => {
        getAllProducts()
            .then((response) => {
                if (response.error) {
                    console.log(response.error)
                }
                else {
                    setAllProducts(response);
                }
            })
            .catch((err) => console.log(err))

    }

    useEffect(() => {
        preLoad()
    }, []);

    return (
        <>
            <Base title="Home page" description="A beautiful homepage">
                <div className='my-5 text-primary'>
                    {
                        allProducts && allProducts.map((eachProduct, index) => {
                            return (
                                <div className='row'>
                                    <Card key={index} eachProduct={eachProduct} />
                                </div>
                            )
                        })
                    }
                </div>
            </Base>
        </>
    )
}
