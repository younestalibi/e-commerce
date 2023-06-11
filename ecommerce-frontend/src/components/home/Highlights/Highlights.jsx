import './Highlights.css'
import image from '../../../assets/woman.png'
import highlight80 from '../../../assets/hightlight1.png'
import hightlight20 from '../../../assets/hightlight20.png'
import CenteredTitle from '../../CenteredTitle/CenteredTitle'
const Hightlights = () => {
    const hightlights=[
        {image:highlight80,title:'Exclusive Shoes',price:'20%',code:'VATR3920'},
        {image:hightlight20,title:'Exclusive Shoes',price:'20%',code:'VATR3920'},
        {image:hightlight20,title:'Exclusive Shoes',price:'20%',code:'VATR3920'},
        {image:highlight80,title:'Exclusive Shoes',price:'20%',code:'VATR3920'}
    ]
    let isReversed = false;

    return ( 
        <div className="highlight-container">
            <CenteredTitle title='THIS WEEKS HIGHLIGHTS'/>
            <div className='highlights-images'>
                {hightlights.map((e, index) => {
                    let isColumn80 = isReversed ? index % 2 !== 0 : index % 2 === 0;
                    if ((index + 1) % 2 === 0) {
                    isReversed = !isReversed;
                    }

                    return (
                    <div key={index} className={`highlight column-${isColumn80 ? 80 : 20}`}>
                        <img src={e.image} alt={`Image ${index+1}`} />
                        <div className='highlight-box'>
                            <b>{e.title}</b><br />
                            <small>PRICE {e.price} OFF</small>
                            <div>DISCOUNT CODE - {e.code}</div>
                        </div>
                        <h1 className='hightlight-title'>
                            {e.title}
                        </h1>
                    </div>
                    );
                })}
            </div>
        </div>
     );
}
 
export default Hightlights;