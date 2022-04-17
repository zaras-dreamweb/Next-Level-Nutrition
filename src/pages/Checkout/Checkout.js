import { toast, ToastContainer } from "react-toastify";

const Checkout = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        toast("Thank You For Your Booking")

    }

    return (
        <div>
            <h2 className='text-warning text-4xl mt-6 mb-4 text-center'>Checkout page</h2>

            <form onSubmit={handleSubmit} className='w-50 mx-auto pb-10 pt-4'>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" required />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Your Contact Number</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" required />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Which service you want to book?</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" required />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">When you want to start?</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
                </div>
                <button type="submit" className="btn btn-warning text-white">Submit</button>
                <ToastContainer></ToastContainer>
            </form>
        </div>
    );
};

export default Checkout;