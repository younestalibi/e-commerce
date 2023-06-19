import Header from '../../components/Navbar/Header/Header';
import Menu from '../../components/Navbar/Menu/Menu';
import Navbar from '../../components/Navbar/Navbar/Navbar';
import './Home.css'
import SimpleImageSlider from "react-simple-image-slider";
import image from '../../assets/woman.png'
import image2 from '../../assets/woman2.png'

import Hightlights from '../../components/home/Highlights/Highlights';
import ProductCard from '../../components/ProductCard/ProductCard';
import Footer from '../../components/Footer/Footer';
import BrandLogos from '../../components/BrandLogos/BrandLogos';
import CenteredTitle from '../../components/CenteredTitle/CenteredTitle';
import HomeBanner from '../../components/home/HomeBanner/HomeBanner';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getSuggestion } from '../../Provider/Features/Product/productSlice';
import { useLocation } from 'react-router-dom';

const Home = () => {
    const location=useLocation()
    useEffect(()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },[location.pathname])
    const dispatch=useDispatch()
    const {products,suggestedProduct,isLoading}=useSelector((state)=>state.product)
    useEffect(()=>{
        dispatch(getSuggestion())
    },[])

    const images = [
        { url:image },
        { url:image2 },
        // { url:image },
        // { url:image }
      ];
    const popular=[1,2,3,4]
    return ( 
        <div className="home-container">
            <div className="home-wrapper">
                <div className='home-banner'>
                    <SimpleImageSlider
                        width={'100%'}
                        height={500}
                        images={images}
                        showBullets={true}
                        showNavs={true}
                        navSize={30}
                        loop={true}
                        autoPlay={true}
                        useGPURender={true}
                        autoPlayDelay={2.5}
                        slideDuration={1}
                    />
                </div>
                <Hightlights/>
                <div>
                    <CenteredTitle title='THIS WEEKS HIGHLIGHTS'/>
                    <div className='popular-items'>
                        {suggestedProduct&&suggestedProduct.map((e,i)=>(
                            <ProductCard product={e}/>
                        ))}
                    </div>
                </div>
                
                <BrandLogos/>
                <HomeBanner/>
                

            </div>
        </div>
     );
}
 
export default Home;