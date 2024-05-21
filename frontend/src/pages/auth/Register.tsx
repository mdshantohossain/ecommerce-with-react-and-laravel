import {Link} from "react-router-dom";


const Register = () => {


    return (
        <div className="login_register_wrap section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-md-10">
                        <div className="login_wrap">
                            <div className="padding_eight_all bg-white">
                                <div className="heading_s1">
                                    <h3>Register</h3>
                                </div>
                                <form method="post">
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="email"
                                               placeholder="Your Email"/>
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" type="password" name="password"
                                               placeholder="Password"/>
                                    </div>
                                    <div className="login_footer form-group">
                                        <div className="chek-form">
                                            <div className="custome-checkbox">
                                                <input className="form-check-input" type="checkbox" name="checkbox"
                                                       id="exampleCheckbox1" value=""/>
                                                <label className="form-check-label" htmlFor="exampleCheckbox1"><span>Remember me</span></label>
                                            </div>
                                        </div>
                                        <a href="#">Forgot password?</a>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-fill-out btn-block" name="login">Log
                                            in
                                        </button>
                                    </div>
                                </form>
                                <div className="different_login">
                                    <span> or</span>
                                </div>
                                <ul className="btn-login list_none text-center">
                                    <li><a href="#" className="btn btn-facebook"><i className="ion-social-facebook"></i>Facebook</a>
                                    </li>
                                    <li><a href="#" className="btn btn-google"><i className="ion-social-googleplus"></i>Google</a>
                                    </li>
                                </ul>
                                <div className="form-note text-center">Already Have an Account?
                                    <Link to="/login">Sign up now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Register