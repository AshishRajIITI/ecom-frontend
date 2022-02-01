import React from 'react';
import Navigation from './Navigation';

export default function Base({
    title = "Default title",
    description = "Default description",
    className = "p-4 fs-3",
    children
}) {
    return (
        <>
            <div>
                <Navigation />
                <div className="container-fluid">
                    <div className="jumbotron bg-dark text-white text-center">
                        <h2 className="display-4">{title}</h2>
                        <p className="lead">{description}</p>
                    </div>
                    <div className={className}>{children}</div>
                </div>

                <footer className="container-fluid bg-dark my-5 text-center">
                    <p className='text-light p-3 pb-2'> If you have any problem, please feel free to reach us!</p>
                    <button className="btn-info m-3 mt-2">
                        Reach Us
                    </button>
                    <p className="text-center text-light">This is a <strong>MERN</strong> application</p>
                </footer>
            </div>
        </>

    );

}
