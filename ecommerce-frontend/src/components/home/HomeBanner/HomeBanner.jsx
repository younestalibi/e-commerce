import './HomeBanner.css'
import banner from '../../../assets/woman.png'
const HomeBanner = () => {
    return ( 
        <div className='home-banner'>
            <img src={banner} alt="banner" />
        </div>
     );
}
 
export default HomeBanner;