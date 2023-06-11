import './ImageSlider.css'
import React, { useState } from 'react';
import {BsArrowRightSquare,BsArrowLeftSquare} from 'react-icons/bs'
import {GrClose} from 'react-icons/gr'
const ImageSlider = ({ pictures, onClose }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const goToPrev = () => {
      setSelectedIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
    };
  
    const goToNext = () => {
      setSelectedIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
    };
  
    return (
        <div className="slider-overlay">
        <button className="slider-close" onClick={onClose}>
          <GrClose/>
        </button>
        <button className="slider-prev" onClick={goToPrev}>
        <BsArrowLeftSquare />
        </button>
        
        <div className="slider-image-container">
          <img className="slider-image" src={pictures[selectedIndex]} alt={`Picture ${selectedIndex}`} />
        </div>
        <button className="slider-next" onClick={goToNext}>
        <BsArrowRightSquare />
        </button>
      </div>
    );
  };
  


export default ImageSlider;