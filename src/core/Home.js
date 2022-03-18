import React from 'react';
import Base from './Base';

export default function Home() {
    return (
        <>
            <Base title="Home page" description="A beautiful homepage">
                <div className='my-5 text-primary'>
                    <text>This is the main content</text>
                </div>
            </Base>
        </>
    )
}
