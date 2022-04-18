import React from 'react';
import './Footer.css'

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='bg-dark footer'>
            <p>Copyright @ {year} | Dr.TALKS. All Rights Reserved</p>
        </div>
    );
};

export default Footer;