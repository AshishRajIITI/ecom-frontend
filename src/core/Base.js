import React from 'react';
import Navigation from './Navigation';

export default function Base(
    { title = "Default Title",
        description = "Default Description",
        children, }
) {
    return (
        <>
            <Navigation />
            <div className="container">
                <div className='text-center m-3'>
                    <h1>{title}</h1>
                    <h3>{description}</h3>
                </div>
                <div>
                    {children}
                </div>
            </div>
            <footer className="text-center footer bg-dark text-white ">
                <div className='mt-3 p-2 mb-3'>
                    <div className='text-warning py-2'>
                        This is a website made using MERN stack
                    </div>
                    <button>Click me</button>
                </div>
            </footer>
        </>
    )
}
