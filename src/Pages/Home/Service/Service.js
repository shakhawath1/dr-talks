import React from 'react';
import { useNavigate } from 'react-router-dom';


const Service = ({ serviced }) => {
    console.log(serviced)
    const { img, service } = serviced;
    const navigate = useNavigate();

    const navigateToCheckout = service => {
        navigate(`/checkout/${service}`);
    }
    return (

        <div>

            <img src={img} alt="" />
            <h5>{service}</h5>
            <h6>Id: </h6>
            <button onClick={() => navigateToCheckout(service)} className='btn btn-primary'>Checkout</button>
        </div>
    );
};
export default Service;