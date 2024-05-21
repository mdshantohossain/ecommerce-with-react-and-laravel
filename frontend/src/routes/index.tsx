import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from "../pages/home";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import SubscribeNewsletter from "../components/SubscribeNewsletter";
import Wishlist from "../pages/wishlist";
import Checkout from "../pages/checkout";
import Cart from "../pages/cart";
import Blogs from "../pages/blog";
import Profile from "../pages/profile";
import ProductDetail from "../pages/product/ProductDetail";
import OrderCompleted from "../pages/checkout/OrderCompleted";
import CategoryProduct from "../pages/product/CategoryProduct";
import Contact from "../pages/contact";


const Routers = () => {

    return(
        <BrowserRouter>
            <Header />
            <div className="main_content">
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/contact-us" element={<Contact />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/my-account" element={<Profile />} />
                    <Route path="/category-product" element={<CategoryProduct  />} />
                    <Route path="/product-detail" element={<ProductDetail  />} />
                    <Route path="/order-completed" element={<OrderCompleted  />} />
                </Routes>
                <SubscribeNewsletter />
            </div>
            <Footer />
        </BrowserRouter>
    )
}


export default Routers