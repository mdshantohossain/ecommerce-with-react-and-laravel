import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../pages/home";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";


const Routers = () => {


    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index element={<Home />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}


export default Routers