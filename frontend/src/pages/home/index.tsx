


const Home = () => {


    return(
        <>
            <div className="banner_section slide_medium shop_banner_slider staggered-animation-wrap">
                <div id="carouselExampleControls" className="carousel slide carousel-fade light_arrow" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active background_bg" data-img-src="assets/images/banner1.jpg">
                            <div className="banner_slide_content">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-7 col-9">
                                            <div className="banner_content overflow-hidden">
                                                <h5 className="mb-3 staggered-animation font-weight-light" data-animation="slideInLeft" data-animation-delay="0.5s">Get up to 50% off Today Only!</h5>
                                                <h2 className="staggered-animation" data-animation="slideInLeft" data-animation-delay="1s">Woman Fashion</h2>
                                                <a className="btn btn-fill-out rounded-0 staggered-animation text-uppercase" href="shop-left-sidebar.html" data-animation="slideInLeft" data-animation-delay="1.5s">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item background_bg" data-img-src="assets/images/banner2.jpg">
                            <div className="banner_slide_content">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="banner_content overflow-hidden">
                                                <h5 className="mb-3 staggered-animation font-weight-light" data-animation="slideInLeft" data-animation-delay="0.5s">50% off in all products</h5>
                                                <h2 className="staggered-animation" data-animation="slideInLeft" data-animation-delay="1s">Man Fashion</h2>
                                                <a className="btn btn-fill-out rounded-0 staggered-animation text-uppercase" href="shop-left-sidebar.html" data-animation="slideInLeft" data-animation-delay="1.5s">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item background_bg" data-img-src="assets/images/banner3.jpg">
                            <div className="banner_slide_content">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="banner_content overflow-hidden">
                                                <h5 className="mb-3 staggered-animation font-weight-light" data-animation="slideInLeft" data-animation-delay="0.5s">Taking your Viewing Experience to Next Level</h5>
                                                <h2 className="staggered-animation" data-animation="slideInLeft" data-animation-delay="1s">Summer Sale</h2>
                                                <a className="btn btn-fill-out rounded-0 staggered-animation text-uppercase" href="shop-left-sidebar.html" data-animation="slideInLeft" data-animation-delay="1.5s">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev"><i className="ion-chevron-left"></i></a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next"><i className="ion-chevron-right"></i></a>
                </div>
            </div>

            <div className="main_content">


                <div className="section pb_20">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="single_banner">
                                    <img src="assets/images/shop_banner_img1.jpg" alt="shop_banner_img1"/>
                                    <div className="single_banner_info">
                                        <h5 className="single_bn_title1">Super Sale</h5>
                                        <h3 className="single_bn_title">New Collection</h3>
                                        <a href="shop-left-sidebar.html" className="single_bn_link">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="single_banner">
                                    <img src="assets/images/shop_banner_img2.jpg" alt="shop_banner_img2"/>
                                    <div className="single_banner_info">
                                        <h3 className="single_bn_title">New Season</h3>
                                        <h4 className="single_bn_title1">Sale 40% Off</h4>
                                        <a href="shop-left-sidebar.html" className="single_bn_link">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section small_pt pb_70">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <div className="heading_s1 text-center">
                                    <h2>Exclusive Products</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="tab-style1">
                                    <ul className="nav nav-tabs justify-content-center" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="arrival-tab" data-toggle="tab" href="#arrival" role="tab" aria-controls="arrival" aria-selected="true">New Arrival</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="sellers-tab" data-toggle="tab" href="#sellers" role="tab" aria-controls="sellers" aria-selected="false">Best Sellers</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="featured-tab" data-toggle="tab" href="#featured" role="tab" aria-controls="featured" aria-selected="false">Featured</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="special-tab" data-toggle="tab" href="#special" role="tab" aria-controls="special" aria-selected="false">Special Offer
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tab-content">
                                    <div className="tab-pane fade show active" id="arrival" role="tabpanel" aria-labelledby="arrival-tab">
                                        <div className="row shop_container">
                                            <div className="col-lg-3 col-md-4 col-6">
                                                <div className="product">
                                                    <div className="product_img">
                                                        <a href="shop-product-detail.html">
                                                            <img src="assets/images/product_img1.jpg" alt="product_img1" />
                                                        </a>
                                                        <div className="product_action_box">
                                                            <ul className="list_none pr_action_btn">
                                                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product_info">
                                                        <h6 className="product_title"><a href="shop-product-detail.html">Blue Dress For Woman</a></h6>
                                                        <div className="product_price">
                                                            <span className="price">$45.00</span>
                                                            <del>$55.25</del>
                                                            <div className="on_sale">
                                                                <span>35% Off</span>
                                                            </div>
                                                        </div>
                                                        <div className="rating_wrap">
                                                            <div className="rating">
                                                                <div className="product_rate w-80"></div>
                                                            </div>
                                                            <span className="rating_num">(21)</span>
                                                        </div>
                                                        <div className="pr_desc">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                        </div>
                                                        <div className="pr_switch_wrap">
                                                            <div className="product_color_switch">
                                                                <span className="active" data-color="#87554B"></span>
                                                                <span data-color="#333333"></span>
                                                                <span data-color="#DA323F"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-6">
                                                <div className="product">
                                                    <div className="product_img">
                                                        <a href="shop-product-detail.html">
                                                            <img src="assets/images/product_img2.jpg" alt="product_img2" />
                                                        </a>
                                                        <div className="product_action_box">
                                                            <ul className="list_none pr_action_btn">
                                                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product_info">
                                                        <h6 className="product_title"><a href="shop-product-detail.html">Lether Gray Tuxedo</a></h6>
                                                        <div className="product_price">
                                                            <span className="price">$55.00</span>
                                                            <del>$95.00</del>
                                                            <div className="on_sale">
                                                                <span>25% Off</span>
                                                            </div>
                                                        </div>
                                                        <div className="rating_wrap">
                                                            <div className="rating">
                                                                <div className="product_rate w-68"></div>
                                                            </div>
                                                            <span className="rating_num">(15)</span>
                                                        </div>
                                                        <div className="pr_desc">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                        </div>
                                                        <div className="pr_switch_wrap">
                                                            <div className="product_color_switch">
                                                                <span className="active" data-color="#847764"></span>
                                                                <span data-color="#0393B5"></span>
                                                                <span data-color="#DA323F"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-6">
                                                <div className="product">
                                                    <span className="pr_flash">New</span>
                                                    <div className="product_img">
                                                        <a href="shop-product-detail.html">
                                                            <img src="assets/images/product_img3.jpg" alt="product_img3" />
                                                        </a>
                                                        <div className="product_action_box">
                                                            <ul className="list_none pr_action_btn">
                                                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product_info">
                                                        <h6 className="product_title"><a href="shop-product-detail.html">woman full sliv dress</a></h6>
                                                        <div className="product_price">
                                                            <span className="price">$68.00</span>
                                                            <del>$99.00</del>
                                                        </div>
                                                        <div className="rating_wrap">
                                                            <div className="rating">
                                                                <div className="product_rate w-87"></div>
                                                            </div>
                                                            <span className="rating_num">(25)</span>
                                                        </div>
                                                        <div className="pr_desc">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                        </div>
                                                        <div className="pr_switch_wrap">
                                                            <div className="product_color_switch">
                                                                <span className="active" data-color="#333333"></span>
                                                                <span data-color="#7C502F"></span>
                                                                <span data-color="#2F366C"></span>
                                                                <span data-color="#874A3D"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-6">
                                                <div className="product">
                                                    <div className="product_img">
                                                        <a href="shop-product-detail.html">
                                                            <img src="assets/images/product_img4.jpg" alt="product_img4" />
                                                        </a>
                                                        <div className="product_action_box">
                                                            <ul className="list_none pr_action_btn">
                                                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product_info">
                                                        <h6 className="product_title"><a href="shop-product-detail.html">light blue Shirt</a></h6>
                                                        <div className="product_price">
                                                            <span className="price">$69.00</span>
                                                            <del>$89.00</del>
                                                            <div className="on_sale">
                                                                <span>20% Off</span>
                                                            </div>
                                                        </div>
                                                        <div className="rating_wrap">
                                                            <div className="rating">
                                                                <div className="product_rate w-70"></div>
                                                            </div>
                                                            <span className="rating_num">(22)</span>
                                                        </div>
                                                        <div className="pr_desc">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                        </div>
                                                        <div className="pr_switch_wrap">
                                                            <div className="product_color_switch">
                                                                <span className="active" data-color="#333333"></span>
                                                                <span data-color="#A92534"></span>
                                                                <span data-color="#B9C2DF"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-6">
                                                <div className="product">
                                                    <div className="product_img">
                                                        <a href="shop-product-detail.html">
                                                            <img src="assets/images/product_img5.jpg" alt="product_img5" />
                                                        </a>
                                                        <div className="product_action_box">
                                                            <ul className="list_none pr_action_btn">
                                                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product_info">
                                                        <h6 className="product_title"><a href="shop-product-detail.html">blue dress for woman</a></h6>
                                                        <div className="product_price">
                                                            <span className="price">$45.00</span>
                                                            <del>$55.25</del>
                                                            <div className="on_sale">
                                                                <span>35% Off</span>
                                                            </div>
                                                        </div>
                                                        <div className="rating_wrap">
                                                            <div className="rating">
                                                                <div className="product_rate w-80"></div>
                                                            </div>
                                                            <span className="rating_num">(21)</span>
                                                        </div>
                                                        <div className="pr_desc">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                        </div>
                                                        <div className="pr_switch_wrap">
                                                            <div className="product_color_switch">
                                                                <span className="active" data-color="#87554B"></span>
                                                                <span data-color="#333333"></span>
                                                                <span data-color="#5FB7D4"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-6">
                                                <div className="product">
                                                    <span className="pr_flash bg-danger">Hot</span>
                                                    <div className="product_img">
                                                        <a href="shop-product-detail.html">
                                                            <img src="assets/images/product_img6.jpg" alt="product_img6" />
                                                        </a>
                                                        <div className="product_action_box">
                                                            <ul className="list_none pr_action_btn">
                                                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product_info">
                                                        <h6 className="product_title"><a href="shop-product-detail.html">Blue casual check shirt</a></h6>
                                                        <div className="product_price">
                                                            <span className="price">$55.00</span>
                                                            <del>$95.00</del>
                                                            <div className="on_sale">
                                                                <span>25% Off</span>
                                                            </div>
                                                        </div>
                                                        <div className="rating_wrap">
                                                            <div className="rating">
                                                                <div className="product_rate w-68"></div>
                                                            </div>
                                                            <span className="rating_num">(15)</span>
                                                        </div>
                                                        <div className="pr_desc">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                        </div>
                                                        <div className="pr_switch_wrap">
                                                            <div className="product_color_switch">
                                                                <span className="active" data-color="#87554B"></span>
                                                                <span data-color="#333333"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-6">
                                                <div className="product">
                                                    <span className="pr_flash bg-success">Sale</span>
                                                    <div className="product_img">
                                                        <a href="shop-product-detail.html">
                                                            <img src="assets/images/product_img7.jpg" alt="product_img7" />
                                                        </a>
                                                        <div className="product_action_box">
                                                            <ul className="list_none pr_action_btn">
                                                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product_info">
                                                        <h6 className="product_title"><a href="shop-product-detail.html">white black line dress</a></h6>
                                                        <div className="product_price">
                                                            <span className="price">$68.00</span>
                                                            <del>$99.00</del>
                                                            <div className="on_sale">
                                                                <span>20% Off</span>
                                                            </div>
                                                        </div>
                                                        <div className="rating_wrap">
                                                            <div className="rating">
                                                                <div className="product_rate w-87"></div>
                                                            </div>
                                                            <span className="rating_num">(25)</span>
                                                        </div>
                                                        <div className="pr_desc">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                        </div>
                                                        <div className="pr_switch_wrap">
                                                            <div className="product_color_switch">
                                                                <span className="active" data-color="#333333"></span>
                                                                <span data-color="#7C502F"></span>
                                                                <span data-color="#2F366C"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-6">
                                                <div className="product">
                                                    <div className="product_img">
                                                        <a href="shop-product-detail.html">
                                                            <img src="assets/images/product_img8.jpg" alt="product_img8" />
                                                        </a>
                                                        <div className="product_action_box">
                                                            <ul className="list_none pr_action_btn">
                                                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product_info">
                                                        <h6 className="product_title"><a href="shop-product-detail.html">Men blue jins Shirt</a></h6>
                                                        <div className="product_price">
                                                            <span className="price">$69.00</span>
                                                            <del>$89.00</del>
                                                            <div className="on_sale">
                                                                <span>20% Off</span>
                                                            </div>
                                                        </div>
                                                        <div className="rating_wrap">
                                                            <div className="rating">
                                                                <div className="product_rate w-70"></div>
                                                            </div>
                                                            <span className="rating_num">(22)</span>
                                                        </div>
                                                        <div className="pr_desc">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                        </div>
                                                        <div className="pr_switch_wrap">
                                                            <div className="product_color_switch">
                                                                <span className="active" data-color="#333333"></span>
                                                                <span data-color="#444653"></span>
                                                                <span data-color="#B9C2DF"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="sellers" role="tabpanel" aria-labelledby="sellers-tab">
                                        <div className="row shop_container">
                                            <div className="col-lg-3 col-md-4 col-6">
                                                <div className="product">
                                                    <div className="product_img">
                                                        <a href="shop-product-detail.html">
                                                            <img src="assets/images/product_img9.jpg" alt="product_img9" />
                                                        </a>
                                                        <div className="product_action_box">
                                                            <ul className="list_none pr_action_btn">
                                                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product_info">
                                                        <h6 className="product_title"><a href="shop-product-detail.html">T-Shirt Form Girls</a></h6>
                                                        <div className="product_price">
                                                            <span className="price">$45.00</span>
                                                            <del>$55.25</del>
                                                            <div className="on_sale">
                                                                <span>35% Off</span>
                                                            </div>
                                                        </div>
                                                        <div className="rating_wrap">
                                                            <div className="rating">
                                                                <div className="product_rate w-80"></div>
                                                            </div>
                                                            <span className="rating_num">(21)</span>
                                                        </div>
                                                        <div className="pr_desc">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                        </div>
                                                        <div className="pr_switch_wrap">
                                                            <div className="product_color_switch">
                                                                <span className="active" data-color="#B5B6BB"></span>
                                                                <span data-color="#333333"></span>
                                                                <span data-color="#DA323F"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-6">
                                                <div className="product">
                                                    <span className="pr_flash bg-danger">Hot</span>
                                                    <div className="product_img">
                                                        <a href="shop-product-detail.html">
                                                            <img src="assets/images/product_img6.jpg" alt="product_img6" />
                                                        </a>
                                                        <div className="product_action_box">
                                                            <ul className="list_none pr_action_btn">
                                                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product_info">
                                                        <h6 className="product_title"><a href="shop-product-detail.html">Blue casual check shirt</a></h6>
                                                        <div className="product_price">
                                                            <span className="price">$55.00</span>
                                                            <del>$95.00</del>
                                                            <div className="on_sale">
                                                                <span>25% Off</span>
                                                            </div>
                                                        </div>
                                                        <div className="rating_wrap">
                                                            <div className="rating">
                                                                <div className="product_rate w-68"></div>
                                                            </div>
                                                            <span className="rating_num">(15)</span>
                                                        </div>
                                                        <div className="pr_desc">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                        </div>
                                                        <div className="pr_switch_wrap">
                                                            <div className="product_color_switch">
                                                                <span className="active" data-color="#87554B"></span>
                                                                <span data-color="#333333"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-6">
                                                <div className="product">
                                                    <div className="product_img">
                                                        <a href="shop-product-detail.html">
                                                            <img src="assets/images/product_img11.jpg" alt="product_img11" />
                                                        </a>
                                                        <div className="product_action_box">
                                                            <ul className="list_none pr_action_btn">
                                                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product_info">
                                                        <h6 className="product_title"><a href="shop-product-detail.html">Black dress for woman</a></h6>
                                                        <div className="product_price">
                                                            <span className="price">$68.00</span>
                                                            <del>$99.00</del>
                                                            <div className="on_sale">
                                                                <span>20% Off</span>
                                                            </div>
                                                        </div>
                                                        <div className="rating_wrap">
                                                            <div className="rating">
                                                                <div className="product_rate w-87"></div>
                                                            </div>
                                                            <span className="rating_num">(25)</span>
                                                        </div>
                                                        <div className="pr_desc">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                        </div>
                                                        <div className="pr_switch_wrap">
                                                            <div className="product_color_switch">
                                                                <span className="active" data-color="#090909"></span>
                                                                <span data-color="#AC644D"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-6">
                                                <div className="product">
                                                    <span className="pr_flash bg-success">Sale</span>
                                                    <div className="product_img">
                                                        <a href="shop-product-detail.html">
                                                            <img src="assets/images/product_img7.jpg" alt="product_img7" />
                                                        </a>
                                                        <div className="product_action_box">
                                                            <ul className="list_none pr_action_btn">
                                                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product_info">
                                                        <h6 className="product_title"><a href="shop-product-detail.html">white black line dress</a></h6>
                                                        <div className="product_price">
                                                            <span className="price">$68.00</span>
                                                            <del>$99.00</del>
                                                            <div className="on_sale">
                                                                <span>20% Off</span>
                                                            </div>
                                                        </div>
                                                        <div className="rating_wrap">
                                                            <div className="rating">
                                                                <div className="product_rate w-87"></div>
                                                            </div>
                                                            <span className="rating_num">(25)</span>
                                                        </div>
                                                        <div className="pr_desc">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                        </div>
                                                        <div className="pr_switch_wrap">
                                                            <div className="product_color_switch">
                                                                <span className="active" data-color="#333333"></span>
                                                                <span data-color="#7C502F"></span>
                                                                <span data-color="#2F366C"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-6">
                                                <div className="product">
                                                    <div className="product_img">
                                                        <a href="shop-product-detail.html">
                                                            <img src="assets/images/product_img8.jpg" alt="product_img8" />
                                                        </a>
                                                        <div className="product_action_box">
                                                            <ul className="list_none pr_action_btn">
                                                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product_info">
                                                        <h6 className="product_title"><a href="shop-product-detail.html">Men blue jins Shirt</a></h6>
                                                        <div className="product_price">
                                                            <span className="price">$69.00</span>
                                                            <del>$89.00</del>
                                                            <div className="on_sale">
                                                                <span>20% Off</span>
                                                            </div>
                                                        </div>
                                                        <div className="rating_wrap">
                                                            <div className="rating">
                                                                <div className="product_rate w-70"></div>
                                                            </div>
                                                            <span className="rating_num">(22)</span>
                                                        </div>
                                                        <div className="pr_desc">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                        </div>
                                                        <div className="pr_switch_wrap">
                                                            <div className="product_color_switch">
                                                                <span className="active" data-color="#333333"></span>
                                                                <span data-color="#444653"></span>
                                                                <span data-color="#B9C2DF"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-6">
                                                <div className="product">
                                                    <div className="product_img">
                                                        <a href="shop-product-detail.html">
                                                            <img src="assets/images/product_img5.jpg" alt="product_img5" />
                                                        </a>
                                                        <div className="product_action_box">
                                                            <ul className="list_none pr_action_btn">
                                                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product_info">
                                                        <h6 className="product_title"><a href="shop-product-detail.html">blue dress for woman</a></h6>
                                                        <div className="product_price">
                                                            <span className="price">$45.00</span>
                                                            <del>$55.25</del>
                                                            <div className="on_sale">
                                                                <span>35% Off</span>
                                                            </div>
                                                        </div>
                                                        <div className="rating_wrap">
                                                            <div className="rating">
                                                                <div className="product_rate w-80"></div>
                                                            </div>
                                                            <span className="rating_num">(21)</span>
                                                        </div>
                                                        <div className="pr_desc">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                        </div>
                                                        <div className="pr_switch_wrap">
                                                            <div className="product_color_switch">
                                                                <span className="active" data-color="#87554B"></span>
                                                                <span data-color="#333333"></span>
                                                                <span data-color="#5FB7D4"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-6">
                                                <div className="product">
                                                    <div className="product_img">
                                                        <a href="shop-product-detail.html">
                                                            <img src="assets/images/product_img12.jpg" alt="product_img12" />
                                                        </a>
                                                        <div className="product_action_box">
                                                            <ul className="list_none pr_action_btn">
                                                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product_info">
                                                        <span className="pr_flash">New</span>
                                                        <h6 className="product_title"><a href="shop-product-detail.html">Black T-shirt for woman</a></h6>
                                                        <div className="product_price">
                                                            <span className="price">$69.00</span>
                                                            <del>$89.00</del>
                                                            <div className="on_sale">
                                                                <span>20% Off</span>
                                                            </div>
                                                        </div>
                                                        <div className="rating_wrap">
                                                            <div className="rating">
                                                                <div className="product_rate w-70"></div>
                                                            </div>
                                                            <span className="rating_num">(22)</span>
                                                        </div>
                                                        <div className="pr_desc">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                        </div>
                                                        <div className="pr_switch_wrap">
                                                            <div className="product_color_switch">
                                                                <span className="active" data-color="#1B1B25"></span>
                                                                <span data-color="#444653"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-6">
                                                <div className="product">
                                                    <span className="pr_flash bg-danger">Hot</span>
                                                    <div className="product_img">
                                                        <a href="shop-product-detail.html">
                                                            <img src="assets/images/product_img10.jpg" alt="product_img10" />
                                                        </a>
                                                        <div className="product_action_box">
                                                            <ul className="list_none pr_action_btn">
                                                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product_info">
                                                        <h6 className="product_title"><a href="shop-product-detail.html">Red & Black check shirt</a></h6>
                                                        <div className="product_price">
                                                            <span className="price">$55.00</span>
                                                            <del>$95.00</del>
                                                            <div className="on_sale">
                                                                <span>25% Off</span>
                                                            </div>
                                                        </div>
                                                        <div className="rating_wrap">
                                                            <div className="rating">
                                                                <div className="product_rate w-68"></div>
                                                            </div>
                                                            <span className="rating_num">(15)</span>
                                                        </div>
                                                        <div className="pr_desc">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                        </div>
                                                        <div className="pr_switch_wrap">
                                                            <div className="product_color_switch">
                                                                <span className="active" data-color="#E8ADA9"></span>
                                                                <span data-color="#C38F77"></span>
                                                                <span data-color="#BE7154"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="featured" role="tabpanel" aria-labelledby="featured-tab">
                                        <div className="row shop_container">
                                            <div className="col-lg-3 col-md-4 col-6">
                                                <div className="product">
                                                    <div className="product_img">
                                                        <a href="shop-product-detail.html">
                                                            <img src="assets/images/product_img5.jpg" alt="product_img5" />
                                                        </a>
                                                        <div className="product_action_box">
                                                            <ul className="list_none pr_action_btn">
                                                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product_info">
                                                        <h6 className="product_title"><a href="shop-product-detail.html">blue dress for woman</a></h6>
                                                        <div className="product_price">
                                                            <span className="price">$45.00</span>
                                                            <del>$55.25</del>
                                                            <div className="on_sale">
                                                                <span>35% Off</span>
                                                            </div>
                                                        </div>
                                                        <div className="rating_wrap">
                                                            <div className="rating">
                                                                <div className="product_rate w-80"></div>
                                                            </div>
                                                            <span className="rating_num">(21)</span>
                                                        </div>
                                                        <div className="pr_desc">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                        </div>
                                                        <div className="pr_switch_wrap">
                                                            <div className="product_color_switch">
                                                                <span className="active" data-color="#87554B"></span>
                                                                <span data-color="#333333"></span>
                                                                <span data-color="#5FB7D4"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-6">
                                                <div className="product">
                                                    <div className="product_img">
                                                        <a href="shop-product-detail.html">
                                                            <img src="assets/images/product_img12.jpg" alt="product_img12" />
                                                        </a>
                                                        <div className="product_action_box">
                                                            <ul className="list_none pr_action_btn">
                                                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product_info">
                                                        <span className="pr_flash">New</span>
                                                        <h6 className="product_title"><a href="shop-product-detail.html">Black T-shirt for woman</a></h6>
                                                        <div className="product_price">
                                                            <span className="price">$69.00</span>
                                                            <del>$89.00</del>
                                                            <div className="on_sale">
                                                                <span>20% Off</span>
                                                            </div>
                                                        </div>
                                                        <div className="rating_wrap">
                                                            <div className="rating">
                                                                <div className="product_rate w-70"></div>
                                                            </div>
                                                            <span className="rating_num">(22)</span>
                                                        </div>
                                                        <div className="pr_desc">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                        </div>
                                                        <div className="pr_switch_wrap">
                                                            <div className="product_color_switch">
                                                                <span className="active" data-color="#1B1B25"></span>
                                                                <span data-color="#444653"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-6">
                                                <div className="product">
                                                    <div className="product_img">
                                                        <a href="shop-product-detail.html">
                                                            <img src="assets/images/product_img9.jpg" alt="product_img9" />
                                                        </a>
                                                        <div className="product_action_box">
                                                            <ul className="list_none pr_action_btn">
                                                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product_info">
                                                        <h6 className="product_title"><a href="shop-product-detail.html">T-Shirt Form Girls</a></h6>
                                                        <div className="product_price">
                                                            <span className="price">$45.00</span>
                                                            <del>$55.25</del>
                                                            <div className="on_sale">
                                                                <span>35% Off</span>
                                                            </div>
                                                        </div>
                                                        <div className="rating_wrap">
                                                            <div className="rating">
                                                                <div className="product_rate w-80"></div>
                                                            </div>
                                                            <span className="rating_num">(21)</span>
                                                        </div>
                                                        <div className="pr_desc">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                        </div>
                                                        <div className="pr_switch_wrap">
                                                            <div className="product_color_switch">
                                                                <span className="active" data-color="#B5B6BB"></span>
                                                                <span data-color="#333333"></span>
                                                                <span data-color="#DA323F"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-6">
                                                <div className="product">
                                                    <span className="pr_flash bg-success">Sale</span>
                                                    <div className="product_img">
                                                        <a href="shop-product-detail.html">
                                                            <img src="assets/images/product_img10.jpg" alt="product_img10" />
                                                        </a>
                                                        <div className="product_action_box">
                                                            <ul className="list_none pr_action_btn">
                                                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product_info">
                                                        <h6 className="product_title"><a href="shop-product-detail.html">Red & Black check shirt</a></h6>
                                                        <div className="product_price">
                                                            <span className="price">$55.00</span>
                                                            <del>$95.00</del>
                                                            <div className="on_sale">
                                                                <span>25% Off</span>
                                                            </div>
                                                        </div>
                                                        <div className="rating_wrap">
                                                            <div className="rating">
                                                                <div className="product_rate w-68"></div>
                                                            </div>
                                                            <span className="rating_num">(15)</span>
                                                        </div>
                                                        <div className="pr_desc">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                        </div>
                                                        <div className="pr_switch_wrap">
                                                            <div className="product_color_switch">
                                                                <span className="active" data-color="#E8ADA9"></span>
                                                                <span data-color="#C38F77"></span>
                                                                <span data-color="#BE7154"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-6">
                                                <div className="product">
                                                    <span className="pr_flash bg-danger">Hot</span>
                                                    <div className="product_img">
                                                        <a href="shop-product-detail.html">
                                                            <img src="assets/images/product_img7.jpg" alt="product_img7" />
                                                        </a>
                                                        <div className="product_action_box">
                                                            <ul className="list_none pr_action_btn">
                                                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product_info">
                                                        <h6 className="product_title"><a href="shop-product-detail.html">white black line dress</a></h6>
                                                        <div className="product_price">
                                                            <span className="price">$68.00</span>
                                                            <del>$99.00</del>
                                                            <div className="on_sale">
                                                                <span>20% Off</span>
                                                            </div>
                                                        </div>
                                                        <div className="rating_wrap">
                                                            <div className="rating">
                                                                <div className="product_rate w-87"></div>
                                                            </div>
                                                            <span className="rating_num">(25)</span>
                                                        </div>
                                                        <div className="pr_desc">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                        </div>
                                                        <div className="pr_switch_wrap">
                                                            <div className="product_color_switch">
                                                                <span className="active" data-color="#333333"></span>
                                                                <span data-color="#7C502F"></span>
                                                                <span data-color="#2F366C"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-6">
                                                <div className="product">
                                                    <div className="product_img">
                                                        <a href="shop-product-detail.html">
                                                            <img src="assets/images/product_img11.jpg" alt="product_img11" />
                                                        </a>
                                                        <div className="product_action_box">
                                                            <ul className="list_none pr_action_btn">
                                                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product_info">
                                                        <h6 className="product_title"><a href="shop-product-detail.html">Black dress for woman</a></h6>
                                                        <div className="product_price">
                                                            <span className="price">$68.00</span>
                                                            <del>$99.00</del>
                                                            <div className="on_sale">
                                                                <span>20% Off</span>
                                                            </div>
                                                        </div>
                                                        <div className="rating_wrap">
                                                            <div className="rating">
                                                                <div className="product_rate w-87"></div>
                                                            </div>
                                                            <span className="rating_num">(25)</span>
                                                        </div>
                                                        <div className="pr_desc">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                        </div>
                                                        <div className="pr_switch_wrap">
                                                            <div className="product_color_switch">
                                                                <span className="active" data-color="#090909"></span>
                                                                <span data-color="#AC644D"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-6">
                                                <div className="product">
                                                    <div className="product_img">
                                                        <a href="shop-product-detail.html">
                                                            <img src="assets/images/product_img8.jpg" alt="product_img8" />
                                                        </a>
                                                        <div className="product_action_box">
                                                            <ul className="list_none pr_action_btn">
                                                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product_info">
                                                        <h6 className="product_title"><a href="shop-product-detail.html">Men blue jins Shirt</a></h6>
                                                        <div className="product_price">
                                                            <span className="price">$69.00</span>
                                                            <del>$89.00</del>
                                                            <div className="on_sale">
                                                                <span>20% Off</span>
                                                            </div>
                                                        </div>
                                                        <div className="rating_wrap">
                                                            <div className="rating">
                                                                <div className="product_rate w-70"></div>
                                                            </div>
                                                            <span className="rating_num">(22)</span>
                                                        </div>
                                                        <div className="pr_desc">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                        </div>
                                                        <div className="pr_switch_wrap">
                                                            <div className="product_color_switch">
                                                                <span className="active" data-color="#333333"></span>
                                                                <span data-color="#444653"></span>
                                                                <span data-color="#B9C2DF"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-6">
                                                <div className="product">
                                                    <span className="pr_flash">Sale</span>
                                                    <div className="product_img">
                                                        <a href="shop-product-detail.html">
                                                            <img src="assets/images/product_img6.jpg" alt="product_img6" />
                                                        </a>
                                                        <div className="product_action_box">
                                                            <ul className="list_none pr_action_btn">
                                                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product_info">
                                                        <h6 className="product_title"><a href="shop-product-detail.html">Blue casual check shirt</a></h6>
                                                        <div className="product_price">
                                                            <span className="price">$55.00</span>
                                                            <del>$95.00</del>
                                                            <div className="on_sale">
                                                                <span>25% Off</span>
                                                            </div>
                                                        </div>
                                                        <div className="rating_wrap">
                                                            <div className="rating">
                                                                <div className="product_rate w-68"></div>
                                                            </div>
                                                            <span className="rating_num">(15)</span>
                                                        </div>
                                                        <div className="pr_desc">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                        </div>
                                                        <div className="pr_switch_wrap">
                                                            <div className="product_color_switch">
                                                                <span className="active" data-color="#87554B"></span>
                                                                <span data-color="#333333"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="special" role="tabpanel" aria-labelledby="special-tab">
                                        <div className="row shop_container">
                                            <div className="col-lg-3 col-md-4 col-6">
                                                <div className="product">
                                                    <div className="product_img">
                                                        <a href="shop-product-detail.html">
                                                            <img src="assets/images/product_img4.jpg" alt="product_img4" />
                                                        </a>
                                                        <div className="product_action_box">
                                                            <ul className="list_none pr_action_btn">
                                                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product_info">
                                                        <h6 className="product_title"><a href="shop-product-detail.html">light blue Shirt</a></h6>
                                                        <div className="product_price">
                                                            <span className="price">$69.00</span>
                                                            <del>$89.00</del>
                                                            <div className="on_sale">
                                                                <span>20% Off</span>
                                                            </div>
                                                        </div>
                                                        <div className="rating_wrap">
                                                            <div className="rating">
                                                                <div className="product_rate w-70"></div>
                                                            </div>
                                                            <span className="rating_num">(22)</span>
                                                        </div>
                                                        <div className="pr_desc">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                        </div>
                                                        <div className="pr_switch_wrap">
                                                            <div className="product_color_switch">
                                                                <span className="active" data-color="#333333"></span>
                                                                <span data-color="#A92534"></span>
                                                                <span data-color="#B9C2DF"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-6">
                                                <div className="product">
                                                    <div className="product_img">
                                                        <a href="shop-product-detail.html">
                                                            <img src="assets/images/product_img9.jpg" alt="product_img9" />
                                                        </a>
                                                        <div className="product_action_box">
                                                            <ul className="list_none pr_action_btn">
                                                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product_info">
                                                        <h6 className="product_title"><a href="shop-product-detail.html">T-Shirt Form Girls</a></h6>
                                                        <div className="product_price">
                                                            <span className="price">$45.00</span>
                                                            <del>$55.25</del>
                                                            <div className="on_sale">
                                                                <span>35% Off</span>
                                                            </div>
                                                        </div>
                                                        <div className="rating_wrap">
                                                            <div className="rating">
                                                                <div className="product_rate w-80"></div>
                                                            </div>
                                                            <span className="rating_num">(21)</span>
                                                        </div>
                                                        <div className="pr_desc">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                        </div>
                                                        <div className="pr_switch_wrap">
                                                            <div className="product_color_switch">
                                                                <span className="active" data-color="#B5B6BB"></span>
                                                                <span data-color="#333333"></span>
                                                                <span data-color="#DA323F"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-6">
                                                <div className="product">
                                                    <div className="product_img">
                                                        <a href="shop-product-detail.html">
                                                            <img src="assets/images/product_img8.jpg" alt="product_img8" />
                                                        </a>
                                                        <div className="product_action_box">
                                                            <ul className="list_none pr_action_btn">
                                                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product_info">
                                                        <h6 className="product_title"><a href="shop-product-detail.html">Men Checks Casual Shirt</a></h6>
                                                        <div className="product_price">
                                                            <span className="price">$69.00</span>
                                                            <del>$89.00</del>
                                                            <div className="on_sale">
                                                                <span>20% Off</span>
                                                            </div>
                                                        </div>
                                                        <div className="rating_wrap">
                                                            <div className="rating">
                                                                <div className="product_rate w-70"></div>
                                                            </div>
                                                            <span className="rating_num">(22)</span>
                                                        </div>
                                                        <div className="pr_desc">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                        </div>
                                                        <div className="pr_switch_wrap">
                                                            <div className="product_color_switch">
                                                                <span className="active" data-color="#333333"></span>
                                                                <span data-color="#444653"></span>
                                                                <span data-color="#B9C2DF"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-6">
                                                <div className="product">
                                                    <span className="pr_flash">New</span>
                                                    <div className="product_img">
                                                        <a href="shop-product-detail.html">
                                                            <img src="assets/images/product_img1.jpg" alt="product_img1" />
                                                        </a>
                                                        <div className="product_action_box">
                                                            <ul className="list_none pr_action_btn">
                                                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product_info">
                                                        <h6 className="product_title"><a href="shop-product-detail.html">Blue Dress For Woman</a></h6>
                                                        <div className="product_price">
                                                            <span className="price">$45.00</span>
                                                            <del>$55.25</del>
                                                            <div className="on_sale">
                                                                <span>35% Off</span>
                                                            </div>
                                                        </div>
                                                        <div className="rating_wrap">
                                                            <div className="rating">
                                                                <div className="product_rate w-80"></div>
                                                            </div>
                                                            <span className="rating_num">(21)</span>
                                                        </div>
                                                        <div className="pr_desc">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                        </div>
                                                        <div className="pr_switch_wrap">
                                                            <div className="product_color_switch">
                                                                <span className="active" data-color="#87554B"></span>
                                                                <span data-color="#333333"></span>
                                                                <span data-color="#DA323F"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-6">
                                                <div className="product">
                                                    <div className="product_img">
                                                        <a href="shop-product-detail.html">
                                                            <img src="assets/images/product_img12.jpg" alt="product_img12" />
                                                        </a>
                                                        <div className="product_action_box">
                                                            <ul className="list_none pr_action_btn">
                                                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product_info">
                                                        <span className="pr_flash bg-danger">Hot</span>
                                                        <h6 className="product_title"><a href="shop-product-detail.html">Black T-shirt for woman</a></h6>
                                                        <div className="product_price">
                                                            <span className="price">$69.00</span>
                                                            <del>$89.00</del>
                                                            <div className="on_sale">
                                                                <span>20% Off</span>
                                                            </div>
                                                        </div>
                                                        <div className="rating_wrap">
                                                            <div className="rating">
                                                                <div className="product_rate w-70"></div>
                                                            </div>
                                                            <span className="rating_num">(22)</span>
                                                        </div>
                                                        <div className="pr_desc">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                        </div>
                                                        <div className="pr_switch_wrap">
                                                            <div className="product_color_switch">
                                                                <span className="active" data-color="#1B1B25"></span>
                                                                <span data-color="#444653"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-6">
                                                <div className="product">
                                                    <div className="product_img">
                                                        <a href="shop-product-detail.html">
                                                            <img src="assets/images/product_img6.jpg" alt="product_img6" />
                                                        </a>
                                                        <div className="product_action_box">
                                                            <ul className="list_none pr_action_btn">
                                                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product_info">
                                                        <h6 className="product_title"><a href="shop-product-detail.html">Blue casual check shirt</a></h6>
                                                        <div className="product_price">
                                                            <span className="price">$55.00</span>
                                                            <del>$95.00</del>
                                                            <div className="on_sale">
                                                                <span>25% Off</span>
                                                            </div>
                                                        </div>
                                                        <div className="rating_wrap">
                                                            <div className="rating">
                                                                <div className="product_rate w-68"></div>
                                                            </div>
                                                            <span className="rating_num">(15)</span>
                                                        </div>
                                                        <div className="pr_desc">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                        </div>
                                                        <div className="pr_switch_wrap">
                                                            <div className="product_color_switch">
                                                                <span className="active" data-color="#87554B"></span>
                                                                <span data-color="#333333"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-6">
                                                <div className="product">
                                                    <span className="pr_flash bg-success">Sale</span>
                                                    <div className="product_img">
                                                        <a href="shop-product-detail.html">
                                                            <img src="assets/images/product_img7.jpg" alt="product_img7" />
                                                        </a>
                                                        <div className="product_action_box">
                                                            <ul className="list_none pr_action_btn">
                                                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product_info">
                                                        <h6 className="product_title"><a href="shop-product-detail.html">white black line dress</a></h6>
                                                        <div className="product_price">
                                                            <span className="price">$68.00</span>
                                                            <del>$99.00</del>
                                                            <div className="on_sale">
                                                                <span>20% Off</span>
                                                            </div>
                                                        </div>
                                                        <div className="rating_wrap">
                                                            <div className="rating">
                                                                <div className="product_rate w-87"></div>
                                                            </div>
                                                            <span className="rating_num">(25)</span>
                                                        </div>
                                                        <div className="pr_desc">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                        </div>
                                                        <div className="pr_switch_wrap">
                                                            <div className="product_color_switch">
                                                                <span className="active" data-color="#333333"></span>
                                                                <span data-color="#7C502F"></span>
                                                                <span data-color="#2F366C"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-6">
                                                <div className="product">
                                                    <div className="product_img">
                                                        <a href="shop-product-detail.html">
                                                            <img src="assets/images/product_img11.jpg" alt="product_img11" />
                                                        </a>
                                                        <div className="product_action_box">
                                                            <ul className="list_none pr_action_btn">
                                                                <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                                <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                                <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                                <li><a href="#"><i className="icon-heart"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product_info">
                                                        <h6 className="product_title"><a href="shop-product-detail.html">Black dress for woman</a></h6>
                                                        <div className="product_price">
                                                            <span className="price">$68.00</span>
                                                            <del>$99.00</del>
                                                            <div className="on_sale">
                                                                <span>20% Off</span>
                                                            </div>
                                                        </div>
                                                        <div className="rating_wrap">
                                                            <div className="rating">
                                                                <div className="product_rate w-87"></div>
                                                            </div>
                                                            <span className="rating_num">(25)</span>
                                                        </div>
                                                        <div className="pr_desc">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                        </div>
                                                        <div className="pr_switch_wrap">
                                                            <div className="product_color_switch">
                                                                <span className="active" data-color="#090909"></span>
                                                                <span data-color="#AC644D"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section bg_light_blue2 pb-0 pt-md-0">
                    <div className="container">
                        <div className="row align-items-center flex-row-reverse">
                            <div className="col-md-6 offset-md-1">
                                <div className="medium_divider d-none d-md-block clearfix"></div>
                                <div className="trand_banner_text text-center text-md-left">
                                    <div className="heading_s1 mb-3">
                                        <span className="sub_heading">New season trends!</span>
                                        <h2>Best Summer Collection</h2>
                                    </div>
                                    <h5 className="mb-4">Sale Get up to 50% Off</h5>
                                    <a href="shop-left-sidebar.html" className="btn btn-fill-out rounded-0">Shop Now</a>
                                </div>
                                <div className="medium_divider clearfix"></div>
                            </div>
                            <div className="col-md-5">
                                <div className="text-center trading_img">
                                    <img src="assets/images/tranding_img.png" alt="tranding_img"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <div className="heading_s1 text-center">
                                    <h2>Featured Products</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="product_slider carousel_slider owl-carousel owl-theme nav_style1" data-loop="true" data-dots="false" data-nav="true" data-margin="20" data-responsive='{"0":{"items": "1"}, "481":{"items": "2"}, "768":{"items": "3"}, "1199":{"items": "4"}}'>
                                    <div className="item">
                                        <div className="product">
                                            <div className="product_img">
                                                <a href="shop-product-detail.html">
                                                    <img src="assets/images/product_img1.jpg" alt="product_img1" />
                                                </a>
                                                <div className="product_action_box">
                                                    <ul className="list_none pr_action_btn">
                                                        <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                        <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                        <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                        <li><a href="#"><i className="icon-heart"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product_info">
                                                <h6 className="product_title"><a href="shop-product-detail.html">Blue Dress For Woman</a></h6>
                                                <div className="product_price">
                                                    <span className="price">$45.00</span>
                                                    <del>$55.25</del>
                                                    <div className="on_sale">
                                                        <span>35% Off</span>
                                                    </div>
                                                </div>
                                                <div className="rating_wrap">
                                                    <div className="rating">
                                                        <div className="product_rate w-80"></div>
                                                    </div>
                                                    <span className="rating_num">(21)</span>
                                                </div>
                                                <div className="pr_desc">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                </div>
                                                <div className="pr_switch_wrap">
                                                    <div className="product_color_switch">
                                                        <span className="active" data-color="#87554B"></span>
                                                        <span data-color="#333333"></span>
                                                        <span data-color="#DA323F"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="product">
                                            <div className="product_img">
                                                <a href="shop-product-detail.html">
                                                    <img src="assets/images/product_img2.jpg" alt="product_img2" />
                                                </a>
                                                <div className="product_action_box">
                                                    <ul className="list_none pr_action_btn">
                                                        <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                        <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                        <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                        <li><a href="#"><i className="icon-heart"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product_info">
                                                <h6 className="product_title"><a href="shop-product-detail.html">Lether Gray Tuxedo</a></h6>
                                                <div className="product_price">
                                                    <span className="price">$55.00</span>
                                                    <del>$95.00</del>
                                                    <div className="on_sale">
                                                        <span>25% Off</span>
                                                    </div>
                                                </div>
                                                <div className="rating_wrap">
                                                    <div className="rating">
                                                        <div className="product_rate w-68"></div>
                                                    </div>
                                                    <span className="rating_num">(15)</span>
                                                </div>
                                                <div className="pr_desc">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                </div>
                                                <div className="pr_switch_wrap">
                                                    <div className="product_color_switch">
                                                        <span className="active" data-color="#847764"></span>
                                                        <span data-color="#0393B5"></span>
                                                        <span data-color="#DA323F"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="product">
                                            <span className="pr_flash">New</span>
                                            <div className="product_img">
                                                <a href="shop-product-detail.html">
                                                    <img src="assets/images/product_img3.jpg" alt="product_img3" />
                                                </a>
                                                <div className="product_action_box">
                                                    <ul className="list_none pr_action_btn">
                                                        <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                        <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                        <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                        <li><a href="#"><i className="icon-heart"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product_info">
                                                <h6 className="product_title"><a href="shop-product-detail.html">woman full sliv dress</a></h6>
                                                <div className="product_price">
                                                    <span className="price">$68.00</span>
                                                    <del>$99.00</del>
                                                </div>
                                                <div className="rating_wrap">
                                                    <div className="rating">
                                                        <div className="product_rate w-87"></div>
                                                    </div>
                                                    <span className="rating_num">(25)</span>
                                                </div>
                                                <div className="pr_desc">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                </div>
                                                <div className="pr_switch_wrap">
                                                    <div className="product_color_switch">
                                                        <span className="active" data-color="#333333"></span>
                                                        <span data-color="#7C502F"></span>
                                                        <span data-color="#2F366C"></span>
                                                        <span data-color="#874A3D"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="product">
                                            <div className="product_img">
                                                <a href="shop-product-detail.html">
                                                    <img src="assets/images/product_img4.jpg" alt="product_img4" />
                                                </a>
                                                <div className="product_action_box">
                                                    <ul className="list_none pr_action_btn">
                                                        <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                        <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                        <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                        <li><a href="#"><i className="icon-heart"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product_info">
                                                <h6 className="product_title"><a href="shop-product-detail.html">light blue Shirt</a></h6>
                                                <div className="product_price">
                                                    <span className="price">$69.00</span>
                                                    <del>$89.00</del>
                                                    <div className="on_sale">
                                                        <span>20% Off</span>
                                                    </div>
                                                </div>
                                                <div className="rating_wrap">
                                                    <div className="rating">
                                                        <div className="product_rate w-70"></div>
                                                    </div>
                                                    <span className="rating_num">(22)</span>
                                                </div>
                                                <div className="pr_desc">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                </div>
                                                <div className="pr_switch_wrap">
                                                    <div className="product_color_switch">
                                                        <span className="active" data-color="#333333"></span>
                                                        <span data-color="#A92534"></span>
                                                        <span data-color="#B9C2DF"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="product">
                                            <div className="product_img">
                                                <a href="shop-product-detail.html">
                                                    <img src="assets/images/product_img5.jpg" alt="product_img5" />
                                                </a>
                                                <div className="product_action_box">
                                                    <ul className="list_none pr_action_btn">
                                                        <li className="add-to-cart"><a href="#"><i className="icon-basket-loaded"></i> Add To Cart</a></li>
                                                        <li><a href="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></a></li>
                                                        <li><a href="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></a></li>
                                                        <li><a href="#"><i className="icon-heart"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product_info">
                                                <h6 className="product_title"><a href="shop-product-detail.html">blue dress for woman</a></h6>
                                                <div className="product_price">
                                                    <span className="price">$45.00</span>
                                                    <del>$55.25</del>
                                                    <div className="on_sale">
                                                        <span>35% Off</span>
                                                    </div>
                                                </div>
                                                <div className="rating_wrap">
                                                    <div className="rating">
                                                        <div className="product_rate w-80"></div>
                                                    </div>
                                                    <span className="rating_num">(21)</span>
                                                </div>
                                                <div className="pr_desc">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                                </div>
                                                <div className="pr_switch_wrap">
                                                    <div className="product_color_switch">
                                                        <span className="active" data-color="#87554B"></span>
                                                        <span data-color="#333333"></span>
                                                        <span data-color="#5FB7D4"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section bg_redon">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <div className="heading_s1 text-center">
                                    <h2>Our Client Say!</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-9">
                                <div className="testimonial_wrap testimonial_style1 carousel_slider owl-carousel owl-theme nav_style2" data-nav="true" data-dots="false" data-center="true" data-loop="true" data-autoplay="true" data-items='1'>
                                    <div className="testimonial_box">
                                        <div className="testimonial_desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet animi blanditiis consequatur debitis dicta distinctio, enim error eum iste libero modi nam natus perferendis possimus quasi sint sit tempora voluptatem.</p>
                                        </div>
                                        <div className="author_wrap">
                                            <div className="author_img">
                                                <img src="assets/images/user_img1.jpg" alt="user_img1" />
                                            </div>
                                            <div className="author_name">
                                                <h6>Lissa Castro</h6>
                                                <span>Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial_box">
                                        <div className="testimonial_desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet animi blanditiis consequatur debitis dicta distinctio, enim error eum iste libero modi nam natus perferendis possimus quasi sint sit tempora voluptatem.</p>
                                        </div>
                                        <div className="author_wrap">
                                            <div className="author_img">
                                                <img src="assets/images/user_img2.jpg" alt="user_img2" />
                                            </div>
                                            <div className="author_name">
                                                <h6>Alden Smith</h6>
                                                <span>Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial_box">
                                        <div className="testimonial_desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet animi blanditiis consequatur debitis dicta distinctio, enim error eum iste libero modi nam natus perferendis possimus quasi sint sit tempora voluptatem.</p>
                                        </div>
                                        <div className="author_wrap">
                                            <div className="author_img">
                                                <img src="assets/images/user_img3.jpg" alt="user_img3" />
                                            </div>
                                            <div className="author_name">
                                                <h6>Daisy Lana</h6>
                                                <span>Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial_box">
                                        <div className="testimonial_desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet animi blanditiis consequatur debitis dicta distinctio, enim error eum iste libero modi nam natus perferendis possimus quasi sint sit tempora voluptatem.</p>
                                        </div>
                                        <div className="author_wrap">
                                            <div className="author_img">
                                                <img src="assets/images/user_img4.jpg" alt="user_img4" />
                                            </div>
                                            <div className="author_name">
                                                <h6>John Becker</h6>
                                                <span>Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section pb_70">
                    <div className="container">
                        <div className="row no-gutters">
                            <div className="col-lg-4">
                                <div className="icon_box icon_box_style1">
                                    <div className="icon">
                                        <i className="flaticon-shipped"></i>
                                    </div>
                                    <div className="icon_box_content">
                                        <h5>Free Delivery</h5>
                                        <p>If you are going to use of Lorem, you need to be sure there anything</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="icon_box icon_box_style1">
                                    <div className="icon">
                                        <i className="flaticon-money-back"></i>
                                    </div>
                                    <div className="icon_box_content">
                                        <h5>30 Day Return</h5>
                                        <p>If you are going to use of Lorem, you need to be sure there anything</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="icon_box icon_box_style1">
                                    <div className="icon">
                                        <i className="flaticon-support"></i>
                                    </div>
                                    <div className="icon_box_content">
                                        <h5>27/4 Support</h5>
                                        <p>If you are going to use of Lorem, you need to be sure there anything</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section bg_default small_pt small_pb">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="heading_s1 mb-md-0 heading_light">
                                    <h3>Subscribe Our Newsletter</h3>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="newsletter_form">
                                    <form>
                                        <input type="text" className="form-control rounded-0" placeholder="Enter Email Address" />
                                        <button type="submit" className="btn btn-dark rounded-0" name="submit" value="Submit">Subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}



export default Home