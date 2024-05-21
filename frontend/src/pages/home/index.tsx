import FeaturedProduct from "../../components/feature-product/FeaturedProduct";
import ExclusiveProduct from "../../components/exclusive-product/ExclusiveProduct";
import BannerSection from "../../components/banner-section/BannerSection";
import ClientSay from "../../components/client-say/ClientSay";
import Feature from "../../components/feature/Feature";
import SeasonOffer from "../../components/SeasonOffer";
import Navbar from "../../layouts/Navbar";
import NewCollection from "../../components/new-collection/NewCollection";


const Home = () => {


    return(
        <>

               <BannerSection />

                <NewCollection />

                <ExclusiveProduct />

                <SeasonOffer />

                <FeaturedProduct />

                <ClientSay />

                <Feature />

        </>
    )
}


export default Home