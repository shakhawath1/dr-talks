import React from 'react';

const Service = ({ service }) => {
    console.log(service)
    const { img, id } = service;
    return (
        <div>

            <img src={img} alt="" />
            {/* <h5>{service}</h5> */}
            <h6>Id: {id}</h6>
        </div>
    );
};

export default Service;