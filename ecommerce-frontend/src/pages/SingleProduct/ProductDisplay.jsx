import image from '../../assets/img.png'
import image2 from '../../assets/woman.png'
import React, { useState } from 'react';
import './ProductDisplay.css';
import ImageSlider from '../../components/ImageSlider/ImageSlider';

const ProductDisplay = ({images}) => {
  const productImages = [
    image,
    image2,
    image,
    image2,
    image,
    image2,
    image,
    image2,
    image,
    image2,
    image,
    // Add more images if necessary
  ];
  console.log(images)
 


  const [isSliderOpen, setIsSliderOpen] = useState(false);
    
  const openSlider = () => {
    setIsSliderOpen(true);
  };

  const closeSlider = () => {
    setIsSliderOpen(false);
  };
  const renderSmallImages = () => {
    const smallImages = productImages.slice(1, 5); // Get the second to sixth images
    const smallImageElements = smallImages.map((image, index) => {
    // {index === myArray.length - 1 ? " (Last item)" : ""}
        if(index ==smallImages.length-1){
            return (
            <div  key={index} className="more-images">
                <div onClick={openSlider}>5+ more</div>
                <img  key={index} src={image} alt={`Small Image ${index + 2}`} />
            </div>)
        }
      return(<img onClick={openSlider} key={index} src={image} alt={`Small Image ${index + 2}`} />)
  });

    // if (productImages.length >5) {
    //   smallImageElements.push(
    //     <div key="more-images" className="more-images">5+ images</div>
    //   );
    // }

    return smallImageElements;
  };
  

  return (
    // <div className="product-display">
    //   {isSliderOpen && <ImageSlider pictures={productImages} onClose={closeSlider} />}
    //   <div className="small-images">{renderSmallImages()}</div>
    //   <div className="big-image">
    //     <img src={'http//localhost:8000/images/'+images&&images[0].image_path} onClick={openSlider} alt="Big Image" />
    //   </div>
    // </div>
    <div className="product-display">
      {isSliderOpen && <ImageSlider pictures={productImages} onClose={closeSlider} />}
      <div className="small-images">{renderSmallImages()}</div>
      <div className="big-image">
        <img src={productImages[0]} onClick={openSlider} alt="Big Image" />
      </div>
    </div>
  );
};

export default ProductDisplay;
