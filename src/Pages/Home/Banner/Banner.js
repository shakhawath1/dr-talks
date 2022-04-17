import React from 'react';
import banner from '../../../images/banner-img.jpg'


const Banner = () => {
    return (
        <div>
            <h3>For Your Better Health</h3>
            <img className='w-75' src={banner} alt="" />
        </div>
    );
};

export default Banner;