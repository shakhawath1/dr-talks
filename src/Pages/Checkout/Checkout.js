import React from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {

    const { serviceName } = useParams();



    return (
        <div className='container'>
            <h2>Patiant details</h2>
            <div className='text-center'>
                <h4 className='mt-3'>{serviceName}</h4>
                <form className="d-flex flex-column align-items-center g-3 needs-validation" noValidate>
                    <div className="col-md-6">
                        <input type="text" className="form-control" id="validationCustom01" placeholder='Name' required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-6 mt-3">
                        <input type="text" className="form-control" id="validationCustom02" placeholder='Email' required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-6 mt-3">
                        <input type="text" className="form-control" id="validationCustom03" placeholder='Address' required />
                        <div className="invalid-feedback">
                            Please provide a valid city.
                        </div>
                    </div>

                    <div className="col-12 mt-4">
                        <button className="btn btn-primary" type="submit">Checkout</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Checkout;