import React from 'react';
import { useNavigate } from 'react-router-dom';


const Service = ({ service }) => {

    const { img, serviceName, service_info } = service;
    const navigate = useNavigate();

    const navigateToCheckout = serviceName => {
        navigate(`/checkout/${serviceName}`);
    }
    return (
        <div class="col">
            <div class="card h-100">
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{serviceName}</h5>
                    <p class="card-text">{service_info}</p>
                </div>

                <button onClick={() => navigateToCheckout(serviceName)} className='btn btn-primary'>Checkout</button>

            </div>
        </div>
    );
};
export default Service;

