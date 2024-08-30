import React from 'react';
import Navbar from './Navbar';

export default function Header() {
    return(
        <header className='header'>
            <div className='header-content' >
                <h1>Talent : Home</h1>
                <Navbar/>
                {/* TODO: Add functionality page changed. Home will change to something else */}

            </div>
        </header>
    )
}