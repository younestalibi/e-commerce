import Header from '../../components/Navbar/Header/Header';
import Menu from '../../components/Navbar/Menu/Menu';
import Navbar from '../../components/Navbar/Navbar/Navbar';
import './Home.css'
import SimpleImageSlider from "react-simple-image-slider";
import image from '../../assets/woman.png'
import Hightlights from '../../components/home/Highlights/Highlights';
import ProductCard from '../../components/ProductCard/ProductCard';
import Footer from '../../components/Footer/Footer';
import BrandLogos from '../../components/BrandLogos/BrandLogos';
import CenteredTitle from '../../components/CenteredTitle/CenteredTitle';
import HomeBanner from '../../components/home/HomeBanner/HomeBanner';

const Home = () => {
    const images = [
        { url:image },
        { url:image },
        { url:image },
        { url:image }
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
                        {popular.map((e,i)=>(
                            // <ProductCard/>
                            <div>asdfad</div>
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