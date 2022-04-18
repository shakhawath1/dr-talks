import React from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {

    const { serviceId } = useParams();

    return (
        <div>
            <h2>Welcome to detail: {serviceId}</h2>
            <div className='text-center'>

                <button className='btn btn-primary'>Proceed Checkout</button>

            </div>
        </div>
    );
};

export default Checkout;