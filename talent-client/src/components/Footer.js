import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return(
        <footer className='footer'>
            {/* <nav>
             <Link to="/">Home</Link>
             <Link to="/admin">Admin</Link>
             <Link to="/login">Login</Link>
            </nav> */}
            {/* link not working only have text only for now */}
            <div className='footer-content'>
                <p> reserved for footer links</p>
            </div>
        </footer>
    )
}