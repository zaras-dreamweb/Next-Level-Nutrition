import React from 'react';

const Checkout = () => {
    return (
        <div>
            <h2 className='text-warning text-4xl mt-6 mb-4 text-center'>Checkout page</h2>

            <form className='w-50 mx-auto pb-10 pt-4'>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Your Contact Number</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Which service you want to book?</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">When you want to start?</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-warning text-white">Submit</button>
            </form>
        </div>
    );
};

export default Checkout;