import React from 'react';
import banner from '../../../images/banner-img.jpg'
import './Banner.css'


const Banner = () => {
    return (
        <div className='banner'>
            <h3 className='m-3'>For Your Better Health</h3>
            <img className='w-75' src={banner} alt="" />
        </div>
    );
};

export default Banner;