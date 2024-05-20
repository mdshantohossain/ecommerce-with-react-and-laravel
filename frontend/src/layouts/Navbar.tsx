


const Navbar = () => {


    return (
        <div className="col-lg-9 col-md-8 col-sm-6 col-9">
            <nav className="navbar navbar-expand-lg">
                <button className="navbar-toggler side_navbar_toggler" type="button"
                        data-toggle="collapse" data-target="#navbarSidetoggle" aria-expanded="false">
                    <span className="ion-android-menu"></span>
                </button>
                <div className="pr_search_icon">
                    <a href="javascript:void(0);" className="nav-link pr_search_trigger"><i
                        className="linearicons-magnifier"></i></a>
                </div>
                <div className="collapse navbar-collapse mobile_side_menu" id="navbarSidetoggle">
                    <ul className="navbar-nav">
                        <li className="dropdown">
                            <a data-toggle="dropdown" className="nav-link dropdown-toggle active"
                               href="#">Home</a>
                            <div className="dropdown-menu">
                                <ul>
                                    <li><a className="dropdown-item nav-link nav_item"
                                           href="index.html">Fashion 1</a></li>
                                    <li><a className="dropdown-item nav-link nav_item"
                                           href="index-2.html">Fashion 2</a></li>
                                    <li><a className="dropdown-item nav-link nav_item"
                                           href="index-3.html">Furniture 1</a></li>
                                    <li><a className="dropdown-item nav-link nav_item"
                                           href="index-4.html">Furniture 2</a></li>
                                    <li><a className="dropdown-item nav-link nav_item"
                                           href="index-5.html">Electronics 1</a></li>
                                    <li><a className="dropdown-item nav-link nav_item active"
                                           href="index-6.html">Electronics 2</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="dropdown">
                            <a className="dropdown-toggle nav-link" href="#"
                               data-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu">
                                <ul>
                                    <li><a className="dropdown-item nav-link nav_item"
                                           href="about.html">About Us</a></li>
                                    <li><a className="dropdown-item nav-link nav_item"
                                           href="contact.html">Contact Us</a></li>
                                    <li><a className="dropdown-item nav-link nav_item"
                                           href="faq.html">Faq</a></li>
                                    <li><a className="dropdown-item nav-link nav_item" href="404.html">404
                                        Error Page</a></li>
                                    <li><a className="dropdown-item nav-link nav_item"
                                           href="login.html">Login</a></li>
                                    <li><a className="dropdown-item nav-link nav_item"
                                           href="signup.html">Register</a></li>
                                    <li><a className="dropdown-item nav-link nav_item"
                                           href="term-condition.html">Terms and Conditions</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="dropdown dropdown-mega-menu">
                            <a className="dropdown-toggle nav-link" href="#"
                               data-toggle="dropdown">Products</a>
                            <div className="dropdown-menu">
                                <ul className="mega-menu d-lg-flex">
                                    <li className="mega-menu-col col-lg-3">
                                        <ul>
                                            <li className="dropdown-header">Woman's</li>
                                            <li><a className="dropdown-item nav-link nav_item"
                                                   href="shop-list-left-sidebar.html">Vestibulum sed</a>
                                            </li>
                                            <li><a className="dropdown-item nav-link nav_item"
                                                   href="shop-left-sidebar.html">Donec porttitor</a>
                                            </li>
                                            <li><a className="dropdown-item nav-link nav_item"
                                                   href="shop-right-sidebar.html">Donec vitae
                                                facilisis</a></li>
                                            <li><a className="dropdown-item nav-link nav_item"
                                                   href="shop-list.html">Curabitur tempus</a></li>
                                            <li><a className="dropdown-item nav-link nav_item"
                                                   href="shop-load-more.html">Vivamus in tortor</a></li>
                                        </ul>
                                    </li>
                                    <li className="mega-menu-col col-lg-3">
                                        <ul>
                                            <li className="dropdown-header">Men's</li>
                                            <li><a className="dropdown-item nav-link nav_item"
                                                   href="shop-cart.html">Donec vitae ante ante</a></li>
                                            <li><a className="dropdown-item nav-link nav_item"
                                                   href="checkout.html">Etiam ac rutrum</a></li>
                                            <li><a className="dropdown-item nav-link nav_item"
                                                   href="wishlist.html">Quisque condimentum</a></li>
                                            <li><a className="dropdown-item nav-link nav_item"
                                                   href="compare.html">Curabitur laoreet</a></li>
                                            <li><a className="dropdown-item nav-link nav_item"
                                                   href="order-completed.html">Vivamus in tortor</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="mega-menu-col col-lg-3">
                                        <ul>
                                            <li className="dropdown-header">Kid's</li>
                                            <li><a className="dropdown-item nav-link nav_item"
                                                   href="shop-product-detail.html">Donec vitae
                                                facilisis</a></li>
                                            <li><a className="dropdown-item nav-link nav_item"
                                                   href="shop-product-detail-left-sidebar.html">Quisque
                                                condimentum</a></li>
                                            <li><a className="dropdown-item nav-link nav_item"
                                                   href="shop-product-detail-right-sidebar.html">Etiam
                                                ac rutrum</a></li>
                                            <li><a className="dropdown-item nav-link nav_item"
                                                   href="shop-product-detail-thumbnails-left.html">Donec
                                                vitae ante ante</a></li>
                                            <li><a className="dropdown-item nav-link nav_item"
                                                   href="shop-product-detail-thumbnails-left.html">Donec
                                                porttitor</a></li>
                                        </ul>
                                    </li>
                                    <li className="mega-menu-col col-lg-3">
                                        <ul>
                                            <li className="dropdown-header">Accessories</li>
                                            <li><a className="dropdown-item nav-link nav_item"
                                                   href="shop-product-detail.html">Donec vitae
                                                facilisis</a></li>
                                            <li><a className="dropdown-item nav-link nav_item"
                                                   href="shop-product-detail-left-sidebar.html">Quisque
                                                condimentum</a></li>
                                            <li><a className="dropdown-item nav-link nav_item"
                                                   href="shop-product-detail-right-sidebar.html">Etiam
                                                ac rutrum</a></li>
                                            <li><a className="dropdown-item nav-link nav_item"
                                                   href="shop-product-detail-thumbnails-left.html">Donec
                                                vitae ante ante</a></li>
                                            <li><a className="dropdown-item nav-link nav_item"
                                                   href="shop-product-detail-thumbnails-left.html">Donec
                                                porttitor</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <div className="d-lg-flex menu_banners">
                                    <div className="col-lg-6">
                                        <div className="header-banner">
                                            <div className="sale-banner">
                                                <a className="hover_effect1" href="#">
                                                    <img src="assets/images/shop_banner_img7.jpg"
                                                         alt="shop_banner_img7"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="header-banner">
                                            <div className="sale-banner">
                                                <a className="hover_effect1" href="#">
                                                    <img src="assets/images/shop_banner_img8.jpg"
                                                         alt="shop_banner_img8"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="dropdown">
                            <a className="dropdown-toggle nav-link" href="#"
                               data-toggle="dropdown">Blog</a>
                            <div className="dropdown-menu dropdown-reverse">
                                <ul>
                                    <li>
                                        <a className="dropdown-item menu-link dropdown-toggler"
                                           href="#">Grids</a>
                                        <div className="dropdown-menu">
                                            <ul>
                                                <li><a className="dropdown-item nav-link nav_item"
                                                       href="blog-three-columns.html">3 columns</a></li>
                                                <li><a className="dropdown-item nav-link nav_item"
                                                       href="blog-four-columns.html">4 columns</a></li>
                                                <li><a className="dropdown-item nav-link nav_item"
                                                       href="blog-left-sidebar.html">Left Sidebar</a>
                                                </li>
                                                <li><a className="dropdown-item nav-link nav_item"
                                                       href="blog-right-sidebar.html">right Sidebar</a>
                                                </li>
                                                <li><a className="dropdown-item nav-link nav_item"
                                                       href="blog-standard-left-sidebar.html">Standard
                                                    Left Sidebar</a></li>
                                                <li><a className="dropdown-item nav-link nav_item"
                                                       href="blog-standard-right-sidebar.html">Standard
                                                    right Sidebar</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <a className="dropdown-item menu-link dropdown-toggler"
                                           href="#">Masonry</a>
                                        <div className="dropdown-menu">
                                            <ul>
                                                <li><a className="dropdown-item nav-link nav_item"
                                                       href="blog-masonry-three-columns.html">3
                                                    columns</a></li>
                                                <li><a className="dropdown-item nav-link nav_item"
                                                       href="blog-masonry-four-columns.html">4
                                                    columns</a></li>
                                                <li><a className="dropdown-item nav-link nav_item"
                                                       href="blog-masonry-left-sidebar.html">Left
                                                    Sidebar</a></li>
                                                <li><a className="dropdown-item nav-link nav_item"
                                                       href="blog-masonry-right-sidebar.html">right
                                                    Sidebar</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <a className="dropdown-item menu-link dropdown-toggler"
                                           href="#">Single Post</a>
                                        <div className="dropdown-menu">
                                            <ul>
                                                <li><a className="dropdown-item nav-link nav_item"
                                                       href="blog-single.html">Default</a></li>
                                                <li><a className="dropdown-item nav-link nav_item"
                                                       href="blog-single-left-sidebar.html">left
                                                    sidebar</a></li>
                                                <li><a className="dropdown-item nav-link nav_item"
                                                       href="blog-single-slider.html">slider post</a>
                                                </li>
                                                <li><a className="dropdown-item nav-link nav_item"
                                                       href="blog-single-video.html">video post</a></li>
                                                <li><a className="dropdown-item nav-link nav_item"
                                                       href="blog-single-audio.html">audio post</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <a className="dropdown-item menu-link dropdown-toggler"
                                           href="#">List</a>
                                        <div className="dropdown-menu">
                                            <ul>
                                                <li><a className="dropdown-item nav-link nav_item"
                                                       href="blog-list-left-sidebar.html">left
                                                    sidebar</a></li>
                                                <li><a className="dropdown-item nav-link nav_item"
                                                       href="blog-list-right-sidebar.html">right
                                                    sidebar</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="dropdown dropdown-mega-menu">
                            <a className="dropdown-toggle nav-link" href="#"
                               data-toggle="dropdown">Shop</a>
                            <div className="dropdown-menu">
                                <ul className="mega-menu d-lg-flex">
                                    <li className="mega-menu-col col-lg-9">
                                        <ul className="d-lg-flex">
                                            <li className="mega-menu-col col-lg-4">
                                                <ul>
                                                    <li className="dropdown-header">Shop Page Layout
                                                    </li>
                                                    <li><a className="dropdown-item nav-link nav_item"
                                                           href="shop-list.html">shop List view</a></li>
                                                    <li><a className="dropdown-item nav-link nav_item"
                                                           href="shop-list-left-sidebar.html">shop List
                                                        Left Sidebar</a></li>
                                                    <li><a className="dropdown-item nav-link nav_item"
                                                           href="shop-list-right-sidebar.html">shop List
                                                        Right Sidebar</a></li>
                                                    <li><a className="dropdown-item nav-link nav_item"
                                                           href="shop-left-sidebar.html">Left
                                                        Sidebar</a></li>
                                                    <li><a className="dropdown-item nav-link nav_item"
                                                           href="shop-right-sidebar.html">Right
                                                        Sidebar</a></li>
                                                    <li><a className="dropdown-item nav-link nav_item"
                                                           href="shop-load-more.html">Shop Load More</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="mega-menu-col col-lg-4">
                                                <ul>
                                                    <li className="dropdown-header">Other Pages</li>
                                                    <li><a className="dropdown-item nav-link nav_item"
                                                           href="shop-cart.html">Cart</a></li>
                                                    <li><a className="dropdown-item nav-link nav_item"
                                                           href="checkout.html">Checkout</a></li>
                                                    <li><a className="dropdown-item nav-link nav_item"
                                                           href="my-account.html">My Account</a></li>
                                                    <li><a className="dropdown-item nav-link nav_item"
                                                           href="wishlist.html">Wishlist</a></li>
                                                    <li><a className="dropdown-item nav-link nav_item"
                                                           href="compare.html">compare</a></li>
                                                    <li><a className="dropdown-item nav-link nav_item"
                                                           href="order-completed.html">Order
                                                        Completed</a></li>
                                                </ul>
                                            </li>
                                            <li className="mega-menu-col col-lg-4">
                                                <ul>
                                                    <li className="dropdown-header">Product Pages</li>
                                                    <li><a className="dropdown-item nav-link nav_item"
                                                           href="shop-product-detail.html">Default</a>
                                                    </li>
                                                    <li><a className="dropdown-item nav-link nav_item"
                                                           href="shop-product-detail-left-sidebar.html">Left
                                                        Sidebar</a></li>
                                                    <li><a className="dropdown-item nav-link nav_item"
                                                           href="shop-product-detail-right-sidebar.html">Right
                                                        Sidebar</a></li>
                                                    <li><a className="dropdown-item nav-link nav_item"
                                                           href="shop-product-detail-thumbnails-left.html">Thumbnails
                                                        Left</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="mega-menu-col col-lg-3">
                                        <div className="header_banner">
                                            <div className="header_banner_content">
                                                <div className="shop_banner">
                                                    <div className="banner_img overlay_bg_40">
                                                        <img src="assets/images/shop_banner4.jpg"
                                                             alt="shop_banner2"/>
                                                    </div>
                                                    <div className="shop_bn_content">
                                                        <h6 className="text-uppercase shop_subtitle">New
                                                            Collection</h6>
                                                        <h5 className="text-uppercase shop_title">Sale
                                                            30% Off</h5>
                                                        <a href="#"
                                                           className="btn btn-white rounded-0 btn-xs text-uppercase">Shop
                                                            Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li><a className="nav-link nav_item" href="contact.html">Contact Us</a></li>
                    </ul>
                </div>
                <div className="contact_phone contact_support">
                    <i className="linearicons-phone-wave"></i>
                    <span>123-456-7689</span>
                </div>
            </nav>
        </div>
    )

}


export default Navbar