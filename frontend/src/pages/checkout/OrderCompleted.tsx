import {Link} from "react-router-dom";


const OrderCompleted = () => {

    return (
        <div className="section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="text-center order_complete">
                            <i className="fas fa-check-circle"></i>
                            <div className="heading_s1">
                                <h3>Your order is completed!</h3>
                            </div>
                            <p>Thank you for your order! Your order is being processed and will be completed within 3-6
                                hours. You will receive an email confirmation when your order is completed.</p>
                            <Link to="/" className="btn btn-fill-out">Continue Shopping</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default OrderCompleted